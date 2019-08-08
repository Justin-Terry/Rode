import React, {Component} from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Colors from '../resources/Colors'

export default class MenuDrawerTopper extends Component {
    render() {
        const {year, make, model, imageSrc} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        style = {styles.image}
                        source={require('../resources/images/cbr.jpg')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style = {styles.year}>{year}</Text>
                    <Text style = {styles.make}>{make}</Text>
                    <Text style = {styles.model}>{model}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 5,
        borderBottomColor: Colors.BLACK,
    },
    imageContainer: {
        flex: 1,
        padding: 10,
    },
    image:{
        flex: 1,
        width: null,
        height: null,
        borderRadius: 500,
        borderWidth: 4,
        borderColor: Colors.WHITE,
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1.2,
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