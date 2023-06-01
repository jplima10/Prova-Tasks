
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

import firebase from "../../config/firebaseconfig";

export default function Login(){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const loginFirebase = ()=> {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Task", {idUser: user.uid})
        })
        .catch((error) =>{
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                navigation.navigate("Task", { idUser: user.uid })
            } 
        });
    }, []);

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder= "Digite seu e-mail"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    secureTextEntry={true}
                    placeholder= "Digite sua senha"
                    style={styles.input}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={loginFirebase}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegistro} onPress={ () => navigation.navigate('Cadastro')}>
                    <Text style={styles.registerText}>Não possui uma conta? Registre-se</Text>
                </TouchableOpacity>
                               
            </Animatable.View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F92e6a',
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
        alignItems: "center"

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },  
    button:{
        backgroundColor:'#F92e6a',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegistro:{
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText:{
        color: '#a1a1a1'
    }
})