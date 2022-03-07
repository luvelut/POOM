import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {COLORS} from "../../variables/colors";
import {FontAwesome} from "@expo/vector-icons";
import {auth} from '../../services/Firebase';
import * as WasteService from "../../services/wasteService";
import {useEffect, useState} from "react";
import * as Progress from 'react-native-progress';

export function NewTrashScreen({route, navigation}) {
    const [tabData, setTabData] = useState([]);
    const { name, img, grey, yellow, green } = route.params;

    useEffect(() => {
        (async () => {
            setTabData(await WasteService.getWasteByUser(auth.currentUser?.email));
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.firstSquare}/>
            <View style={styles.secondSquare}/>
            <View style={styles.content}>
                <Image style={styles.img} source={require('../../assets/poom.png')}/>
                <Text style={styles.title}>Nouveau déchet !</Text>
                <View style={styles.evolution}>
                    <View style={styles.numberCircle}>
                        <Text style={styles.numberText}>{tabData.length}</Text>
                    </View>
                    <Progress.Bar progress={(tabData.length)/100} width={100} borderWidth={0} color={COLORS.primary} unfilledColor={COLORS.background} height={10}/>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Scanner')}
                >
                    <View style={styles.button}><Text style={styles.textButton}>Recommencer</Text></View>
                </TouchableOpacity>
            </View>
            <View style={styles.trashContent}>
                <Image style={styles.image} source={{uri: img}}/>
                <View>
                    <Text style={styles.subtitle}>{name}</Text>

                    { grey ?
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor={COLORS.grey_trash} >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet ménager</Text>
                            </View>:
                        <View/>
                    }
                    { yellow ?
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor={COLORS.yellow_trash} >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet recyclabe</Text>
                            </View>:
                        <View/>
                    }
                    { green ?
                            <View style={styles.label}>
                                <View style={styles.iconCircle} backgroundColor={COLORS.green_trash} >
                                    <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                                </View>
                                <Text>Déchet en verre</Text>
                            </View> :
                        <View/>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
        paddingTop: 100
    },
    content: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical: 50,
        alignItems: 'center',
    },
    trashContent: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    iconCircle: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 50,
        marginRight: 10
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    numberText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    numberCircle: {
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: COLORS.tertiary,
        backgroundColor: 'white',
        zIndex: 3,
        marginRight: -5
    },
    evolution: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        position: 'absolute',
        height: 130,
        width: 80,
        top: -100
    },
    firstSquare: {
        backgroundColor: COLORS.quaternary,
        height: 100,
        width: 200,
        borderRadius: 20,
        position: "absolute",
        top: 100,
    },
    secondSquare: {
        backgroundColor: COLORS.quinary,
        height: 50,
        width: 200,
        borderRadius: 20,
        position: "absolute",
        top: 80,
        left: 50
    }
});