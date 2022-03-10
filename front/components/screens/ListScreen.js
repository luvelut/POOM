import {StyleSheet, Text, View, FlatList, Alert, Image, Pressable, Modal} from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {COLORS} from '../../variables/colors'
import { useState} from 'react';
import * as WasteService from "../../services/wasteService";

export function ListScreen({route, navigation}) {
    let { tabWaste } = route.params;
    if(!tabWaste) {
        Alert.alert("Désolé, nous n'arrivons pas à récupérer vos données...");
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [item, setItem] = useState(null);

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDate}>{item.date.toString()}</Text>
            {item.trashRecyclabe &&
                    <View style={styles.iconCircle} backgroundColor={COLORS.yellow_trash} >
                        <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
                    </View>}
            {item.trashVerre &&
            <View style={styles.iconCircle} backgroundColor={COLORS.green_trash} >
                <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
            </View>}
            {item.trashMenager &&
            <View style={styles.iconCircle} backgroundColor={COLORS.grey_trash} >
                <FontAwesome style={styles.icon} name='trash' color="white" size={20}/>
            </View>}
            <Pressable
                style={styles.btnDelete}
                onPress={() => {
                    setItem(item);
                    setModalVisible(!modalVisible);
                }}
            >
                <Text style={styles.textDelete}>supprimer</Text>
            </Pressable>
        </View>
    );

    return (
        <View>
            {item &&
                <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Image style={[styles.img, styles.image]} source={{uri: item.image}}/>
                                <Pressable
                                    style={styles.close}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <FontAwesome name='close' color={COLORS.secondary} size={20}/>
                                </Pressable>
                                <Text style={styles.text}>Supprimer <Text style={styles.boldText}>{item.name}</Text> ?</Text>
                                <Pressable
                                    style={styles.modalButton}
                                    onPress={() => {
                                        tabWaste=tabWaste.filter(waste => waste.id !==item.id);
                                        WasteService.deleteWaste().then((r)=> console.log(r));
                                        setModalVisible(!modalVisible);
                                    } }
                                >
                                    <Text style={styles.modalButtonTxt}>Supprimer</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>}
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Header/>
                        <Text style={styles.title}>Liste des déchets</Text>
                    </View>
                }
                numColumns={2}
                data={tabWaste}
                columnWrapperStyle={{paddingHorizontal: 35}}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        paddingVertical: 5,
        fontWeight: 'bold',
        paddingHorizontal: 35
    },
    item: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    itemTitle: {
        paddingTop: 15,
        fontWeight: 'bold',
        maxWidth:120,
        textAlign: 'center'
    },
    itemDate: {
        color: COLORS.secondary,
        paddingTop: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    iconCircle: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10,
        position: 'absolute',
        top: 85,
        right: 0
    },
    btnDelete: {
        borderRadius: 50,
        borderColor: COLORS.error,
        borderWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 8
    },
    textDelete: {
        color: COLORS.error
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 200,
        elevation: 5,
        width: 300,
        height: 200,
        justifyContent: "space-between",
    },
    img: {
        position: 'absolute',
        top: -50
    },
    modalButtonTxt: {
        color: 'white',
        fontWeight: 'bold'
    },
    modalButton: {
        borderRadius: 20,
        backgroundColor: COLORS.error,
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginTop: 30
    },
    text: {
        marginTop: 30
    },
    boldText: {
        fontWeight:'bold'
    },
    close: {
        position: 'absolute',
        right: 0,
        padding: 10
    }
})