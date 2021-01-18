import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from '../stacknavigator';
import Sidebar from '../../screens/private/sidebar';

const DrawerNavigator = () =>{
    const AppDrawer = createDrawerNavigator();
    const dimensions = useWindowDimensions();
    const deviceWidth = dimensions.width;
    return(
        <AppDrawer.Navigator
             // drawerPosition = {'right'}
            //  screenOptions={{ swipeEnabled: false }}
             drawerStyle={{
                 width: 0.55 * deviceWidth
             }}
             overlayColor="transparent"
             drawerType={'slide'}
             drawerContent={(props) => <Sidebar {...props} />}
        >
            <AppDrawer.Screen name="AppMain" component= {MainStackNavigator}/>
        </AppDrawer.Navigator>
    )
}

export default DrawerNavigator;