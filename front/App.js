import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './components/screens/HomeScreen';
import {ScannerScreen} from "./components/screens/ScannerScreen";
import {Footer} from "./components/navigator/Footer"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator tabBar={(props) => <Footer {...props} />}>
          <Tab.Screen name="Scanner" component={ScannerScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}