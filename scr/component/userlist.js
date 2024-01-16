import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

const UserList = () => {
    return (
        <View style={styles.usercard}>
            <ImageBackground source={require('../assest/img/girlimg.jpeg')}
                style={styles.image}>
                <View>
                    <Text style={
                        {
                            color: "white",
                            fontSize: 14,
                            fontWeight: "bold",

                        }
                    }>Jasmeen khan</Text>
                    <Text style={
                        {
                            color: "white",
                            fontSize: 14,
                            fontWeight: "bold",

                        }
                    }>21</Text>
                </View>
                <TouchableOpacity style={styles.profileicon} onPress={console.log("kgh")}>
                    <Image source={require('../assest/img/logo.jpeg')} style={styles.profileicoesixe} />
                </TouchableOpacity>
            </ImageBackground>

        </View >
    );
};

const styles = StyleSheet.create({
    usercard: {
        height: '35%',
        width: '49%',
        padding: 8,
        borderRadius: 16,
    },
    image: {

        flexDirection: "row",
        display: "flex",
        width: null,
        height: 250,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: "space-around",
        padding: 10,
        // alignContent: "flex-end",
        alignItems: "flex-end"
    },
    profileicon: {
        justifyContent: "space-evenly",
        height: 40,
        width: 40,

    },
    profileicoesixe: {
        height: 40,
        width: 40,

    }
});

export default UserList;
