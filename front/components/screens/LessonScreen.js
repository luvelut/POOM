import { Alert, ScrollView, TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import SearchBar from "react-native-dynamic-search-bar";

export function LessonScreen({navigation}) {
    
        return (
            <ScrollView>
            <View style={styles.page}>
                <View style={styles.modalView}>
                    <Text style={styles.textT}>Ressources Pédagogiques</Text>
                    
                    <SearchBar style={styles.search}
                        placeholder="Rechercher ..."
                        onPress={() => alert("En cours de developpement")}
                    />
                </View>
            <View style={styles.sectionCours}>
                <Image style={styles.image} source={require('../../assets/pedagogie/youpie.jpg')}/>
                <Text style={styles.titre}>Guide contexte utilisation POOM</Text>
                <Text style={styles.contenu}>Cette première séance est un moment de discussion et d’introduction aux gestes du tri selectif. Dans ce support nous allons vous guider pour mener à bien cette séance.</Text>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('FirstLesson')
                        }
                    }
                    style={[styles.button]}
                >
                    <Text style={styles.buttonText}>Voir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Cette fonctionnalité n'est pas encore disponible");
                    }}
                    style={[styles.buttonCours]}
                >
                    <Text style={styles.buttonTextCours}>Catégorie 1</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sectionCours}>
                <Image style={styles.image} source={require('../../assets/pedagogie/dechets.jpg')}/>
                <Text style={styles.titre}>Tri sélectif : les bases</Text>
                <Text style={styles.contenu}>Pour mener cette séance 2, l’enseignant doit au préalable receuillir des emballage de déchets (nutritionnel) du quotidien. (exemples : paquet de gateaux, pot de nutella, conserves ...)</Text>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SecondLesson')
                        }
                    }
                    style={[styles.button]}
                >
                    <Text style={styles.buttonText}>Voir</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Cette fonctionnalité n'est pas encore disponible");
                    }}
                    style={[styles.buttonCours]}
                >
                    <Text style={styles.buttonTextCours}>Catégorie 1</Text>
                </TouchableOpacity>
            </View>
            
        </View>  
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    modalView: {
        alignItems: "center",
        backgroundColor: "#6B6BFD",
        height : 250,
        marginTop : 0,
    },
    textT: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 100,
        fontSize: 20,
    },
    search: {
        marginTop: 40,
        backgroundColor: "#FCFCFF",
        borderRadius: 35,
    },
    sectionCours: {
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    image:{
        marginTop: 20,
        width: 300,
        height: 130,
        borderRadius: 35
    },
    titre: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
        fontSize: 20,
    },
    contenu: {
        color: "#A6A6D5",
        textAlign: "center",
        marginTop: 30,
        fontSize: 18,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: '#6B6BFD',
        padding : 10,
        width : 190,
        height : 40,
        borderRadius: 20,
        alignItems:'center',
        marginTop: 20
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    buttonCours: {
        backgroundColor: '#F0FFF4',
        borderColor : "#26BA7F",
        borderWidth : 2,
        padding : 10,
        width : 150,
        borderRadius: 20,
        alignItems:'center',
        marginTop: 20,
        marginBottom : 20,
    },
    buttonTextCours: {
        fontWeight: "bold",
        color : '#26BA7F',
    },
    itemStyle: {
        padding: 10,
      },
    page: {
        paddingBottom: 40
    }
});