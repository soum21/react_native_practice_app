import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppNavigator from './navigators';
import { Root } from "native-base";
import 'react-native-gesture-handler';

class App extends Component {
    render() {
        return (
            <Root>
                    <AppNavigator />
            </Root>
        )
    }
}

export default App;