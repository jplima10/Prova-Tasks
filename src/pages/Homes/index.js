
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Homes(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Home Screen</Text>
            </Animatable.View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F92e6a'
    },
    containerHeader:{
        alignItems: "center",
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',

    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    
})