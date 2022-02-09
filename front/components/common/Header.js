import {Alert, FlatList, StyleSheet, Text, useColorScheme, TouchableHighlight, View} from 'react-native';
import * as React from 'react';
import {auth} from '../../firebase';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/core";

export function Header() {

    const navigation = useNavigation()

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return(
        <View style={[styles.container, styles.themeContainerStyle]}>
            <FontAwesome name='user-circle' color="#A6A6D5" size={70}/>
            <View>
                <Text style={[styles.themeTextStyle, styles.title]}>Ecole du Puy en Velay</Text>
                <Text style={[styles.subtitle, themeTextStyle]} >27 élèves</Text>
                <View style={styles.gauge}>
                    <View style={styles.percent}/>
                </View>
            </View>
            <View>
                <TouchableHighlight underlayColor="#ffffff"
                                    accessibilityRole="button"
                                    onPress={() => {
                                        navigation.navigate('Dashboard')
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
        paddingTop: 60,
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
    },
    lightContainer: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: '#242c40',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
    title: {
        fontWeight: 'bold',
    }
});