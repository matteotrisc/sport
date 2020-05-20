import {createAppContainer, createSwitchNavigator} from 'react-navigation' // libreria per la navigazione tra schermate
import LoggedOut from './LoggedOutNavigator'
import LoggedIn from './LoggedInNavigator'
// createAppContainer serve per creare un contenitore per l'app
//  createSwitchNavigator serve per indirizzare l'utente dentro l'app se è già loggato o reindirizzarlo sul login

const switchAuth = (loggedIn = false) => createAppContainer(createSwitchNavigator(
    {
        LoggedOut: LoggedOut,
        LoggedIn: LoggedIn
    }, 
    {
        initialRouteName: loggedIn ? "LoggedIn" : "LoggedOut"
    }
))

export default switchAuth