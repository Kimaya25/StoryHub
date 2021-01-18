import * as React from 'react';
import { Text, View, Button,TouchableOpacity, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen'; 
import WelcomeScreen from './Screens/WelcomeScreen';
import AppTabNavigator from './Components/AppTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
     <appContainer/>
      </View>
    );
  }
}

const tabNavigator = createSwitchNavigator({
  WelcomeScreen : {screen : WelcomeScreen},
  BottomTab : {screen : AppTabNavigator}
})





const appContainer = createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
