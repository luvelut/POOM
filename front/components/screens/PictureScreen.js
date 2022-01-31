import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import * as React from 'react';
//import ml5 from "ml5";
import {useState} from 'react'
import axios from 'axios';

export function PictureScreen({ route }) {
    const [result, setResult] = useState([]);

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

    /*
    const classifier = ml5.imageClassifier("../../model/model.json");

    if (classifier) {
        classifier.classify(image, (error, results) => {
            if (error) {
                console.error(error);
                return;
            }
            setResult(results);
            console.log(results)
        });
    }*/

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: image }} style={{ flex: 1 }} />
        </View>
    );
}