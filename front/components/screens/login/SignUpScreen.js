import React, { useState } from 'react'
import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {styles} from '../../../styles/LoginStyle'
import * as UserService from "../../../services/userService";

export function SignUpScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [level, setLevel] = useState('')
    const [number, setNumber] = useState('')

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
                    <TextInput
                        placeholder="Niveau"
                        value={level}
                        onChangeText={text => setLevel(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Nombre d'élèves"
                        value={number}
                        onChangeText={text => setNumber(text)}
                        style={styles.input}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => UserService.handleSignUp(email,password,level,number)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Je m'inscris</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}