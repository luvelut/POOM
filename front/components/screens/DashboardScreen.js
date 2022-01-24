import {StyleSheet, Text, View, FlatList, ActivityIndicator, Alert, TouchableHighlight} from 'react-native';
import * as React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import {useEffect, useState} from 'react';
import {Header} from '../common/Header';
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
            <FontAwesome5 name="circle" size={70} color="#0000ff" />
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

    if (isLoading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>
    return (
        <View>
            <Header/>
            <View style={styles.content}>
                <View style={styles.buttons}>
                    <View style={[styles.button, styles.leftButton]}>
                        <Text style={styles.buttonText}>Quantité économisées</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Suivi composte</Text>
                    </View>
                </View>
                <Text style={styles.title}>Badges</Text>
                <View style={styles.badgeSection}>
                    <View style={styles.badgeList}>
                        <MaterialCommunityIcons style={styles.badgeItem} name="recycle-variant" size={30} color="#C49372" />
                        <MaterialCommunityIcons style={styles.badgeItem} name="recycle-variant" size={30} color="#9B9B9B" />
                        <MaterialCommunityIcons style={styles.badgeItem} name="recycle-variant" size={30} color="#FD5900" />
                        <MaterialCommunityIcons style={styles.badgeItem} name="recycle-variant" size={30} color="#007FFD" />
                    </View>
                    <TouchableHighlight style={styles.icon}
                                        underlayColor="#ffffff"
                                        accessibilityRole="button"
                                        onPress={() => {
                                            Alert.alert("Pas encore disponible");
                                        }
                                        }>
                        <Ionicons name="ios-add-outline" size={45} color="#9C9CD0" />
                    </TouchableHighlight>
                </View>
                <Text style={styles.title}>Liste des déchets</Text>
                <View style={styles.list}>
                    <FlatList
                        numColumns={tabData.length}
                        data={tabData.slice(1,3)}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
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
        paddingVertical: 5,
        paddingHorizontal: 15,
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
        paddingTop: 5
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
        paddingHorizontal: 9
    },
    buttons: {
        flexDirection:'row',
        paddingBottom: 10
    },
    button: {
        backgroundColor: '#816BFD',
        borderRadius: 25,
        padding: 20,
        alignItems: 'center',
        alignContent: "center"
    },
    buttonText: {
        color: 'white'
    },
    leftButton: {
        width: 140,
        marginRight: 25
    }
});