import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class HomeScreen extends Component {
    constructor(props){
        super(props)
    }
   
    render() {
        const { navigation,homeState } = this.props
        console.log("===>", homeState)
        return (
            <View>
                <Text> HomeScreen </Text>
                <Button title="test navigation"
                    onPress={() => { navigation.navigate('FAQ') }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})


export default HomeScreen;