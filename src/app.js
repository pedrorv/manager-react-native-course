import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App