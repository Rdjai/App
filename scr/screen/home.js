import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native'
import UserList from "../component/userlist"




const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.userrow}>
                <UserList />
                <UserList />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    userrow: {
        display: "flex",
        flexDirection: "row"
    },
    usercard: {
        height: '35%',
        width: '49%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default HomeScreen
