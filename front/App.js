import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './components/screens/HomeScreen';
import {ScannerScreen} from "./components/screens/ScannerScreen";
import {DashboardScreen} from "./components/screens/DashboardScreen";
import {Footer} from "./components/navigator/Footer"
import {GameScreen} from "./components/screens/GameScreen";
import {LessonScreen} from "./components/screens/LessonScreen";
import {LoginScreen} from './components/screens/login/LoginScreen';
import {ListScreen} from "./components/screens/ListScreen";
import {BadgeScreen} from "./components/screens/BadgeScreen";
import {ResultScreen} from "./components/screens/ResultScreen";
import {GeneralScreen} from "./components/screens/settings/GeneralScreen";
import {LicenseScreen} from "./components/screens/settings/LicenseScreen";
import {SoundScreen} from "./components/screens/settings/SoundScreen";
import {EconomyScreen} from "./components/screens/EconomyScreen";
import {FirstlessonScreen} from "./components/screens/FirstlessonScreen";
import {SecondlessonScreen} from "./components/screens/SecondlessonScreen";
import {ErrorScreen} from "./components/screens/ErrorScreen";
import {NewTrashScreen} from "./components/screens/NewTrashScreen";
import {SignUpScreen} from "./components/screens/login/SignUpScreen";
import { firebase } from "./services/Firebase";
import {ResetScreen} from "./components/screens/login/ResetScreen";

const App = () => {

    const [connected, isConnected] = useState(false);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            isConnected(true);
        } else {
            console.log("logout no user");
            isConnected(false);
        }
    });

    const Auth = createStackNavigator();
    const AuthStack = () => {
        return(
        <Auth.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}
        >
            <Auth.Screen name="Login" component={LoginScreen} />
            <Auth.Screen name="SignUp" component={SignUpScreen} />
            <Auth.Screen name="Reset" component={ResetScreen} />
        </Auth.Navigator>
        );
    }

    const Tab = createBottomTabNavigator();
    const TabStack = () => {
        return (
            <Tab.Navigator
                style={styles.main}
                backBehavior='history'
                tabBar={(props) => <Footer {...props}  />}
                screenOptions={{ headerShown: false }}
            >
            <Tab.Screen name="Scanner" component={ScannerScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Game" component={GameScreen} />
            <Tab.Screen name="Lesson" component={LessonScreen} />
            <Tab.Screen name="List" component={ListScreen} />
            <Tab.Screen name={"GeneralSettings"} component={GeneralScreen} />
            <Tab.Screen name={"LicenseSettings"} component={LicenseScreen} />
            <Tab.Screen name={"SoundSettings"} component={SoundScreen} />
            <Tab.Screen name={"Result"} component={ResultScreen} />
            <Tab.Screen name={"Badge"} component={BadgeScreen} />
            <Tab.Screen name={"Economy"} component={EconomyScreen} />
            <Tab.Screen name={"Error"} component={ErrorScreen} />
            <Tab.Screen name={"New"} component={NewTrashScreen} />
            <Tab.Screen name={"FirstLesson"} component={FirstlessonScreen} />
            <Tab.Screen name={"SecondLesson"} component={SecondlessonScreen} />
        </Tab.Navigator>);
    }

  return (
      <NavigationContainer>
          {connected ?  <TabStack /> : <AuthStack /> }
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    main: {
        flex:1,
    },
});

export default App;