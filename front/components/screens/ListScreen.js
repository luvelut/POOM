import {StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {FontAwesome5} from "@expo/vector-icons";

export function ListScreen({route, navigation}) {
    const { tabWaste } = route.params;
    if(!tabWaste) {
        Alert.alert("Désolé, nous n'arrivons pas à récupérer vos données...")
    }
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <FontAwesome5 name="circle" size={70} color="#0000ff" />
            <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
    );

    return (
        <View>
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Liste des déchets</Text>
                <View style={styles.list}>
                    <FlatList
                        numColumns={3}
                        data={tabWaste}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />
                </View>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    content: {
        paddingHorizontal: 35,
    },
    item: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    itemTitle: {
        paddingTop: 5
    },
})