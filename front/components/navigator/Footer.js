import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import {COLORS} from '../../variables/colors'

export function Footer({ state, descriptors, navigation }) {
    return (
        <View style={styles.main}>
            <TouchableHighlight underlayColor="#804cfc"
                accessibilityRole="button"
                onPress={() => {
                if(navigation.canGoBack())
                {
                    navigation.goBack();
                }
                else {
                    Alert.alert('tu peux pas revenir + en arrière');
                }
            }}>
                <Ionicons name='chevron-back' color='white' size={40}/>
            </TouchableHighlight>
            {state.routes.map((route, index) => {
                if(route.name==='Home' || route.name==='Scanner') {
                    const { options } = descriptors[route.key];
                    const color = 'white'
                    const size=40
                    let iconName=null
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Scanner') {
                        iconName = 'camera';
                    }

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <Ionicons name={iconName} size={size} color={color}/>
                        </TouchableOpacity>
                    );
                }
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'space-around',
        //borderTopLeftRadius: 30,
        //borderTopRightRadius: 30,
        paddingBottom: 40,
        paddingTop: 10,
    },
});
