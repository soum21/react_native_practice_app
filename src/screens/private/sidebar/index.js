import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import {Container,Content} from 'native-base';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';


const Sidebar = (props) => {
    return ( 
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    )
}

export default Sidebar;
