import {StyleSheet, Text, TouchableOpacity, useColorScheme ,View, Alert, ScrollView} from 'react-native';
import * as React from 'react';
import {Settings} from "../../navigator/Settings";
import { FontAwesome } from '@expo/vector-icons';
import {auth} from "../../../firebase";
import {COLORS} from '../../../variables/colors'

export function GeneralScreen({navigation}) {

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <ScrollView>
            <View>
                <Settings/>
                <View style={[styles.container, themeContainerStyle]}>
                    <Text style={[styles.title, themeTextStyle]}>Réglages généraux</Text>
                    <View style={styles.profil}>
                        <FontAwesome name='user-circle' color={COLORS.secondary} size={60}/>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert("Cette fonctionnalité n'est pas encore disponible");
                            }}
                            style={styles.button}
                        >
                            <Text style={[styles.buttonText]} >Changer l'image</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[styles.subtitle, themeTextStyle]}>Nom de l'école</Text>
                        <View style={styles.form}>
                            <Text style={styles.formText}>************</Text>
                            <FontAwesome name='edit' color={COLORS.secondary} size={20}/>
                        </View>
                        <Text style={[styles.subtitle, themeTextStyle]}>Mot de passe</Text>
                        <View style={styles.form}>
                            <Text style={styles.formText}>************</Text>
                            <FontAwesome name='edit' color={COLORS.secondary} size={20}/>
                        </View>
                        <Text style={[styles.subtitle, themeTextStyle]}>Adresse email</Text>
                        <View style={styles.form}>
                            <Text style={styles.formText}>************</Text>
                            <FontAwesome name='edit' color={COLORS.secondary} size={20}/>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={[styles.button,styles.logout]}
                    >
                        <Text style={styles.buttonText}>Déconnexion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 70,
        paddingVertical: 20,
    },
    darkContainer: {
        backgroundColor: COLORS.dark_light,
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: COLORS.primary,
        padding : 10,
        borderRadius: 20,
        alignItems:'center',
        marginTop: 20
    },
    buttonText: {
        fontWeight: "bold",
        color: "white"
    },
    profil: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 40
    },
    form: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 20,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: COLORS.secondary
    },
    formText: {
        color: COLORS.secondary
    },
    logout : {
        marginBottom: 50
    }
});