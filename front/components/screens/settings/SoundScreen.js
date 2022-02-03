import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {Settings} from "../../navigator/Settings";
import {FontAwesome} from "@expo/vector-icons";

export function SoundScreen() {
    return (
        <View>
            <Settings/>
            <View style={styles.container}>
                <Text style={styles.title}>Réglages sonores</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 70,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
});