import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import * as React from 'react';
import {Settings} from "../../navigator/Settings";
import {COLORS} from "../../../variables/colors";

export function SoundScreen() {

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View>
            <Settings/>
            <View style={[styles.container, themeContainerStyle]}>
                <Text style={[styles.title, themeTextStyle]}>Réglages sonores</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    darkContainer: {
        backgroundColor: COLORS.dark_light,
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        paddingHorizontal: 70,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
});