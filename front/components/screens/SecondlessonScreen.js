import {Alert, TouchableOpacity, Modal,  ScrollView, Pressable, StyleSheet, Text,  View} from 'react-native';
import * as React from 'react';
import { useState, useRef } from 'react';
import { Video } from 'expo-av';
import {Ionicons} from "@expo/vector-icons";
import Gallery from 'react-native-image-gallery';

export function SecondlessonScreen() {
    
     const video = useRef(null);
     const [status, setStatus] = useState({});
     const [modalVisible, setModalVisible] = useState(false);

     return (
          <ScrollView>
          
               <View style={styles.backgroundView}/>

               <View style={styles.sectionCours}>

               <Video
                    ref={video}
                    style={styles.video}
                    source={require('../../assets/pedagogie/videoTri.mp4')} 
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
               />

                    <Text style={styles.titre}>SEANCE 2 : Tri sélectif : les bases</Text>
                    <Text style={styles.contenu}>Pour mener cette séance 2, l’enseignant doit au préalable receuillir des emballage de déchets (nutritionnel) du quotidien. (exemples : paquet de gateaux, pot de nutella, conserves ...)</Text>
                    
                    <View style={styles.sectionIcons}>

                         <View style={[styles.icons, styles.iconRight]}>
                              <TouchableOpacity
                                   onPress={() => {
                                   Alert.alert("Video en en-tête");
                                   }}
                                   style={[styles.buttonCours]}
                              >
                              <Text style={styles.buttonTextCours}> 1
                              <Ionicons style={styles.icon} name='play' size={25} color="#816BFD"/></Text>
                              </TouchableOpacity>
                         </View>

                         <View style={styles.icons}>
                              <TouchableOpacity
                                   onPress={() => { 
                                        setModalVisible(true)
                                   }}
                                   style={[styles.buttonCours]}
                              >
                              <Text style={styles.buttonTextCours}> 3
                              <Ionicons style={styles.icon} name='image-outline' size={25} color="#816BFD"/></Text>
                              </TouchableOpacity>
                         </View>

                         <View style={styles.icons}>
                              <TouchableOpacity style={[styles.imprimer]}
                                                  onPress={() => {
                                                       Alert.alert("Fonctionnalité pas encore disponible");
                                                  }}>
                              <Ionicons style={styles.icon} name="print" size={30} color="#ffffff" />
                              </TouchableOpacity>
                         </View>

                    </View>
               </View>

               <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                         setModalVisible(!modalVisible);
                    }}
               >
               <View style={styles.modalView}>
                    <Pressable
                    style={styles.button}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                         <Text style={styles.closeModal}>X </Text>
                    </Pressable>

                    <Gallery style={styles.gallery}
                    images={[
                         { source: require('../../assets/pedagogie/dechets.jpg') },
                         { source: require('../../assets/pedagogie/poubelles.png') },
                         { source: require('../../assets/pedagogie/youpie.jpg') },
                    ]}
                    /> 
               </View>
               </Modal>

               
               <View style={[styles.sectionCours, styles.coursContenu]}>
                    <Text style={styles.titreContenu}>INTRODUCTION</Text>
                    <Text style={styles.contenu}>Avant de présenter l’application POOM, l’enseignant engage une discussion :</Text>
                    <Text style={styles.contenuCours}>« À votre avis, que jette-t-on dans la poubelle ? »</Text>
                    <Text style={styles.contenuCours}>Les élèves peuvent répondre :</Text>
                    <Text style={styles.contenuCours}>« Ce qui est jeté dans la poubelle, c’est sale ; on ne jette pas tout dans la même poubelle ; dans les déchets, il y a du carton, des journaux mais aussi des bouteilles ; le verre, il ne faut pas le mélanger avec le reste ; on met les déchets dans des poubelles de différentes couleurs… »</Text>
                    <Text style={styles.contenuCours}>S’ensuivent des échanges sur la façon de trier les déchets par catégories :</Text>
                    <Text style={styles.contenuCours}>« Quelles sont les différentes catégories de déchets que vous connaissez ? ».</Text>
                    <Text style={styles.titreContenu}>VIDEO</Text>
                    <Text style={styles.contenu}>Une fois ce moment de discussion terminé, les réponses de chaque camarades aura éveillé leur reflexion, c'est le moment de dissocier les bonnes et les mauvaises réponses avec une vidéo explicative claire pour leur jeune âge. ( Video N°1 ci dessus dans les ressources )</Text>
                    <Text style={styles.titreContenu}>BILAN ET TRACE ÉCRITE</Text>
                    <Text style={styles.contenu}>Suite à ce visionnage, il vous faudra les interoger sur ce qu'ils ont retenus, n'hesitez pas à noter au tableau en même temps.</Text>
                    <Text style={styles.titreContenu}>CONCLUSION</Text>
                    <Text style={styles.contenu}>Pour conclure cette séance vous pouvez diffuser l'image en ressources qui récapitule les informations importantes de cette première séance.</Text>
                    <Text style={styles.contenu}>Bravo à vous pour cette premère séance, votre enseignement à un grand impact pour notre planète !</Text>
               </View>
          </ScrollView>
    );
};

const styles = StyleSheet.create({
    backgroundView: {
        width: 420,
        backgroundColor: "#6B6BFD",
        height : 250,
        marginTop : 0,
    },
    sectionCours: {
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
        marginTop: -150,
        margin: 20,
    },
    coursContenu: {
     marginTop: 60,
 },
    titre: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
        fontSize: 20,
    },
    titreContenu: {
     color: "#A6A6D5",
     fontWeight: "bold",
     textAlign: "center",
     marginTop: 30,
     fontSize: 25,
 },
    contenu: {
        color: "#A6A6D5",
        textAlign: "justify",
        marginTop: 30,
        margin : 30,
        fontSize: 20,
    },
    contenuCours: {
     color: "#A6A6D5",
     textAlign: "justify",
     marginTop: 1,
     margin : 30,
     fontSize: 20,
 },
    button: {
        padding : 10,
        borderRadius: 20,
        alignItems:'center',
        marginTop: 20,
        backgroundColor: "#816BFD",
     marginLeft: 200,
    },
    buttonCours: {
        backgroundColor: 'white',
        borderColor : "#B8B8DC",
        borderWidth : 1,
        padding : 10,
        width : 95,
        borderRadius: 20,
        alignItems:'center',
        marginTop: 20,
        marginBottom : 20,
     },
     buttonTextCours: {
        fontSize : 25,
        fontWeight: "bold",
        color : '#816BFD',
     },
     video: {
        marginTop : 20,
        alignSelf: 'center',
        width: 320,
        height: 200,
     },
     sectionIcons: {
        flexDirection: 'row',
        paddingBottom: 15,   
     },
     icons: {
        paddingVertical: 2,
        paddingHorizontal: 0,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 1,
     },
      imprimer: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#816BFD',
          borderRadius: 40,
          padding: 10,
          marginLeft: 70,
          height : 50,
          marginTop: 20,
      },
modalView: {
     marginTop : 100,
     marginBottom : 100,
     flex : 1,
    marginRight: 15,
    marginLeft: 15,
    width : 350,
    height : 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 5
  },
  closeModal: {
     textAlign: "center",
     paddingLeft: 5,
     paddingRight: 5,
     fontWeight: 'bold',
     fontSize: 20,
     color: 'white',
  },
   gallery:{
        width : 300,
        margin: 0,
   },
    iconRight: {
        marginRight: 10
    }
});