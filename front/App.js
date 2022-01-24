import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './components/screens/HomeScreen';
import {ScannerScreen} from "./components/screens/ScannerScreen";
import {DashboardScreen} from "./components/screens/DashboardScreen";
import {Footer} from "./components/navigator/Footer"
import {GameScreen} from "./components/screens/GameScreen";
import {LessonScreen} from "./components/screens/LessonScreen";
import LoginScreen from './components/screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator style={styles.main} backBehavior='history' initialRouteName='Login'  tabBar={(props) => <Footer {...props}  />} screenOptions={{ headerShown: false }} >
              <Tab.Screen name="Scanner" component={ScannerScreen} />
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Dashboard" component={DashboardScreen} />
              <Tab.Screen name="Game" component={GameScreen} />
              <Tab.Screen name="Lesson" component={LessonScreen} />
              <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
});