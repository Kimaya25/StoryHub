import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from '../Screens/WriteStoryScreen';
import ReadStoryScreen from '../Screens/ReadStoryScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';

export const AppTabNavigator = createBottomTabNavigator({
    ReadStory : {screen:ReadStoryScreen,
    navigationOptions : {
        tabBarIcon : <Image source = {require("../assets/readStory.jpg")} style = {{width : 30, height : 35}}/>,
        tabBarLabel : 'ReadStories'
    }},
    WriteStory : {screen:WriteStoryScreen,
    navigationOptions : {
        tabBarIcon : <Image source = {require("../assets/WriteStory.jpg")} style = {{width : 30, height : 35}}/>
    }}
})