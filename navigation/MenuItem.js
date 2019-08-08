import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../resources/Colors';

export default class MenuItem extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate(this.props.navTo)}}>
                    <Text style={styles.link}>
                        <Icon 
                                name = {this.props.icon}
                                color = {"black"}
                                size = {30}
                        />  {this.props.label}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    link: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
        paddingLeft: 14,
        margin: 1,
        textAlign: 'left',
        backgroundColor: Colors.WHITE,
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.VERY_LIGHT_GRAY
    }
})
