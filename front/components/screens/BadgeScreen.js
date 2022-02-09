import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {Ionicons} from "@expo/vector-icons";

export function BadgeScreen() {
    return (
        <View>
            <Header/>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Badges de la classe</Text>
                    <Ionicons name='print' size={35} color="#A6A6D5"/>
                </View>
                <ScrollView>
                    <View style={styles.item}>
                        <Image style={styles.image} source={require('../../assets/badges/main_verte.png')}/>
                        <View style={styles.content}>
                            <Text style={styles.subtitle}>Main Verte</Text>
                            <Text>Recycler 10 déchets au compost</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.image} source={require('../../assets/badges/recyclor.png')}/>
                        <View style={styles.content}>
                            <Text style={styles.subtitle}>Recyclor</Text>
                            <Text>Recycler 25 déchets</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.image} source={require('../../assets/badges/pro_du_tri.png')}/>
                        <View style={styles.content}>
                            <Text style={styles.subtitle}>Réussir 5 parties du jeu du tri</Text>
                            <Text>Pros du tri</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.image} source={require('../../assets/badges/apprenti_ecolo.png')}/>
                        <View style={styles.content}>
                            <Text style={styles.subtitle}>Apprenti écolo</Text>
                            <Text>Lire 5 ressources pédagogiques</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 20,
        marginVertical: 10
    },
    image: {
        height: 50,
        width: 50,
        marginHorizontal: 10
    },
    subtitle: {
        fontWeight: 'bold',
        paddingBottom: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});