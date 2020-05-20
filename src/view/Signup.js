import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";


export default class Signup extends React.Component {
	state={
		nome: "",
		cognome: "",
		email: "",
		password: ""
	}
	render() {
		const isDisabled = !this.state.nome || !this.state.cognome || !this.state.email || !this.state.password
		return (
			<View style={estetica.container}> 
				<Text style={estetica.title}>REGISTRAZIONE</Text>

				<Text style={estetica.registrazione}>NOME</Text>

				<TextInput
					value={this.state.nome}
					placeholder={"Inserisci il tuo nome"}
					placeholderTextColor={"black"}
					onChangeText={(nome) => this.setState({nome})}
					keyboardType={"default"}
					style={estetica.input}
				/>
				<Text style={estetica.registrazione}>COGNOME</Text>

				<TextInput
					value={this.state.cognome}
					placeholder={"Inserisci il tuo cognome"}
					placeholderTextColor={"black"}
					onChangeText={(cognome) => this.setState({cognome})}
					keyboardType={"default"}
					style={estetica.input}
				/>
				<Text style={estetica.registrazione}>EMAIL</Text>

				<TextInput
					value={this.state.email}
					placeholder={"Inserisci la tua email"}
					placeholderTextColor={"black"}
					onChangeText={(email) => this.setState({email})}
					keyboardType={"email-address"}
					autoCapitalize={"none"}
					style={estetica.input}
				/>
				<Text style={estetica.registrazione}>PASSWORD</Text>

				<TextInput
					value={this.state.password}
					placeholder={"Inserisci una password"}
					placeholderTextColor={"black"}
					onChangeText={(password) => this.setState({password})}
					keyboardType={"default"}
					secureTextEntry={true}
					style={estetica.input}
				/>
				<TouchableOpacity style={[estetica.button, isDisabled ? {opacity: 0.5} : {}]} onPress={() => alert("REGISTRAZIONE COMPLETATA")} disabled={isDisabled}>
					<Text style={[estetica.buttonstyle, {color: "black"}]}>REGISTRATI</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const estetica = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fcdf03"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 20
	},
	registrazione: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold'
	},
	input: {
		borderWidth: 2,
		marginTop: 10,
		padding: 5,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 28,
		color: "black"
	},
	button: {
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		marginTop: 15,
		borderRadius: 28
	},
	buttonstyle: {
		color: "white",
		fontWeight: "bold"
	}

})
