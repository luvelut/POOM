import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {useNavigation} from "@react-navigation/core";
import { auth } from '../../firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

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
        <View >
        <View>
            <TouchableOpacity
            title="Scanner"
            onPress={() => navigation.navigate('Scanner')}>
            
            
            <LinearGradient
                colors={['rgb(107,107,253)', 'transparent']}
                style={styles.buttonGardientScanner}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
            <Text style={styles.buttonText}>Scanner</Text>
            </LinearGradient> 
            
            <Image style={styles.buttonScanner} source={require('../../assets/Scanner.png')}></Image>
             
            </TouchableOpacity>

            <TouchableOpacity
            title="Jeux"
            onPress={() => navigation.navigate('Game')}
            >
            <LinearGradient
                colors={['rgb(253,107,107)', 'transparent']}
                style={styles.buttonGardientJeux}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText}>Jeux</Text>
            </LinearGradient> 
            <Image style={styles.buttonJeux} source={require('../../assets/Jeux.png')}></Image>
            </TouchableOpacity>
                
            <TouchableOpacity
            title="Mes déchets"
            onPress={() => navigation.navigate('Dashboard')}
            >
            <LinearGradient
                colors={['rgb(61,207,182)', 'transparent']}
                style={styles.buttonGardientDechets}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText}>Nos déchets</Text>
            </LinearGradient>
            <Image style={styles.buttonDechets} source={require('../../assets/Dechets.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity
            title="Cours"
            onPress={() => navigation.navigate('Lesson')}
            >
            <LinearGradient
                colors={['rgb(165,107,253)', 'transparent']}
                style={styles.buttonGardientPedagogie}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText}>Supports pédagogiques</Text>

            </LinearGradient>
            <Image style={styles.buttonPedagogie} source={require('../../assets/pedagogique.png')}></Image>
            </TouchableOpacity>
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
    buttonText: {
        bottom : 20,
        left : 15,
        position: 'absolute',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonScanner: {
        position: 'absolute',
        top: 248,
        left: 7,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
        
    },
    buttonGardientScanner:{
        position: 'absolute',
        top: 258,
        left: 20,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    },
    buttonJeux: {
        position: 'absolute',
        top: 248,
        right: 10,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
    },
    buttonGardientJeux: {
        position: 'absolute',
        top: 258,
        right: 22,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    },
    buttonDechets: {
        position: 'absolute',
        top: 440,
        left: 7,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
    },
    buttonGardientDechets: {
        position: 'absolute',
        top: 450,
        left: 20,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    },
    buttonPedagogie: {
        position: 'absolute',
        top: 440,
        right: 10,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
    },
    buttonGardientPedagogie: {
        position: 'absolute',
        top: 450,
        right: 22,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex: 1,
    }
})