import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import * as React from 'react';
import ml5 from "ml5";
import axios from 'axios';

export function PictureScreen({ route }) {
    const { image } = route.params;
    if(!image) Alert.alert('Un probleme est survenu');

    async function getDbWaste() {
        try {
            const DATA = await axios.get('https://www.poom-api.lestuc.fr/public/');
            console.log(DATA.data);

        } catch(err) {
            console.log("error: ", err);
        }
    }

    //getDbWaste();

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: image }} style={{ flex: 1 }} />
        </View>
    );
}