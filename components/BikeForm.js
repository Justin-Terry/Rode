import React, { Component } from 'react'
import { View } from 'react-native'
import FormLine from './common/FormLine'

export default class BikeForm extends Component {

    render(){
        return(
            <View>
                <FormLine label={"Year"} keyboardtype={"numeric"} placeholder={"Ex. 2015"} maxLength={4}/>
                <FormLine label={"Make"} keyboardtype={"default"} placeholder={"Ex. Honda"} maxLength={25}/>
                <FormLine label={"Model"} keyboardtype={"default"} placeholder={"Ex. CBR1000RR"} maxLength={25}/>
            </View>
        )
    }
}