import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toolbar from '../components/toolbar_components/Toolbar';

export default class HomeScreen extends React.Component {
    render() {
      const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
        return(
        <View style={styles.container}>
            <Provider store={store}>
              <Router />
            </Provider>
            <Toolbar text={"RODE"} navigation = {this.props.navigation}/>
            <Text styles={styles.text}>HomeScreen</Text>
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