import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function HomeScreen({navigation}) {
    return (
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
    );
}