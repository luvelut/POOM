import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { collection, getDocs } from "@firebase/firestore";
import { db } from '../../firebase'
import { auth } from '../../firebase'


export function DashboardScreen() {

    async function setCollection() {
        const cityRef = db.collection('waste').doc('bouteille');

        const res = await cityRef.set({
            name: 'bouteille',
            trash: 'bouteille',
            user: auth.currentUser?.email
        }, {merge: true});
    }

    setCollection();

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