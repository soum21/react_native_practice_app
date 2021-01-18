import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenList from './screenlist';
import HomeScreen from '../../screens/private/homescreen';

const MainStackNavigator = () => {
    const MainNavigator = createStackNavigator();
    return (
        <MainNavigator.Navigator initialRouteName="HomeScreen">
           {
               Object.entries({
                   ...ScreenList
               }).map(([key,component])=>{
                //    console.log(key,component)
                 return <MainNavigator.Screen key={key} name={key} component={component.screen} options={component.options}/>
               })
           }
           {/* <MainNavigator.Screen name="HOme" component={HomeScreen} /> */}
        </MainNavigator.Navigator>
    )
}

export default MainStackNavigator;