import React from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";

export default class Home extends React.Component {
    render() {
        return (
            <View style={estetica.container}>
                <Text>HOME</Text>
            </View>
        )
    }
}

const estetica = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
}

)