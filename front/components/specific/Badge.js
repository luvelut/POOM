import {Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

export function Badge(props) {
    return (
        <View style={styles.item}>
            <Image style={styles.image} source={props.image}/>
            <View style={styles.content}>
                <Text style={styles.subtitle}>{props.subtitle}</Text>
                <Text>{props.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
});