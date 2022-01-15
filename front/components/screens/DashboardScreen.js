import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { collection, getDocs } from "@firebase/firestore";
import { db } from '../../firebase'

export function DashboardScreen() {

    async function getCollection(){
        const cityRef = db.collection('waste').doc('bouteille');
        const doc = await cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log('Document data:', doc.data());
        }
    }
    getCollection();

    return (
        <View>
            <Text>DashboardPage</Text>
        </View>
    );
}