import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import {Header} from "../common/Header";
import {PieChart} from 'react-native-chart-kit'
import {useState, useEffect} from "react";
import * as WasteService from '../../services/wasteService'
import {FontAwesome} from "@expo/vector-icons";
import {COLORS} from '../../variables/colors'

export function EconomyScreen() {

    const [yellowWaste, setYellowWaste] = useState([]);
    const [greenWaste, setGreenWaste] = useState([]);
    const [greyWaste, setGreyWaste] = useState([]);

    useEffect(() => {
        (async () => {
            setYellowWaste(await WasteService.getWaste('yellow'));
            setGreenWaste(await WasteService.getWaste('green'));
            setGreyWaste(await WasteService.getWaste('grey'));
        })();
    }, []);


    const MyPieChart = () => {
        return (
            <>
                <PieChart
                    hasLegend={false}
                    data={[
                        {
                            name: 'déchet(s) recyclé(s)',
                            number: yellowWaste.length,
                            color: COLORS.yellow_trash,
                        },
                        {
                            name: 'déchet(s) en verre',
                            number: greenWaste.length,
                            color: COLORS.green_trash,
                        },
                        {
                            name: 'déchet(s) jeté(s)',
                            number: greyWaste.length,
                            color: COLORS.grey_trash,
                        },
                    ]}
                    width={400}
                    height={320}
                    chartConfig={{

                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    accessor="number"
                    backgroundColor="transparent"
                    paddingLeft="35"
                    absolute
                />
            </>
        );
    };

    return (
        <View>
            <Header/>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Avec le tri, tu peux économiser des objets ! </Text>
                    <View>
                        <Text>Visuels qte economisees</Text>
                    </View>
                    <Text style={styles.title}>Les déchets que tu as triés </Text>
                    <MyPieChart />
                    <View style={styles.legend}>
                        <View style={styles.label}>
                            <View style={styles.iconCircle} backgroundColor={COLORS.yellow_trash} >
                                <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                            </View>
                            <Text>{yellowWaste.length} déchet(s) recyclé(s)</Text>
                        </View>
                        <View style={styles.label}>
                            <View style={styles.iconCircle} backgroundColor={COLORS.green_trash} >
                                <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                            </View>
                            <Text>{greenWaste.length} déchet(s) en verre</Text>
                        </View>
                        <View style={styles.label}>
                            <View style={styles.iconCircle} backgroundColor={COLORS.grey_trash} >
                                <FontAwesome style={styles.icon} name='trash' color="white" size={30}/>
                            </View>
                            <Text>{greyWaste.length} déchet(s) jeté(s)</Text>
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
        paddingHorizontal:40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    legend: {

    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    iconCircle: {
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10
    },
})