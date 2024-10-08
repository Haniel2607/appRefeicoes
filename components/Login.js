import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Firebase } from "../firebase";

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function dados(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    function logar() {
        Firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(() => {
                if (user) {
                    alert("Usuário não existe.");
                    return;
                }
                navigation.navigate('Rotas', { email })
            })
            .catch((error) => {
                alert(error);
                navigation.navigate('Login');
            })
    }

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