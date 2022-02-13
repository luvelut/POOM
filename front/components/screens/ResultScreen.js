import {ActivityIndicator, Alert, Image, Pressable, StyleSheet, Text, Vibration, View} from 'react-native';
import * as React from 'react';
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import {auth, db} from "../../firebase";
import axios from "axios";

export function ResultScreen({route, navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const { number } = route.params;
    const [apiData, setApiData] = useState([]);
    const [productName, setProductName] = useState(null);
    const [productUrl, setProductUrl]= useState(null)
    let grey=false;
    let yellow=false;
    let green=false;

    if(!number) {
        Alert.alert("Un problème est survenu lors du scan du code barre... Réésayez");
        navigation.navigate('Scanner');
    }

    async function setCollection() {
        const randomId=Math.floor(Math.random() * 100);
        const cityRef = db.collection('waste').doc(randomId.toString());
        if(!productUrl) { setProductUrl('https://via.placeholder.com/150/A6A6D5/FFFFFF/?text=Image') }
        const res = await cityRef.set({
            name: productName,
            packaging: apiData,
            user: auth.currentUser?.email,
            image: productUrl,
            date: new Date().toLocaleDateString(),
            trashRecyclabe:yellow,
            trashVerre: green,
            trashMenager: grey
        }, {merge: true});
    }

    async function getProductData(number) {

        try {
            const DATA = await axios.get('https://world.openfoodfacts.org/api/v0/product/'+number+'.json');
            const ONE_SECOND_IN_MS = 1000;
            Vibration.vibrate( ONE_SECOND_IN_MS)
            setApiData(DATA.data.product.packaging);
            setProductName(DATA.data.product.product_name_fr);
            setProductUrl(DATA.data.product.selected_images.front.display.fr);
            setIsLoading(false);
        } catch(err) {
            console.log("error: ", err);
        }
    }

    getProductData(number);

    if(apiData.includes('Plastique')) {
        grey=true;
    }

    if(apiData.includes('Verre')) {
        green=true;
    }

    if(apiData.includes('Carton')) {
        yellow=true;
    }

    if (isLoading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.info}>
                    <Image style={styles.image} source={{uri: productUrl}}/>
                    <Text style={styles.text}>Le produit est-il : "{productName}" ?</Text>
                    { grey ?
                        <View style={styles.infoTrash}>
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor="grey" >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                                </View>
                                <Text>Déchet ménager</Text>
                            </View>
                            <Image style={styles.imageTrash} source={require('../../assets/poubelles/poubelleMenagers.png')}/>
                        </View>:
                        <View/>
                    }
                    { yellow ?
                        <View style={styles.infoTrash}>
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor="#FECE00" >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                                </View>
                                <Text>Déchet recyclage</Text>
                            </View>
                            <Image style={styles.imageTrash} source={require('../../assets/poubelles/poubelleRecyclable.png')}/>
                        </View>:
                        <View/>
                    }
                    { green ?
                        <View style={styles.infoTrash}>
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor="green" >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet en verre</Text>
                            </View>
                            <Image style={styles.imageTrash} source={require('../../assets/poubelles/poubelleVerre.png')}/>
                        </View>:
                        <View/>
                    }
                </View>
                <View style={styles.buttons}>
                    <Pressable
                        style={[styles.buttonClose, styles.leftButton]}
                        onPress={() => {setCollection(); navigation.navigate('Scanner')}}
                    >
                        <FontAwesome style={styles.icon} name='check' color="#3CB881" size={40}/>
                    </Pressable>
                    <Pressable
                        style={[styles.buttonClose, styles.rightButton]}
                        onPress={() => navigation.navigate('Scanner')}
                    >
                        <FontAwesome style={styles.icon} name='times' color="#FF3D5E" size={40}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "#F4F4FC"
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        width: 600,
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
        width: 120,
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
    imageTrash: {
        height: 70,
        width: 45,
        marginTop: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30
    },
    rightButton: {
        marginLeft: 10
    },
    leftButton: {
        marginRight: 30
    },
    info: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 30,
        alignItems: 'center'
    },
    infoTrash: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
});