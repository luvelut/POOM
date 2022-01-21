import {Text, View, FlatList} from 'react-native';
import * as React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import {useEffect, useState} from 'react';

export function DashboardScreen() {
    const [tabData, setTabData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getUserWaste() {
        return new Promise((resolve) => {
            db.collection("waste").where("user", "==", auth.currentUser?.email)
                .get()
                .then((querySnapshot) => {
                    const data = querySnapshot.map((doc) => doc.data());
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

    if (isLoading) return <></>
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