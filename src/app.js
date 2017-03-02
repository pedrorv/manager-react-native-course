import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBDqbqcd59HDBIpbqkFvlrO_RbLN8q9www',
      authDomain: 'manager-927ed.firebaseapp.com',
      databaseURL: 'https://manager-927ed.firebaseio.com',
      storageBucket: 'manager-927ed.appspot.com',
      messagingSenderId: '346567615156'
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App