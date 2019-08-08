import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

import MenuDrawer from './MenuDrawer';
import ManageBikesScreen from '../screens/ManageBikesScreen';
import AddBikeScreen from '../screens/AddBikeScreen';

const WIDTH = Dimensions.get('window').width;

// Configure the drawer itself
const DrawerConfig = {
    drawerWidth: WIDTH * 0.83,
    contentComponent: ({navigation}) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const DrawerNavigator = createDrawerNavigator(
    // Define the screens for navigation here.
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
        ManageBikes: ManageBikesScreen,
        AddBike: AddBikeScreen,
    }, 
    DrawerConfig
)

export default createAppContainer(DrawerNavigator);