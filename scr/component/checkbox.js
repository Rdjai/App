// Checkbox.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// import
const Checkbox = () => {
    const [isChecked, setChecked] = useState(false);
    const navigationScreen = useNavigation();


    const handleToggle = () => {
        setChecked(!isChecked);
    };

    const CreateAccount = () => {
        // Alert("click");
        console.warn("click");
        navigationScreen.navigate("createaccount")

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handleToggle}>
                <View style={styles.checkbox}>
                    {isChecked && <Icon name="check" size={19} color="#900" />}
                </View>
                <Text>Accept terms and conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccountContainer} onPress={() => {
                CreateAccount();
                console.log("clicked");
            }}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        margin: "auto",
        padding: "auto",
        alignContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 10,

        // marginTop: 20,
    },
    checkboxContainer: {
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        width: "40%",
        alignContent: "center"

    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: "center"
    },
    Icon: {
        height: 10,

    },
    createAccountContainer: {
        width: "49%",
        alignItems: "flex-end",
        marginLeft: 'auto',
        alignContent: "flex-end",
        textAlign: "right"

    },
});

export default Checkbox;
