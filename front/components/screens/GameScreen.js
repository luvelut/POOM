import {Alert, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {COLORS} from '../../variables/colors'
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {useState} from "react";

export function GameScreen() {
    const [modalVisible, setModalVisible] = useState(false);

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
                        <Text style={styles.modalText}>Le jeu n'est pas encore disponible ... il est en cours de développement !</Text>
                        <Pressable
                            style={styles.modalButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.modalButtonTxt}>D'accord</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={styles.trashContainer}>
                <Image style={styles.image} source={require('../../assets/poubelles/poubelleMenagers.png')}/>
                <Image style={styles.image} source={require('../../assets/poubelles/poubelleRecyclable.png')}/>
                <Image style={styles.image} source={require('../../assets/poubelles/poubelleVerre.png')}/>
            </View>
            <View style={styles.poomContainer}>
                <View style={styles.question}>
                    <FontAwesome name={'question'} size={50} color={COLORS.primary}/>
                    <View style={styles.middle}><FontAwesome name={'question'} size={50} color={COLORS.secondary}/></View>
                    <FontAwesome name={'question'} size={50} color={COLORS.primary}/>
                </View>
                <Image style={styles.image} source={require('../../assets/poom.png')}/>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    <View style={styles.button}>
                        <Text style={styles.text}>GO</Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.background}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "space-around"
    },
    trashContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 70,
        height: 110,
        padding: 10
    },
    background: {
        backgroundColor: COLORS.senary,
        position: "absolute",
        bottom: -800,
        left: -300,
        width: 1000,
        height: 1000,
        borderRadius: 500,
        transform: [{ rotate: "-135deg" }],
        zIndex: -3
    },
    poomContainer: {
        alignItems: 'center',
        paddingBottom: 50
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical: 10,
        marginTop: 20
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    question: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 30
    },
    middle: {
        paddingBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: COLORS.background,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 300,
    },
    modalButton: {
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 30
    },
    modalButtonTxt: {
        color: 'white',
        fontWeight: 'bold'
    },
    modalText: {
        textAlign: 'center'
    }
})
