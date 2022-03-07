import React, { useState } from 'react'
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../../services/Firebase'
import {styles} from '../../../styles/LoginStyle'

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
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
          <Image style={styles.image} source={require('../../../assets/banniere_connexion.png')} />
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
                  onPress={() => navigation.navigate('SignUp')}
                   style={[styles.button, styles.buttonOutline]}
              >
                   <Text style={styles.buttonOutlineText}>Inscription</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => navigation.navigate('Reset')}
              >
                  <Text style={styles.text}>J'ai oublié mon mot de passe</Text>
              </TouchableOpacity>
          </View>
          </View>
     </KeyboardAvoidingView>
  )
}
