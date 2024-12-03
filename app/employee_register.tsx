import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CreateAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Image
                    source={require('../assets/images/trackright_logo.jpg')}
                    style={{ width: 100, height: 100 }}
                  />
                <Text style={styles.title}>Create Employee Account</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Company Name</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter company name" 
                        placeholderTextColor="#ccc" 
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="youremailaddress@domain.com" 
                        keyboardType="email-address"
                        placeholderTextColor="#ccc" 
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter Password" 
                        secureTextEntry 
                        placeholderTextColor="#ccc" 
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.loginText}>
                    Already have an account? 
                    <Text style={styles.linkText}> Log in</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b0c4de',
    },
    formContainer: {
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
        width: '80%',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    title: {
        color: '#4A4A4A',
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        color: '#4A4A4A',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#4A5568',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    loginText: {
        color: '#4A4A4A',
        marginTop: 10,
        textAlign: 'center',
    },
    linkText: {
        color: '#1E90FF',
    },
});

export default CreateAccount;