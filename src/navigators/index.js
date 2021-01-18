import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawernavigator';

class AppNavigator extends Component {
    constructor(props) {
        super(props);
        this.routeNameRef = React.createRef();
        this.navigationRef = React.createRef();
    }
    componentDidMount(){
    }
    componentDidUpdate(){
    }
    navigationReady = () => {
        this.routeNameRef.current = this.navigationRef.current.getCurrentRoute().name;
        console.log("Main Route ==>", this.routeNameRef.current)
    }
    navigationStateChange = () => {
        const previousRouteName = this.routeNameRef.current;
        const currentRouteName = this.navigationRef.current.getCurrentRoute().name

        if (previousRouteName !== currentRouteName) {
            console.log("New Route ===>", currentRouteName);
        }
        // Save the current route name for later comparision
        this.routeNameRef.current = currentRouteName;
    }
    
    render() {
        console.log("XXX===>",this.props)
        return (
            <NavigationContainer
                ref={this.navigationRef}
                onReady={this.navigationReady}
                onStateChange={this.navigationStateChange}
            >
                <DrawerNavigator />
            </NavigationContainer>
        )
    }
}


export default AppNavigator;
