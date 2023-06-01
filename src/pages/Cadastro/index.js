
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Cadastro(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Registre-se</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Nome completo</Text>
                <TextInput 
                    placeholder= "Digite seu nome completo"
                    style={styles.input}
                />
                <Text style={styles.title}>Apelido</Text>
                <TextInput 
                    placeholder= "Como você deseja ser chamado"
                    style={styles.input}
                />
                <Text style={styles.title}>Email</Text>
                <TextInput 
                    placeholder= "Digite seu e-mail"
                    style={styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    placeholder= "Digite sua senha"
                    style={styles.input}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('Task')}
                >
                    <Text style={styles.buttonText}>Criar Conta</Text>
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