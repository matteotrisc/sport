import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default class App extends React.Component {
	state = {
		email: "",
		password: ""
	}
	render () {
		return (
			<View style={estetica.container}>

			<Image
			 	style={estetica.logo}
			 	source={{uri: 'https://i.pinimg.com/originals/d9/12/09/d91209340bdc005936c46323a62caaff.png'}}
			 	resizeMode={"contain"}
			 />

			<Text style={estetica.intestazione}>Email</Text>

			<TextInput 
				value={this.state.email}
			 	placeholder={"Inserisci la tua email"}
			 	placeholderTextColor={"black"}
			  	onChangeText={(email) => this.setState({email})}
			   	keyboardType={"email-address"}
			    returnKeyType={"next"}
			    style={estetica.input}
			/>

			<Text style={estetica.intestazione} >Password</Text>

			<TextInput 
				value={this.state.password}
			 	placeholder={"Inserisci la tua password"}
			 	placeholderTextColor={"black"}
			  	onChangeText={(password) => this.setState({password})}
			   	secureTextEntry={true}
			    style={estetica.input}
			/>

			<TouchableOpacity style={estetica.button}>
			<Text style={estetica.buttontextstyles} >ACCEDI</Text>
			</TouchableOpacity>

			</View>
		)
	}
}

const estetica = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		padding: 30,
		backgroundColor: '#fcdf03'
		
	},

	input: {
		marginBottom: 15,
		borderWidth: 2,
		padding: 5,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 28,
		color: "black",
	},

	intestazione: {
		fontSize: 20,
		fontWeight: "bold",
		alignSelf: "center",
		marginBottom: 10
	},

	logo: {
		width: 200,
		height: 200,
		alignSelf: "center",
		marginBottom: 40

	},
	button: {
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		marginTop: 15,
		borderRadius: 28


	},
	buttontextstyles:{
		color: "white",
		fontWeight: "bold"
	}
})