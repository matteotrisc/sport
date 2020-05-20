import React from 'react'
import {AsyncStorage} from 'react-native'
import switchAuth from './src/navigation';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			token: ""
		}
	}

	componentDidMount () {
		this.crontrolloToken()
	}

	async crontrolloToken () {
		let token = ""
		try {
			token = await AsyncStorage.getItem('token_sport')
		} catch (error) {
			console.error(error)
		}
		if (token) {
			this.setState({token})
		} else {
			this.setState({token: false})
		}
	}


	render() {
		const RootNavigator = switchAuth(this.state.token)
		return (
			<RootNavigator />
		)
	}
}