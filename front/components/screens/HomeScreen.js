import {StyleSheet, Text, View, Button, useColorScheme, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {useNavigation} from "@react-navigation/core";
import { auth } from '../../firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../common/Header';

export function HomeScreen({navigation}) {
    
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

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
        <View>
            <Header/>
        <View style={ styles.container, themeContainerStyle}>
            <TouchableOpacity
            title="Scanner"
            onPress={() => navigation.navigate('Scanner')}>
            
            
            <LinearGradient
                colors={['rgb(107,107,253)', 'transparent']}
                style={styles.buttonGradientScanner}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
            <Text style={styles.buttonText, themeTextStyle}>Scanner</Text>
            </LinearGradient> 
            
            <Image style={styles.buttonScanner} source={require('../../assets/Scanner.png')}></Image>
             
            </TouchableOpacity>

            <TouchableOpacity
            title="Jeux"
            onPress={() => navigation.navigate('Game')}
            >
            <LinearGradient
                colors={['rgb(253,107,107)', 'transparent']}
                style={styles.buttonGradientJeux}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText, themeTextStyle}>Jeux</Text>
            </LinearGradient> 
            <Image style={styles.buttonJeux} source={require('../../assets/Jeux.png')}></Image>
            </TouchableOpacity>
                
            <TouchableOpacity
            title="Mes déchets"
            onPress={() => navigation.navigate('Dashboard')}
            >
            <LinearGradient
                colors={['rgb(61,207,182)', 'transparent']}
                style={styles.buttonGradientDechets}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText, themeTextStyle}>Nos déchets</Text>
            </LinearGradient>
            <Image style={styles.buttonDechets} source={require('../../assets/Dechets.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity
            title="Cours"
            onPress={() => navigation.navigate('Lesson')}
            >
            <LinearGradient
                colors={['rgb(165,107,253)', 'transparent']}
                style={styles.buttonGradientPedagogie}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.buttonText, themeTextStyle}>Supports pédagogiques</Text>

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
        alignItems: 'center',
    },
    lightContainer: {
        backgroundColor: '#d0d0c0',
    },
    darkContainer: {
        backgroundColor: '#394153',
    },
    lightThemeText: {
        bottom : 20,
        left : 15,
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    darkThemeText: {
        bottom : 20,
        left : 15,
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d0d0c0',
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
        top: 90,
        left: 7,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
        
    },
    buttonGradientScanner:{
        position: 'absolute',
        top: 100,
        left: 20,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    },
    buttonJeux: {
        position: 'absolute',
        top: 90,
        right: 10,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
    },
    buttonGradientJeux: {
        position: 'absolute',
        top: 100,
        right: 22,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    },
    buttonDechets: {
        position: 'absolute',
        top: 285,
        left: 7,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
    },
    buttonGradientDechets: {
        position: 'absolute',
        top: 300,
        left: 20,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    },
    buttonPedagogie: {
        position: 'absolute',
        top: 285,
        right: 10,
        width: 200,
        height: 200,
        borderRadius: 35,
        opacity: 1,
    },
    buttonGradientPedagogie: {
        position: 'absolute',
        top: 300,
        right: 22,
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex: 1,
    }
})