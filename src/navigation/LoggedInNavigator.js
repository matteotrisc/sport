import {createStackNavigator} from 'react-navigation-stack'
import Home from '../view/Home'

const LoggedIn = createStackNavigator({
    Home: Home
}, {
    initialRouteName: "Home"
})

export default LoggedIn