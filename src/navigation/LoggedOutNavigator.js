import {createStackNavigator} from 'react-navigation-stack'
import Login from '../view/Login'
import Signup from '../view/Signup'
// createStackNavigator serve per navigare tra una schermata e l'altra

const LoggedOut = createStackNavigator({
    Login: Login,
    Signup: Signup
}, {
    initialRouteName: "Login",
    headerMode: "none"
})

export default LoggedOut