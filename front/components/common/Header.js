import {Alert, FlatList, StyleSheet, Text, useColorScheme, TouchableHighlight, View} from 'react-native';
import * as React from 'react';
import {auth} from '../../firebase';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/core";
import {COLORS} from '../../variables/colors'

export function Header() {

    const navigation = useNavigation()

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return(
        <View style={[styles.container, themeContainerStyle]}>
            <FontAwesome name='user-circle' color={COLORS.secondary} size={70}/>
            <View>
                <Text style={[themeTextStyle, styles.title]}>Ecole du Puy en Velay</Text>
                <Text style={[styles.subtitle, themeTextStyle]} >27 élèves</Text>
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
                    <Ionicons name='settings-outline' color={COLORS.secondary} size={30}/>
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
        color: COLORS.secondary,
        paddingVertical: 10
    },
    gauge : {
        height: 10,
        backgroundColor: COLORS.background,
        borderRadius: 50
    },
    percent : {
        height: 10,
        width: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 50
    },
    lightContainer: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: COLORS.dark,
    },
    lightThemeText: {
        color: COLORS.dark,
    },
    darkThemeText: {
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
    }
});