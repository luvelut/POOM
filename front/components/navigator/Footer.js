import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Footer({ state, descriptors, navigation }) {
    return (
        <View style={styles.main}>
            <TouchableHighlight onPress={() => {
                if(navigation.canGoBack())
                {
                    navigation.goBack();
                }
                else {
                    Alert.alert('tu peux pas revenir + en arrière');
                }
            }}>
                <Ionicons name='chevron-back' color='white' size='30'/>
            </TouchableHighlight>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const color = 'white'
                const size=30
                let iconName=null
                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Scanner') {
                    iconName = 'scan-circle-outline';
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
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: '#804cfc',
        justifyContent: 'space-around',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 10,
        paddingTop: 10
    },
});
