import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/images/trackright_logo.jpg')}
                        style={{ width: 200, height: 200 }}
                    />
            </View>
            
            <View style={styles.loginContainer}>
                <Text style={styles.loginTitle}>Employee Sign In</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter username" 
                    placeholderTextColor="#ccc" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Password" 
                    secureTextEntry 
                    placeholderTextColor="#ccc" 
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 

    },
    logoContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        color: '#4A4A4A',
        fontSize: 24,
        fontWeight: '600',
    },
    loginContainer: {
        backgroundColor: '#4A5568',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        width: '80%',
    },
    loginTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#4A4A4A',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    registerText: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default App;