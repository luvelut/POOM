import {StyleSheet, Text, View, ScrollView} from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {Ionicons} from "@expo/vector-icons";
import {Badge} from "../specific/Badge";

export function BadgeScreen() {
    return (
        <View>
            <ScrollView>
            <Header/>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Badges de la classe</Text>
                    <Ionicons name='print' size={35} color="#A6A6D5"/>
                </View>

                <Badge image={require('../../assets/badges/main_verte.png')} text={'Recycler 10 déchets au compost'} subtitle={'Main Verte'}/>

                <Badge image={require('../../assets/badges/recyclor.png')} text={'Recycler 25 déchets'} subtitle={'Recyclor'}/>

                <Badge image={require('../../assets/badges/pro_du_tri.png')} text={'Réussir 5 parties du jeu du tri'} subtitle={'Pros du tri'}/>

                <Badge image={require('../../assets/badges/apprenti_ecolo.png')} text={'Lire 5 ressources pédagogiques'} subtitle={'Apprenti écolo'}/>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal:40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});