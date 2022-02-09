import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import * as React from 'react';
// import Toggle from 'react-toggle';
export function GameScreen() {
    return (
        <View>
            <Text>GamePage</Text>
        </View>
    );
};

// // import * as React from 'react';
// // import { Text, StyleSheet, View, useColorScheme } from 'react-native';
// // import { StatusBar } from 'expo-status-bar'; // automatically switches bar style based on theme!


// //   const colorScheme = useColorScheme();

// //   const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
// //   const themeContainerStyle =
// //     colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

// //   return (
// //     <View style={[styles.container, themeContainerStyle]}>
// //       <Text style={[styles.text, themeTextStyle]}>Color scheme: {colorScheme}</Text>
// //       <StatusBar />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   lightContainer: {
// //     backgroundColor: '#d0d0c0',
// //   },
// //   darkContainer: {
// //     backgroundColor: '#242c40',
// //   },
// //   lightThemeText: {
// //     color: '#242c40',
// //   },
// //   darkThemeText: {
// //     color: '#d0d0c0',
// //   },
// // });



//   const ColorSchemeToggle= React.FC = () => {

//   const { value, setValue } = useColorScheme();

//   return (
//     <View>
//         <Toggle
//         checked={value === 'dark'}
//         onChange={(event) => setValue(event.target.checked ? 'dark' : 'light')}
//         icons={{ checked: '🌙', unchecked: '🔆' }}
//         aria-label="Dark mode"
//         />
//     </View>
      
//   );
//   };


// export default ColorSchemeToggle;

