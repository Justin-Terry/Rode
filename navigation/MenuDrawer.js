import React from 'react'
import { Platform, Dimensions, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import MenuDrawerTopper from './MenuDrawerTopper'
import MenuItem from './MenuItem';
import Colors from '../resources/Colors'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {

    navLink(nav, text, icon) {
        return(
            <MenuItem label = {text} icon = {icon} navigation = {this.props.navigation} navTo = {nav}/>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <MenuDrawerTopper year={"2010"} make={"Honda"} model={"CBR600RR"} />
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Home', 'Home', "home")}
                    {this.navLink('Home', 'MPG', "gauge-low")}
                    {this.navLink('Home', 'Fluids', "water")}
                    {this.navLink('Home', 'Drivetrain', "cogs")}
                    {this.navLink('Home', 'Brakes', "camera-iris")}
                    {this.navLink('Home', 'Tires', "lifebuoy")}
                    {this.navLink('ManageBikes', 'Manage/Change Bikes', "motorbike")}
                    {this.navLink('Settings', 'Settings', "settings")}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    header: {
        fontSize: 40,
    },
    topLinks:{
        width: WIDTH * 0.83,
        height: 160,
        backgroundColor: Colors.RED,
    },
    bottomLinks:{
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingTop:1,
    },
})