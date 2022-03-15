import {StyleSheet, Text, useColorScheme , TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";
import {useRoute} from "@react-navigation/native";
import {COLORS} from '../../variables/colors'

export function Settings() {

    const navigation = useNavigation()
    const route = useRoute();

    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={[styles.content, themeContainerStyle]}>
            <TouchableOpacity onPress={() => navigation.navigate('GeneralSettings')}>
                <View style={ route.name==='GeneralSettings' ? styles.currentButton : styles.button}>
                    <Ionicons style={styles.icon} name='settings-outline' color={route.name==='GeneralSettings' ? COLORS.primary : COLORS.secondary} size={20}/>
                    <Text style={ route.name==='GeneralSettings' ? styles.currentText : styles.text}>Général</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SoundSettings')}>
                <View style={ route.name==='SoundSettings' ? styles.currentButton : styles.button}>
                    <Ionicons style={styles.icon} name='volume-medium-outline' color={route.name==='SoundSettings' ? COLORS.primary : COLORS.secondary} size={20}/>
                    <Text style={route.name==='SoundSettings' ? styles.currentText : styles.text}>Son</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LicenseSettings')}>
                <View style={ route.name==='LicenseSettings' ? styles.currentButton : styles.button}>
                    <FontAwesome style={styles.icon} name='euro' color={route.name==='LicenseSettings' ? COLORS.primary : COLORS.secondary} size={20}/>
                    <Text style={ route.name==='LicenseSettings' ? styles.currentText : styles.text}>Licence</Text>
                </View>
            </TouchableOpacity>
</View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop : 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    lightContainer: {
        backgroundColor: COLORS.background,
    },
    darkContainer: {
        backgroundColor: COLORS.dark,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    currentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 20,
        backgroundColor: COLORS.tertiary,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    icon: {
        paddingRight: 5
    },
    currentText : {
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    text : {
        color: COLORS.secondary
    }
})