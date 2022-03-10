import {StyleSheet, Text, useColorScheme, TouchableHighlight, View} from 'react-native';
import * as React from 'react';
import {auth} from '../../services/Firebase';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/core";
import {COLORS} from '../../variables/colors'
import {useEffect, useState} from "react";
import * as UserService from "../../services/userService";

export function Header() {

    const [info, setInfo] = useState([])
    const [loading, setIsLoading] = useState([])

    const navigation = useNavigation()

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    let isMounted = false;
    useEffect(() => {
        if (!isMounted) {
            (async () => {
                setInfo(await UserService.getClassInfo(auth.currentUser?.email));
                setIsLoading(false);
            })();
        }

        return () => {
            isMounted = true
        }
    }, []);

    return(
            <View style={[styles.container, themeContainerStyle]}>
                <FontAwesome name='user-circle' color={COLORS.secondary} size={70}/>
                <View>
                    {loading?
                        <Text style={[themeTextStyle, styles.title]}>Ma classe</Text> :
                        <Text style={[themeTextStyle, styles.title]}>La classe des {info[0].level}</Text>
                    }
                    {loading ?
                        <View/> :
                        <Text style={[styles.subtitle, themeTextStyle]}>{info[0].number} élèves</Text>
                    }
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