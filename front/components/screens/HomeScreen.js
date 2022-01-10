import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {useNavigation} from "@react-navigation/core";
import { auth } from '../../firebase'

export function HomeScreen({navigation}) {

    //const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Déconnexion</Text>
            </TouchableOpacity>
            <View>
                <Button
                    title="Scanner"
                    onPress={() => navigation.navigate('Scanner')}/>
                <Button
                    title="Jeux"
                    onPress={() => navigation.navigate('Game')}/>
                <Button
                    title="Mes déchets"
                    onPress={() => navigation.navigate('Dashboard')}/>
                <Button
                    title="Cours"
                    onPress={() => navigation.navigate('Lesson')}/>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})