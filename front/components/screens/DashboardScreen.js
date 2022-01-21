import {StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import * as React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import {useEffect, useState} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";

export function DashboardScreen() {
    const [tabData, setTabData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function getUserWaste() {
        return new Promise((resolve) => {
            const data=[];
            db.collection("waste").where("user", "==", auth.currentUser?.email)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data());
                    });
                    resolve(data);
                }).catch((error) => {
                console.log("Error getting documents: ", error);
            });
        });
    }

    const renderItem = ({item}) => <Text>{item.name}</Text>;

    let isMounted = false;
    useEffect(() => {
        if (!isMounted) {
            (async () => {
                setTabData(await getUserWaste());
                setIsLoading(false);
            })();
        }

        return () => {
            isMounted = true
        }
    }, []);

    if (isLoading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>
    return (
        <View>
            <Text>DashboardPage</Text>
            <FlatList
                data={tabData}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});