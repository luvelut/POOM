import {Alert, FlatList, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import * as React from 'react';
import {auth} from '../../firebase';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/core";

export function Header() {

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <FontAwesome name='user-circle' color="#A6A6D5" size={70}/>
            <View>
                <Text>Ecole du Puy en Velay</Text>
                <Text style={styles.subtitle} >27 élèves</Text>
                <View style={styles.gauge}>
                    <View style={styles.percent}/>
                </View>
            </View>
            <View>
                <TouchableHighlight underlayColor="#ffffff"
                                    accessibilityRole="button"
                                    onPress={() => {
                                        navigation.navigate('GeneralSettings')
                                        }
                                    }>
                    <Ionicons name='settings-outline' color="#A6A6D5" size={30}/>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20
    },
    subtitle : {
        color: "#A6A6D5",
        paddingVertical: 10
    },
    gauge : {
        height: 10,
        backgroundColor: "#E8E8FE",
        borderRadius: 50
    },
    percent : {
        height: 10,
        width: 30,
        backgroundColor: "#816BFD",
        borderRadius: 50
    }
});