import {StyleSheet, Text, View, FlatList, Alert, Image, Button} from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {FontAwesome, FontAwesome5} from "@expo/vector-icons";

export function ListScreen({route, navigation}) {
    const { tabWaste } = route.params;
    if(!tabWaste) {
        Alert.alert("Désolé, nous n'arrivons pas à récupérer vos données...");
    }
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDate}>{item.date.toString()}</Text>
            {item.trashRecyclabe &&
                    <View style={styles.iconCircle} backgroundColor="#FECE00" >
                        <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                    </View>}
            {item.trashVerre &&
            <View style={styles.iconCircle} backgroundColor="green" >
                <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
            </View>}
            {item.trashMenager &&
            <View style={styles.iconCircle} backgroundColor="grey" >
                <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
            </View>}
        </View>
    );

    return (
        <View>
            <Header/>
            <View style={styles.content}>
                <Text style={styles.title}>Liste des déchets</Text>
                <View style={styles.list}>
                    <FlatList
                        numColumns={2}
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
        padding: 15,
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
        paddingTop: 15,
        fontWeight: 'bold',
    },
    itemDate: {
        color: '#A6A6D5',
        paddingTop: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    iconCircle: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10,
        position: 'absolute',
        top: 85,
        right: 0
    },
})