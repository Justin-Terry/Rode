import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'

export default class MenuButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon.Button 
                    name = {"md-menu"}
                    color = {"white"}
                    backgroundColor = {"#FF0000"}
                    size = {30}
                    onPress = {() => {
                        this.props.navigation.toggleDrawer()
                    }}>Menu</Icon.Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        width: 80,
        height: 40,
        position: 'absolute',
        top: 10,
        left: 15,
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 5
    },
})