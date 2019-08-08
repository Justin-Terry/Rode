import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toolbar from '../components/toolbar_components/Toolbar';

export default class SettingsScreen extends React.Component {
    render() {
        return(
        <View style={styles.container}>
            <Toolbar text={"Settings"} navigation = {this.props.navigation}/>
            <Text styles={styles.text}>Settings</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 30,
    }
  })