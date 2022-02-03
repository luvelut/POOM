import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {Settings} from "../../navigator/Settings";
import {FontAwesome} from "@expo/vector-icons";

export function LicenseScreen() {
    return (
        <View>
            <Settings/>
            <View style={styles.container}>
                <Text style={styles.title}>Paramètres licence</Text>
                <View style={styles.info}>
                    <FontAwesome style={styles.icon} name='euro' color="#816BFD" size={40}/>
                    <Text style={styles.subtitle}>Licence valable jusqu'au 5/09/2022</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Contacter un administrateur</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 70,
        paddingVertical: 20,
    },
    subtitle: {
        fontWeight: 'bold',
    },
    info: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#F4F4FC",
        borderRadius: 20,
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon : {
        paddingRight: 10
    },
    button: {
        backgroundColor: '#6B6BFD',
        padding : 10,
        borderRadius: 20,
        alignItems:'center',
        marginTop: 20,
        marginHorizontal: 60,
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    }
});