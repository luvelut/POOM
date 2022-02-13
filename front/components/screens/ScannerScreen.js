import {StyleSheet, Text, View, Button, TouchableOpacity, Alert, Modal, Pressable, Image} from 'react-native';
import * as React from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import BarcodeMask from 'react-native-barcode-mask';
import {Ionicons} from "@expo/vector-icons";

export function ScannerScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        navigation.navigate('Result', {number: data});
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.scanner]}
            >
                <BarcodeMask showAnimatedLine={false} edgeColor={'#804cfc'} />
            </BarCodeScanner>
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
                        <Image style={styles.img} source={require('../../assets/poom.png')}/>
                        <Ionicons style={styles.icon} name='chatbubble-ellipses-outline' color="#A6A6D5" size={40}/>
                        <Text style={styles.text}>Pour scanner ton code barre, approche ton téléphone comme si tu le prenais en photo et laisse la magie opérer !</Text>
                        <Pressable
                            style={styles.modalButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.modalButtonTxt}>D'accord</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.infoContainer}><Text style={styles.infoContent}>?</Text></View>
            </TouchableOpacity>
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
        width: 300,
    },
    boutton: {
        backgroundColor:'#804cfc',
        borderRadius: 30,
        width: '50%',
        marginLeft:'25%'
    },
    mask: {
        zIndex: 3,
        elevation:2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    infoContainer: {
        elevation: 2,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 200,
        right: 50
    },
    infoContent: {
        color: "#A6A6D5",
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalButtonTxt: {
        color: 'white',
        fontWeight: 'bold'
    },
    modalButton: {
        borderRadius: 20,
        backgroundColor: '#804cfc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 30
    },
    img: {
        margin: 30,
        height: 150,
        width: 95
    },
    icon: {
        position: 'absolute',
        top: 60,
        right: 60
    },
    text: {
        textAlign: 'center'
    }
});