import {StyleSheet, Text, View, FlatList, ActivityIndicator, Alert, TouchableHighlight,TouchableOpacity, Image} from 'react-native';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react'
import { Camera } from 'expo-camera';

export function CameraScreen({navigation}) {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);

    async function takePicture() {
        if (camera) {
                   const data = await camera.takePictureAsync(null);
                   navigation.navigate('Picture', {image: data.uri});
                 }
    }

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

      return (
        <View style={styles.container}>
          <Camera style={styles.camera} ref={(ref) => setCamera(ref)} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                              takePicture();
                            }}>
                            <Text style={styles.text}> Picture </Text>
                          </TouchableOpacity>
                        </View>
          </Camera>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

