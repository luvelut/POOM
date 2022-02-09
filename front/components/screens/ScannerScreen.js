import { StyleSheet, Text, View, Button, Modal, Vibration, Pressable, FlatList, Image } from 'react-native';
import * as React from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../../firebase'
import { auth } from '../../firebase'
import {FontAwesome} from "@expo/vector-icons";

export function ScannerScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [productName, setProductName] = useState(null);
    const [productUrl, setProductUrl]= useState(null)
    let grey=false;
    let yellow=false;
    let green=false;

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    async function setCollection(name,trash) {
        const randomId=Math.floor(Math.random() * 100);
        const cityRef = db.collection('waste').doc(randomId.toString());

        const res = await cityRef.set({
            name: name,
            trash: trash,
            user: auth.currentUser?.email
        }, {merge: true});
    }

    async function getProductData(number) {

        const ONE_SECOND_IN_MS = 1000;
    ;

      
        try {
            const DATA = await axios.get('https://world.openfoodfacts.org/api/v0/product/'+number+'.json');
            await setCollection(DATA.data.product.product_name_fr, DATA.data.product.packaging);
            setModalVisible(true);
            Vibration.vibrate( ONE_SECOND_IN_MS)
            setApiData(DATA.data.product.packaging);
            setProductName(DATA.data.product.product_name_fr);
            setProductUrl(DATA.data.product.selected_images.front.display.fr);
        } catch(err) {
                console.log("error: ", err);
        }
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        getProductData(data);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    if(apiData.includes('Plastique')) {
        grey=true;
    }

    if(apiData.includes('Verre')) {
        green=true;
    }

    if(apiData.includes('Carton')) {
        yellow=true;
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.info}>
                            <Image style={styles.image} source={{uri: productUrl}}/>
                            <Text style={styles.text}>Le produit est-il : "{productName}" ?</Text>
                            { grey ?
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor="grey" >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                                </View>
                                <Text>Décher ménager</Text>
                            </View> :
                                <View/>
                            }
                            { yellow ?
                                <View style={styles.label}>
                                    <View style={styles.iconCircle} backgroundColor="#FECE00" >
                                        <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                                    </View>
                                    <Text>Décher recyclage</Text>
                                </View> :
                                <View/>
                            }
                            { green ?
                                <View style={styles.label}>
                                    <View style={styles.iconCircle} backgroundColor="green" >
                                        <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                    </View>
                                    <Text>Déchet en verre</Text>
                                </View> :
                                <View/>
                            }
                        </View>
                        <View style={styles.buttons}>
                            <Pressable
                                style={[styles.buttonClose, styles.leftButton]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <FontAwesome style={styles.icon} name='check' color="#3CB881" size={40}/>
                            </Pressable>
                            <Pressable
                                style={[styles.buttonClose, styles.rightButton]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <FontAwesome style={styles.icon} name='times' color="#FF3D5E" size={40}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.scanner]}
            />
            {scanned && <View style={styles.boutton}>
                <Button color={'white'} title={'Scanner à nouveau'} onPress={() => setScanned(false)} />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 30
    },
    scanner: {
        margin: '10%',
        borderRadius: 30
    },
    boutton: {
        backgroundColor:'#804cfc',
        borderRadius: 30,
        width: '50%',
        marginLeft:'25%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#F4F4FC",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 300
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 20,
        width: 105,
        height: 100,
        alignItems: 'center',
        paddingTop: 30
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    text: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 20
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCircle: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10
    },
    image: {
        height: 200,
        width: 150,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rightButton: {
        marginLeft: 5
    },
    leftButton: {
        marginRight: 5
    },
    info: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 30
    }
});