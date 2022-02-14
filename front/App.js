import { StyleSheet, Text, View, Button, useColorScheme, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!
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
import {ListScreen} from "./components/screens/ListScreen";
import {BadgeScreen} from "./components/screens/BadgeScreen";
import {ResultScreen} from "./components/screens/ResultScreen";
import {GeneralScreen} from "./components/screens/settings/GeneralScreen";
import {LicenseScreen} from "./components/screens/settings/LicenseScreen";
import {SoundScreen} from "./components/screens/settings/SoundScreen";
import {EconomyScreen} from "./components/screens/EconomyScreen";
import {ErrorScreen} from "./components/screens/ErrorScreen";
import {NewTrashScreen} from "./components/screens/NewTrashScreen";

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
              <Tab.Screen name="List" component={ListScreen} />
              <Tab.Screen name={"GeneralSettings"} component={GeneralScreen} />
              <Tab.Screen name={"LicenseSettings"} component={LicenseScreen} />
              <Tab.Screen name={"SoundSettings"} component={SoundScreen} />
              <Tab.Screen name={"Result"} component={ResultScreen} />
              <Tab.Screen name={"Badge"} component={BadgeScreen} />
              <Tab.Screen name={"Economy"} component={EconomyScreen} />
              <Tab.Screen name={"Error"} component={ErrorScreen} />
              <Tab.Screen name={"New"} component={NewTrashScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
});