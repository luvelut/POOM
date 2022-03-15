import {StyleSheet, Text, View, useColorScheme, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '../common/Header';
import {COLORS} from '../../variables/colors'

export function HomeScreen({navigation}) {
    
    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View>
            <Header/>
            <View style={ [styles.container, themeContainerStyle]}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.card}
                        title="Scanner"
                        onPress={() => navigation.navigate('Scanner')}>
                        <LinearGradient
                            colors={[COLORS.gradient_scanner, 'transparent']}
                            style={styles.buttonGradient}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Scanner</Text>
                        </LinearGradient>
                        <Image style={styles.buttonImage} source={require('../../assets/home/Scanner.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        title="Jeux"
                        onPress={() => navigation.navigate('Game')}
                    >
                        <LinearGradient
                            colors={[COLORS.gradient_game, 'transparent']}
                            style={styles.buttonGradient}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Jeux</Text>
                        </LinearGradient>
                        <Image style={styles.buttonImage} source={require('../../assets/home/Jeux.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.card}
                        title="Mes déchets"
                        onPress={() => navigation.navigate('Dashboard')}
                    >
                        <LinearGradient
                            colors={[COLORS.gradient_waste, 'transparent']}
                            style={styles.buttonGradient}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Nos déchets</Text>
                        </LinearGradient>
                        <Image style={styles.buttonImage} source={require('../../assets/home/Dechets.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        title="Cours"
                        onPress={() => navigation.navigate('Lesson')}
                    >
                        <LinearGradient
                            colors={[COLORS.gradient_lesson, 'transparent']}
                            style={styles.buttonGradient}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Supports pédagogiques</Text>

                        </LinearGradient>
                        <Image style={styles.buttonImage} source={require('../../assets/home/pedagogique.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
    },
    lightContainer: {
        backgroundColor: COLORS.background,
    },
    darkContainer: {
        backgroundColor: COLORS.dark_light,
    },
    buttonText: {
        bottom : 20,
        left : 15,
        position: 'absolute',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        width: 170,
        height: 170,
        borderRadius: 35,
    },
    buttonImage: {
        width: 200,
        height: 200,
        opacity: 1,
        bottom : -13,
        left : -12,
        position: 'absolute',
    },
    buttonGradient:{
        width: 175,
        height: 175,
        borderRadius: 25,
        zIndex:1,
    }
})