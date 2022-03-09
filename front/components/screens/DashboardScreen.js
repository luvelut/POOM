import {StyleSheet, Text, useColorScheme,View, FlatList, Image, ActivityIndicator, TouchableOpacity, Alert, TouchableHighlight, ScrollView} from 'react-native';
import * as React from 'react';
import {auth} from '../../services/Firebase';
import {useState} from 'react';
import {Header} from '../common/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from "../../variables/colors";
import * as WasteService from "../../services/wasteService";
import { useFocusEffect } from '@react-navigation/native';

export function DashboardScreen({navigation}) {
   
    const [tabData, setTabData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
    );

    useFocusEffect(
        React.useCallback(() => {
            const fetchWaste = async () => {
                setTabData(await WasteService.getWasteByUser(auth.currentUser?.email));
                setIsLoading(false);
            }
            fetchWaste();
            return () => {
                // quand on quitte le focus
            };
        }, [])
    );

    if (isLoading) return <View style={[styles.container, themeContainerStyle]}><ActivityIndicator size="large" color="#0000ff" /></View>
    return (
        <View style={themeContainerStyle}>
            <ScrollView>
            <Header/>
            <View style={[styles.content, themeContainerStyle]}>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Economy')}>
                        <LinearGradient
                            colors={['rgb(165,107,253)', 'transparent']}
                            style={styles.buttonGradient}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.buttonText}>Quantitées économisées</Text>
                        </LinearGradient>
                        <Image style={styles.buttonImage} source={require('../../assets/bouton/quantitees_economisees.png')}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => Alert.alert("En cours de développement")}>
                    <LinearGradient
                        colors={['rgb(165,107,253)', 'transparent']}
                        style={styles.buttonGradient}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.buttonText}>Suivi composte</Text>
                    </LinearGradient> 
                        <Image style={styles.buttonImage} source={require('../../assets/bouton/composte.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.title, themeTextStyle]}>Badges</Text>
                <View style={styles.badgeSection}>
                    <View style={styles.badgeList}>
                        <Image style={styles.badgeItem} source={require('../../assets/badges/main_verte.png')}/>
                        <Image style={styles.badgeItem} source={require('../../assets/badges/apprenti_ecolo.png')}/>
                        <Image style={styles.badgeItem} source={require('../../assets/badges/pro_du_tri.png')}/>
                    </View>
                    <TouchableHighlight style={styles.icon}
                                        underlayColor="#ffffff"
                                        accessibilityRole="button"
                                        onPress={() => {
                                            navigation.navigate('Badge')
                                        }
                                        }>
                        <Ionicons name="ios-add-outline" size={45} color="#9C9CD0" />
                    </TouchableHighlight>
                </View>
                <Text style={[styles.title, themeTextStyle]}>Liste des déchets</Text>
                {tabData.length?
                    <View style={styles.list}>
                        <FlatList
                            numColumns={2}
                            data={[tabData[0],tabData[1]]}
                            renderItem={renderItem}
                            keyExtractor={item => item.name}
                            scrollEnabled={false}
                            columnWrapperStyle={{justifyContent: 'flex-end'}}
                        />
                        <TouchableHighlight style={styles.icon}
                                            underlayColor="#ffffff"
                                            accessibilityRole="button"
                                            onPress={() => {
                                                navigation.navigate('List', {tabWaste: tabData});
                                            }
                                            }>
                            <Ionicons name="ios-add-outline" size={45} color="#9C9CD0" />
                        </TouchableHighlight>
                    </View> :
                    <View style={styles.emptyList}>
                        <Text>Tu n'as scanné aucun déchet pour le moment !</Text>
                    </View>
                }
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    darkContainer: {
        backgroundColor: COLORS.dark_light,
    },
    lightThemeText: {
        color: COLORS.dark,
    },
    darkThemeText: {
        color: 'white',
    },
    title: {
        fontSize: 18,
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    item: {
        alignItems: 'center',
        padding:5,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 25
    },
    icon: {
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 10,
    },
    itemTitle: {
        paddingTop: 5,
        fontWeight: 'bold',
        maxWidth:120,
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    badgeSection: {
        flexDirection: 'row',
        paddingBottom: 15,
        alignItems: 'center',
        alignSelf: "center"
    },
    badgeList: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginRight: 15,
    },
    badgeItem: {
        height: 60,
        width: 60,
        marginRight: 15
    },
    buttons: {
        flexDirection:'row',
        paddingBottom: 10,
        justifyContent:'space-around'
    },
    buttonText: {
        bottom : 20,
        left : 15,
        position: 'absolute',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    buttonImage:{
        width: 160,
        height: 100,
        borderRadius: 25,
    },
    buttonGradient:{
        position: 'absolute',
        left:1,
        right:20,
        width: 160,
        height: 100,
        borderRadius: 25,
        zIndex:1,
    },
    emptyList: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        marginVertical: 15,
        marginHorizontal: 15,
        justifyContent: 'center'
    }
});