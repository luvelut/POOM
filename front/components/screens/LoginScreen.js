import React, { useState } from 'react'
import { KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../services/Firebase'
import {COLORS} from '../../variables/colors'

const image = { uri: "https://reactjs.org/favicon.png" };

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Inscrits avec :', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
      console.log("HANDLE LOGIN");
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Connecté avec :', user.email);

      })
      .catch(error => alert(error.message))
  }


     return (
          <KeyboardAvoidingView 
          style={styles.container}
          behavior="padding"
          >
          <Image style={styles.image} source={require('../../assets/banniere_connexion.png')} />
          <View style={styles.bas}>
          <View style={styles.inputContainer}>
          <TextInput
               placeholder="Email"
               value={email}
               onChangeText={text => setEmail(text)}
               style={styles.input}
          />
          <TextInput
               placeholder="Mot de passe"
               value={password}
               onChangeText={text => setPassword(text)}
               style={styles.input}
               secureTextEntry
          />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
               onPress={handleLogin}
               style={styles.button}
          >
               <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity
               onPress={handleSignUp}
               style={[styles.button, styles.buttonOutline]}
          >
               <Text style={styles.buttonOutlineText}>Inscription</Text>
          </TouchableOpacity>
          </View>
          </View>
     </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 40,
  },
  image: {
    position:'absolute',
    top : 0,
    height: 305,
    width: 768,
  },
  bas: {
  backgroundColor: COLORS.background,
  borderRadius : 20,
  //width: '100%',
  alignItems : 'center',
  position: 'absolute',
    top: 290,
    left: 0,   
    width: '100%',
    height: '50%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 35,
    marginTop: 35,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 35,
  },
  buttonOutline: {
    backgroundColor: 'white',
    //marginTop: 5,
    borderColor: COLORS.primary,
    borderWidth: 2,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 20,
  },
})
