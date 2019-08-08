import React, {Component} from 'react'
import { TouchableOpacity, Dimensions, StyleSheet, View, Text } from 'react-native'

import MenuButton from './MenuButton'

const WIDTH = Dimensions.get('window').width

export default class Toolbar extends Component {
    render() {
        return(
            <View style={styles.toolbar}>
                <MenuButton navigation = {this.props.navigation}/>
                <Text style={styles.headerText}>{this.props.text}</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 60,
        width: WIDTH,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center',        
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
    
})