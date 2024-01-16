import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import Checkbox from '../component/checkbox';
import { useNavigation } from '@react-navigation/native';
const RagisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("Home")
        console.log('Logging in with:', username, password);
    };



    return (
        <ImageBackground source={require('../assest/img/bg1.jpg')} style={styles.backgroundImage}>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="userName@email.com"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <Checkbox
                    title="Checkbox Label"
                    checked={isChecked}
                    onPress={() => setChecked(!isChecked)}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        alignContent: "center",
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
        // alignItems: "center",
        justifyContent: "center",
        padding: 12
    },
    container: {
        backgroundColor: "rgba( 255, 255, 255, 0.45)",
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // height: 300,
        borderRadius: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        // color: 'white',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingLeft: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RagisterScreen;
