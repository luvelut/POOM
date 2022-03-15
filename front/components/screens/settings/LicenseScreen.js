import {StyleSheet, Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import * as React from 'react';
import {Settings} from "../../navigator/Settings";
import {FontAwesome} from "@expo/vector-icons";
import {COLORS} from '../../../variables/colors'

export function LicenseScreen() {

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View>
            <Settings/>
            <View style={[styles.container, themeContainerStyle]}>
                <Text style={[styles.title, themeTextStyle]}>Paramètres licence</Text>
                <View style={styles.info}>
                    <FontAwesome style={styles.icon} name='euro' color="#816BFD" size={40}/>
                    <Text style={[styles.subtitle, themeTextStyle]}>Licence valable jusqu'au 5/09/2022</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={[styles.buttonText]}>Contacter un administrateur</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 20,
        paddingVertical: 20,
    },
    darkContainer: {
        backgroundColor: COLORS.dark_light,
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
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
        backgroundColor: COLORS.background,
        borderRadius: 20,
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon : {
        paddingRight: 10
    },
    button: {
        backgroundColor: COLORS.primary,
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