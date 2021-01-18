import * as React from 'react';
import {Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-element'

export default class ReadStoryScreen extends React.Component{
   
    render(){
        return(
            <View>
<Header backgroundColor = 'yellow' 
centerComponent = {{text:'Read Story Screen', style : {fontSize :'20', fontWeight : 'bold'}}}/>


            </View>
        )
    }
}
