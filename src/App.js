import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC5CyOUTObrvL-ugS5wiHZHp6FZwR6e5mQ',
            authDomain: 'manager-49c9c.firebaseapp.com',
            databaseURL: 'https://manager-49c9c.firebaseio.com',
            projectId: 'manager-49c9c',
            storageBucket: 'manager-49c9c.appspot.com',
            messagingSenderId: '279885388089'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Router />
            </Provider>
        );
    }
}

export default App;
