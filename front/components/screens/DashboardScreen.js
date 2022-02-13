import {StyleSheet, Text, useColorScheme,View, FlatList, Image, ActivityIndicator, TouchableOpacity, Alert, TouchableHighlight} from 'react-native';
import * as React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import {useEffect, useState} from 'react';
import {Header} from '../common/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { collection, query, where, getDocs } from "firebase/firestore";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export function DashboardScreen({navigation}) {
   
    const [tabData, setTabData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function getUserWaste() {
        return new Promise((resolve) => {
            const data=[];
            db.collection("waste").where("user", "==", auth.currentUser?.email)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    resolve(data);
                }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        });
    }

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
    );

    let isMounted = false;
    useEffect(() => {
        if (!isMounted) {
            (async () => {
                setTabData(await getUserWaste());
                setIsLoading(false);
            })();
        }

        return () => {
            isMounted = true
        }
    }, []);
    
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    if (isLoading) return <View style={[styles.container, styles.themeContainerStyle]}><ActivityIndicator size="large" color="#0000ff" /></View>
    return (
        <View style={themeContainerStyle}>
            <Header/>
            <View style={[styles.content, themeContainerStyle]}>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Economy')}>
                    <LinearGradient
                        colors={['rgb(165,107,253)', 'transparent']}
                        style={styles.buttonGradienteQuantiteesEco}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.buttonText}>Quantitées économisées</Text>
                    </LinearGradient> 
                        <Image style={styles.buttonQuantiteesEco} source={require('../../assets/bouton/quantitees_economisees.png')}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => Alert.alert("En cours de développement")}>
                    <LinearGradient
                        colors={['rgb(165,107,253)', 'transparent']}
                        style={styles.buttonGradientSuivi}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.buttonText}>Suivi composte</Text>
                    </LinearGradient> 
                        <Image style={styles.buttonSuivi} source={require('../../assets/bouton/composte.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.title, themeTextStyle]}>Badges</Text>
                <View style={styles.badgeSection}>
                    <View style={styles.badgeList}>
                        <Image style={styles.badgeItem} source={require('../../assets/badges/main_verte.png')}/>
                        <Image style={styles.badgeItem} source={require('../../assets/badges/apprenti_ecolo.png')}/>
                        <Image style={styles.badgeItem} source={require('../../assets/badges/pro_du_tri.png')}/>
                    </View>
                    <TouchableHighlight style={styles.icon}
                                        underlayColor="#ffffff"
                                        accessibilityRole="button"
                                        onPress={() => {
                                            navigation.navigate('Badge')
                                        }
                                        }>
                        <Ionicons name="ios-add-outline" size={45} color="#9C9CD0" />
                    </TouchableHighlight>
                </View>
                <Text style={[styles.title, themeTextStyle]}>Liste des déchets</Text>
                <View style={styles.list}>
                    <FlatList
                        numColumns={2}
                        data={[tabData[0],tabData[1]]}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                        scrollEnabled={false}
                    />
                    <TouchableHighlight style={styles.icon}
                                        underlayColor="#ffffff"
                                        accessibilityRole="button"
                                        onPress={() => {
                                            navigation.navigate('List', {tabWaste: tabData});
                                        }
                                        }>
                        <Ionicons name="ios-add-outline" size={45} color="#9C9CD0" />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    darkContainer: {
        backgroundColor: '#394153',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
    title: {
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    content: {
        paddingHorizontal: 35,
    },
    item: {
        alignItems: 'center',
        padding:5,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    icon: {
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 10,
        marginLeft: 5
    },
    itemTitle: {
        paddingTop: 5,
        fontWeight: 'bold'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    badgeSection: {
        flexDirection: 'row',
        paddingBottom: 15,
        alignItems: 'center'
    },
    badgeList: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
    },
    badgeItem: {
        height: 60,
        width: 60,
        marginRight: 15
    },
    buttons: {
        flexDirection:'row',
        paddingBottom: 10
    },
    buttonText: {
        bottom : 20,
        left : 15,
        position: 'absolute',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonQuantiteesEco:{
        left:1,
        right:20,
        width: 160,
        height: 100,
        borderRadius: 25,
    },
    buttonGradienteQuantiteesEco:{
        position: 'absolute',
        left:1,
        right:20,
        width: 160,
        height: 100,
        borderRadius: 25,
        zIndex:1,
    },
    buttonSuivi:{
        right:1,
        left:20,
        width: 160,
        height: 100,
        borderRadius: 25,
    },
    buttonGradientSuivi:{
        position: 'absolute',
        right:1,
        left:20,
        width: 160,
        height: 100,
        borderRadius: 25,
        zIndex:1,
    }
});