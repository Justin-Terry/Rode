import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toolbar from '../components/toolbar_components/Toolbar';
import BikeCard from '../components/BikeCard';
import BikeForm from '../components/BikeForm'
import Colors from '../resources/Colors';
import Button from '../components/common/Button';

export default class AddBikeScreen extends React.Component {
    render() {
        return(
        <View style={styles.container}>
            <Toolbar text={"Add Bike"} navigation = {this.props.navigation}/>
            <View style={styles.cardContainer}>
                <BikeCard style={styles.bikeCard}/>
            </View>
            <View style={styles.textContainer}>
                <BikeForm />
            </View>
            <View style={styles.buttonContainer}>
                <Button color={Colors.RED} textColor={Colors.WHITE} label={"Submit"}/>
                <Button color={Colors.RED} textColor={Colors.WHITE} label={"Cancel"}/>
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
    text: {
      fontSize: 30,
    },
    cardContainer: {
        backgroundColor: 'blue',
        height: 180,
    },
    textContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: .15,
        flexDirection: 'row',
    }
  })