import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import {COLORS} from '../../variables/colors'

export function ErrorScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.firstSquare}/>
            <View style={styles.secondSquare}/>
            <View style={styles.content}>
                <Image style={styles.img} source={require('../../assets/poomerror.png')}/>
                <Text style={styles.title}>Oups !</Text>
                <Text style={styles.subtitle}>Poom s'est trompé</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Scanner')}
                >
                    <View style={styles.button}><Text style={styles.textButton}>Recommencer</Text></View>
                </TouchableOpacity>
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
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitle: {
        color: COLORS.secondary,
        fontSize: 15,

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
    img: {
        position: 'absolute',
        height: 140,
        width: 100,
        top: -130
    },
    firstSquare: {
        backgroundColor: COLORS.quaternary,
        height: 100,
        width: 200,
        borderRadius: 20,
        position: "absolute",
        top: 170,
    },
    secondSquare: {
        backgroundColor: COLORS.quinary,
        height: 50,
        width: 200,
        borderRadius: 20,
        position: "absolute",
        top: 150,
        left: 50
    }
});