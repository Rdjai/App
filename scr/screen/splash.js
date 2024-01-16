import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

// import HomeScreen from "./Home";

const localImage = require('../assest/img/logo.jpeg');



const Splash = ({ navigation }) => {
    useEffect(
        () => {
            const timeout = setTimeout(() => {
                navigation.navigate('LoginScreen')
            }, 1500);
            return () => clearTimeout(timeout);
        }, [navigation]
    )


    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
            <Image
                source={localImage}
            />
            <Text style={{ fontSize: 23, fontWeight: "bold", marginTop: 20 }} >Hello Bois, Lets Play Hard</Text>

        </View>

    )
}

export default Splash