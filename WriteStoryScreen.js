import * as React from 'react';
import { Text, View,TextInput, KeyboardAvoidingView} from 'react-native'

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
        title : '',
        author : '',
        story : ''
    }
}
render(){
    return(
        <View>
        <KeyboardAvoidingView>
      <Header backgroundColor = "Yellow" 
            centerComponent = {{text:'Write Story', 
             style : {fontSize : 25,  fontWeight : 'bold',color : 'red'}}}/>
      
    <TextInput 
      placeholder = "title of the story"
      onChangeText = {(text)=>{
        this.setState({
          title:text
        })
      }}
      />

     <TextInput
     placeholder = "author of the story"
       onChangeText ={(text)=>{
         this.setState({
           author:text
         })
       }}
     />

<TextInput 
     placeholder = "write the story here"
     multiLine = {true}
     numberOfLines = {10}
       onChangeText ={(text)=>{
         this.setState({
           story:text
         })
       }}
     />

     <Button>title = 'Submit'</Button>
     </KeyboardAvoidingView>  
                 </View>
    )
}
}