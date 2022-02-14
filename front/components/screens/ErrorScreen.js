import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {COLORS} from '../../variables/colors'

export function ErrorScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Oups !</Text>
                <Text>Poom s'est trompé</Text>
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
        backgroundColor: COLORS.background
    },
    content: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical: 50,
        alignItems: 'center'
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
    }
});