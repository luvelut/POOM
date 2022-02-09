import { StyleSheet, Text, View, Button, Modal, Vibration, Pressable, FlatList } from 'react-native';
import * as React from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../../firebase'
import { auth } from '../../firebase'

export function ScannerScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [apiData, setApiData] = useState([]);

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
                        <Text style={styles.text}>Ce produit contient les matériaux suivants :</Text>
                        <Text>{apiData}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Fermer</Text>
                        </Pressable>
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
        backgroundColor: "white",
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
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: '#804cfc',
        marginTop: 10
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
        marginBottom: 10
    }
});