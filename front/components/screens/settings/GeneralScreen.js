import {StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView} from 'react-native';
import * as React from 'react';
import {Settings} from "../../navigator/Settings";
import { FontAwesome } from '@expo/vector-icons';
import {auth} from "../../../firebase";

export function GeneralScreen({navigation}) {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View>
            <Settings/>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Réglages généraux</Text>
                <View style={styles.profil}>
                    <FontAwesome name='user-circle' color="#A6A6D5" size={60}/>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("Cette fonctionnalité n'est pas encore disponible");
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Changer l'image</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.subtitle}>Nom de l'école</Text>
                    <View style={styles.form}>
                        <Text style={styles.formText}>************</Text>
                        <FontAwesome name='edit' color="#A6A6D5" size={20}/>
                    </View>
                    <Text style={styles.subtitle}>Mot de passe</Text>
                    <View style={styles.form}>
                        <Text style={styles.formText}>************</Text>
                        <FontAwesome name='edit' color="#A6A6D5" size={20}/>
                    </View>
                    <Text style={styles.subtitle}>Adresse email</Text>
                    <View style={styles.form}>
                        <Text style={styles.formText}>************</Text>
                        <FontAwesome name='edit' color="#A6A6D5" size={20}/>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleSignOut}
                    style={[styles.button,styles.logout]}
                >
                    <Text style={styles.buttonText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal : 70,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#6B6BFD',
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
        borderColor:"#A6A6D5"
    },
    formText: {
        color:"#A6A6D5"
    },
    logout : {
        marginBottom: 50
    }
});