import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {COLORS} from "../../variables/colors";
import {FontAwesome} from "@expo/vector-icons";

export function NewTrashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Nouveau déchet !</Text>
                <Text>nombre de déchet et jauge</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Scanner')}
                >
                    <View style={styles.button}><Text style={styles.textButton}>Recommencer</Text></View>
                </TouchableOpacity>
            </View>
            <View style={styles.trashContent}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}/>
                </View>
                <View>
                    <Text>Tube de colle</Text>
                    <View style={styles.label}>
                        <View style={styles.iconCircle} backgroundColor={COLORS.grey_trash}>
                            <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                        </View>
                        <Text>Déchet ménager</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background
    },
    content: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical: 50,
        alignItems: 'center',
    },
    trashContent: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 80,
        paddingVertical: 20,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    iconCircle: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});