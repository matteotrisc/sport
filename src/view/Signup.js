import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default class App extends React.Component {
	render() {
		return (
			<View style={estetica.container}> 
				<Text>Registrazione</Text>
			</View>
		)
	}
}

const estetica = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white"
	}


})
