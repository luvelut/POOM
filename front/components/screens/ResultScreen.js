import {ActivityIndicator, Alert, Image, Pressable, StyleSheet, Text, Vibration, View, ScrollView} from 'react-native';
import * as React from 'react';
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import {auth, db} from "../../firebase";
import axios from "axios";
import {COLORS} from '../../variables/colors'

export function ResultScreen({route, navigation}) {
    const [isLoading, setIsLoading] = useState(true);
    const { number } = route.params;
    const [apiData, setApiData] = useState([]);
    const [productName, setProductName] = useState(null);
    const [productUrl, setProductUrl]= useState(null)
    let grey=false;
    let yellow=false;
    let green=false;
    let warning=false;

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
    if(!apiData.includes('Verre') && !apiData.includes('Plastique') && !apiData.includes('Carton')) {
        navigation.navigate('Error', {notFound: true})
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

    const tabPackaging=[grey,green,yellow];
    if((tabPackaging.filter(trash => trash===true)).length>=2) {
        warning=true;
    }

    if (isLoading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <ScrollView>
                <View style={styles.info}>
                    <Image style={styles.image} source={{uri: productUrl}}/>
                    <Text style={styles.text}>{productName}</Text>
                    { warning &&
                    <View style={styles.warning}>
                        <Text>Attention, ce produit doit être trié dans des poubelles séparées : le plastique dans la poubelle grise et le carton dans la poubelle jaune</Text>
                    </View>}
                    { grey ?
                        <View style={styles.infoTrash}>
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor={COLORS.grey_trash} >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet ménager</Text>
                            </View>
                            <View style={styles.information}>
                                <Image style={styles.imageTrash} source={require('../../assets/poubelles/poubelleMenagers.png')}/>
                                <Text style={styles.informationText}>Ce déchet va dans la poubelle grise : il doit être jeté.</Text>
                            </View>
                        </View>:
                        <View/>
                    }
                    { yellow ?
                        <View style={styles.infoTrash}>
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor={COLORS.yellow_trash} >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet recyclabe</Text>
                            </View>
                            <View style={styles.information}>
                                <Image style={styles.imageTrash} source={require('../../assets/poubelles/poubelleRecyclable.png')}/>
                                <Text style={styles.informationText}>Ce déchet va dans la poubelle jaune : il est recyclabe.</Text>
                            </View>
                        </View>:
                        <View/>
                    }
                    { green ?
                        <View style={styles.infoTrash}>
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor={COLORS.green_trash} >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet en verre</Text>
                            </View>
                            <View style={styles.information}>
                                <Image style={styles.imageTrash} source={require('../../assets/poubelles/poubelleVerre.png')}/>
                                <Text style={styles.informationText}>Ce déchet va dans la poubelle à verre.</Text>
                            </View>
                        </View>:
                        <View/>
                    }
                </View>
                <View style={styles.buttons}>
                    <Pressable
                        style={[styles.buttonClose, styles.leftButton]}
                        onPress={() => {setCollection(); navigation.navigate('New',{name: productName, img: productUrl, grey: grey, yellow:yellow, green:green})}}
                    >
                        <FontAwesome style={styles.icon} name='check' color={COLORS.success} size={40}/>
                    </Pressable>
                    <Pressable
                        style={[styles.buttonClose, styles.rightButton]}
                        onPress={() => navigation.navigate('Error', {notFound: false})}
                    >
                        <FontAwesome style={styles.icon} name='times' color={COLORS.error} size={40}/>
                    </Pressable>
                </View>
                </ScrollView>
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
        backgroundColor: COLORS.background
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
        alignItems: 'center',
        paddingTop: 10
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
        borderRadius: 20
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
        alignItems: 'center',
        maxWidth: 350
    },
    infoTrash: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    information: {
        flexDirection: 'row',
        alignItems:'center',
        paddingTop:10
    },
    informationText: {
        maxWidth: 150,
        paddingLeft: 10
    },
    warning: {
        backgroundColor: COLORS.background,
        borderRadius: 20,
        padding: 10
    }
});