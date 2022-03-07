import {StyleSheet, Text, View, FlatList, Alert, Image} from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {FontAwesome} from "@expo/vector-icons";
import {COLORS} from '../../variables/colors'

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
                    <View style={styles.iconCircle} backgroundColor={COLORS.yellow_trash} >
                        <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                    </View>}
            {item.trashVerre &&
            <View style={styles.iconCircle} backgroundColor={COLORS.green_trash} >
                <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
            </View>}
            {item.trashMenager &&
            <View style={styles.iconCircle} backgroundColor={COLORS.grey_trash} >
                <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
            </View>}
        </View>
    );

    return (
        <View>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Header/>
                        <Text style={styles.title}>Liste des déchets</Text>
                    </View>
                }
                numColumns={2}
                data={tabWaste}
                columnWrapperStyle={{paddingHorizontal: 35}}
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
    title: {
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold',
        paddingHorizontal: 35
    },
    item: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
    },
    itemTitle: {
        paddingTop: 15,
        fontWeight: 'bold',
        maxWidth:120,
        textAlign: 'center'
    },
    itemDate: {
        color: COLORS.secondary,
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