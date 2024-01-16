import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, Image, FlatList } from "react-native"
import Splash from "./scr/screen/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./scr/screen/home";
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginScreen from "./scr/screen/login";
import RagisterScreen from "./scr/screen/ragister";

const Stack = createNativeStackNavigator();


const App = () => {

    console.log(Icon);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="splash" component={Splash} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{

                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => console.log('Header Left Pressed')}
                        >
                            <Image source={require("./scr/assest/img/logo.jpeg")}
                                style={
                                    {
                                        height: 25,
                                        width: 25
                                    }
                                }
                            />
                        </TouchableOpacity>
                    ),
                    headerBackVisible: false,
                    headerTitle: '',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => console.log('Header Left Pressed')}
                        >
                            <Icon name="list" size={20} color="black" />
                        </TouchableOpacity>
                    ),
                }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="createaccount" component={RagisterScreen} options={{
                    headerShown: false
                }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}


export default App;
