import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../resources/Colors';

export default class BikeCard extends Component {

    state = {
        bikeYear: '',
        bikeMake: '',
        bikeModel: '',
    }

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    source={require('../resources/images/mcclip.png')}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style = {styles.year}>2010</Text>
                    <Text style = {styles.make}>Honda</Text>
                    <Text style = {styles.model}>CBR600RR</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.RED,
        borderBottomColor: Colors.BLACK,
        borderBottomWidth: 4,
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 9000,
        resizeMode: 'cover',
        marginLeft: 10,
    },
    textContainer: {
        flex: 1.2,
        marginLeft: 20,
        justifyContent: 'center',
    },
    year:{
        color: Colors.WHITE,
        fontSize: 15,
    },
    make:{
        color: Colors.WHITE,
        fontSize: 20,
    },
    model:{
        color: Colors.WHITE,
        fontSize: 30,
        fontWeight: 'bold',
    },
})