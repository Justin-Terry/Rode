import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
  }
})