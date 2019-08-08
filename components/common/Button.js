import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class Button extends Component {
    setButtonStyle() {
        return {
            flex: 1,
            backgroundColor: this.props.color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            margin: 5,
        }
    }

    setTextStyle() {
        return{
            color: this.props.textColor,
        }
    }

    render(){
        return(
            <TouchableOpacity style={this.setButtonStyle()}>
                <Text style={this.setTextStyle()}>{this.props.label}</Text>
            </TouchableOpacity>

        )
    }
}