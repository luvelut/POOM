import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './components/screens/HomeScreen';
import {ScannerScreen} from "./components/screens/ScannerScreen";
import { Ionicons } from '@expo/vector-icons';
import {GoBack} from "./components/menu/GoBack";


function SettingsScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if(route.name === 'GoBack' && navigation.canGoBack()) {
                    return (
                    <TouchableHighlight onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={size} color={color} />
                    </TouchableHighlight>)
                }

                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Scanner') {
                  iconName = 'scan-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'purple',
              tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="GoBack"  component={GoBack}/>
          <Tab.Screen name="Scanner" component={ScannerScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}