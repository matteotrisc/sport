import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default class Login extends React.Component {
	state = {
		email: "",
		password: ""
	}
	render () {
		const isDisabled = !this.state.email || !this.state.password
		return (
			<View style={estetica.container}>

			<Image
			 	style={estetica.logo}
			 	source={{uri: 'https://lh3.googleusercontent.com/proxy/5Xf9xmkjHhS9WrmtD2l_9eS-T6zbe22HdrlM8gdGngb2bSTsiVdIyoF-o39BsT5wRN40CxN1gLJEJ8gv5FCHObi4Qj-C6xCDm-UwY-aDAIc'}}
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

			<TouchableOpacity style={[estetica.button, isDisabled ? {opacity: 0.5} : {}]} onPress={() => alert('LMT')} disabled={isDisabled}>
			<Text style={estetica.buttontextstyles} >ACCEDI</Text>
			</TouchableOpacity>

			<TouchableOpacity style={estetica.registrazione} onPress={() => alert(this.state.email)}>
			<Text style={[estetica.buttontextstyles, {color: 'black' }]} >REGISTRATI</Text>
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
		width: 300,
		height: 200,
		alignSelf: "center",
		marginBottom: 5
	},
	button: {
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		marginTop: 15,
		borderRadius: 28,
	},
	
	buttontextstyles:{
		color: "white",
		fontWeight: "bold",
	},
	registrazione:{
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		marginTop: 15,
		borderRadius: 28,
		borderWidth: 2
	}
})