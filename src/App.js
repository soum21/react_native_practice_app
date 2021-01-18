import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppNavigator from './navigators';
import { Root } from "native-base";
import { Provider } from "react-redux";
import { store } from './functions/redux/stores';
import 'react-native-gesture-handler';

class App extends Component {
    render() {
        return (
            <Root>
                <Provider store={store}>
                    <AppNavigator />
                </Provider>
            </Root>
        )
    }
}

export default App;