import React, { Component }from 'react'
import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Toolbar from '../components/toolbar_components/Toolbar'
import Colors from '../resources/Colors';

const WIDTH = Dimensions.get('window').width;

export default class ManageBikesScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Toolbar text={"Manage Bikes"} navigation = {this.props.navigation}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {this.props.navigation.navigate("AddBike")}}>
                        <Text>Add Bike</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Edit Bike</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Delete Bike</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH * 0.8,
        backgroundColor: Colors.RED,
    }

  })
