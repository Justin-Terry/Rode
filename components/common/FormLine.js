import React, {Component} from 'react'
import {TextInput, Text, View, StyleSheet } from 'react-native'
import Colors from '../../resources/Colors';

export default class FormLine extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.label}</Text>
                <TextInput
                    keyboardType = {this.props.keyboardtype}
                    placeholder = {this.props.placeholder}
                    maxLength = {this.props.maxLength}
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        borderBottomWidth: 2,
        borderBottomColor: Colors.RED
    }
})