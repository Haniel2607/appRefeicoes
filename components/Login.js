import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Login({ navigation }) {

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}> Login </Text>
            <TextInput style={estilo.input} placeholder="Digite o email" />
            <TextInput style={estilo.input} placeholder="Digite a senha" />

            <TouchableOpacity style={estilo.botaoLogar}>
                <Text style={estilo.textoBotaoLogar}> Entrar </Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        width: "90%",
        marginBottom: 10,
        padding: 10
    },
    botaoLogar: {
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 5
    },
    textoBotaoLogar: {
        color: "#fff",
        fontWeight: "bold"
    }
});