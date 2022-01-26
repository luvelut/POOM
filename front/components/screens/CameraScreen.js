import {StyleSheet, Text, View, FlatList, ActivityIndicator, Alert, TouchableHighlight} from 'react-native';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react'
import axios from 'axios';
import ml5 from "ml5";

export function CameraScreen() {

    async function getDbWaste() {
        try {
            const DATA = await axios.get('https://www.poom-api.lestuc.fr/public/');
            console.log(DATA.data);

        } catch(err) {
                console.log("error: ", err);
        }
    }

    getDbWaste();

    return (
            <View>
                <Text>Camera</Text>
            </View>
        );
}