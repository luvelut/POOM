import React, { useState } from 'react'
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { auth } from '../../../services/Firebase'
import {styles} from '../../../styles/LoginStyle'

export function ResetScreen() {
    const [email, setEmail] = useState('')

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image style={styles.image} source={require('../../../assets/banniere_connexion.png')} />
            <View style={styles.bas}>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        onPress={() => auth.sendPasswordResetEmail(email)}
                    >
                        <Text style={styles.subtitle}>Entrez votre addresse email pour réinitialiser votre mot de passe.</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            auth.sendPasswordResetEmail(email);
                            Alert.alert('Un email vous a été envoyé')
                            }
                        }
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Recevoir l'e-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}