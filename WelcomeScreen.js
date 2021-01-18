import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Modal} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
export default class WelcomeScreen extends React.Component{
constructor(){
    super();
    this.state = {
       emailId : '',
       Password : '',
       FirstName : '',
       LastName : '',
       Address: '',
       Contact : '',
       ConfirmPassword : '',
       isModalVisable : 'false'
    }
}
      userSignUp =(email, Password, ConfirmPassword) =>{
          if(Password !== ConfirmPassword  ){
              alert("password does not match")
          }
          else{
        firebase.auth().createUserWithEmailAndPassword(email, Password)
        .then((response) => {
          db.collection("users").add({
              FirstName : this.state.FirstName,
              LastName :this.state.LastName,
              Contact : this.state.Contact,
              emailId : this.state.emailId,
              Address : this.state.Address
          })
        alert("your account has been created",
        '',
        [ {text:'OK',onPress:()=> this.setState({"isModalVisible" : false})},
        ]

        )
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("there has been an error ")
        });
      }
    }

      userLogin = (email, Password) =>{
        firebase.auth().signInWithEmailAndPassword(email, Password)
        .then(() => {
          this.props.navigation.navigate('recieveBooks')
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("there has been an error")
        });
      }

      ShowModal = ()=>{
          return(
              <Modal animationType = "fade"
              transparent = {true}
              visible = {this.state.isModalVisable}>
             <ScrollView style = {{width : '100%'}}>
                 <KeyboardAvoidingView>
                     <Text>Sign Up Form</Text>
                     
                     <TextInput style = {styles.textInput}
                     placeholder = "First name"
                     maxLength = {15}
                     onChangeText = {(text)=>{
                         this.setState({
                             FirstName : text
                         })
                     }}/>
                     
                     <TextInput style = {styles.textInput}
                     placeholder = "last name"
                     maxLength = {15}
                     onChangeText = {(text)=>{
                         this.setState({
                             LastName : text
                         })
                     }}/>

                     <TextInput style = {styles.textInput}
                     placeholder = "contact details"
                     keyBoardType = "numeric"
                     onChangeText = {(text)=>{
                         this.setState({
                             Contact : text
                         })
                     }}/>

                     <TextInput style = {styles.textInput}
                     placeholder = "address"
                     multiline = {true}
                     onChangeText = {(text)=>{
                         this.setState({
                             Address : text
                         })
                     }}/>

                     <TextInput style = {styles.textInput}
                     placeholder = "abc@gmail.com"
                     keyboardType = "email-address"
                     onChangeText = {(text)=>{
                         this.setState({
                             emailId : text
                         })
                     }}/>

                     <TextInput style = {styles.textInput}
                     placeholder = "password"
                     secureTextEntry = {true}
                     onChangeText = {(text)=>{
                         this.setState({
                             Password : text
                         })
                     }}/>

                     <TextInput style = {styles.textInput}
                     placeholder = "confirm Password"
                     secureTextEntry = {true}
                     onChangeText = {(text)=>{
                         this.setState({
                             ConfirmPassword : text
                         })
                     }}/>

                     <TouchableOpacity 
                     onPress = {()=>{
                         this.userSignUp(this.state.emailId, this.state.Password, this.state.ConfirmPassword)
                     }}>
                        <Text>Submit</Text>
                     </TouchableOpacity>
                 </KeyboardAvoidingView>
             </ScrollView>

              </Modal>
          )
      }
    render(){
        return(
            <View>
            <View style = {{justifyContent : 'center', alignItems : 'center'}}>
                {this.ShowModal()}
            </View>
          <Header backgroundColor = "green" 
                centerComponent = {{text:'Book Santa', 
                 style : {fontSize : 25,  fontWeight : 'bold',color : 'red'}}}/>
          

        <TextInput style = {styles.textInput}
          placeholder = "abc@gmail.com"
          keyBoardType = 'email-address'
          onChangeText = {(text)=>{
              this.setState({
                  emailId : text
              })
          }}/>

         <TextInput style = {styles.textInput}
         placeholder = "password"
         secureTextEntry = {true}
         onChangeText = {(text)=>{
             this.setState({
                 Password : text
             })
         }}/>

         
              <TouchableOpacity style = {styles.signUp} 
              onPress = {()=>{
                  this.userSignUp(this.state.emailId, this.state.Password)
              }}>
                  <Text style = {styles.text}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.login}
              onPress = {()=>{
                  this.userLogin(this.state.emailId, this.state.Password)
              }}>
                  <Text style = {styles.text}>Login</Text>
              </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    textStyle : {
      fontSize : 25,
      fontWeight : 'bold',
      color : 'red'
    },
    textInput : {
        marginBottom : 20,
        marginTop : 20,
        marginLeft : 20,
        marginRight : 20,
        width : 200,
        height : 25,
        border : 'solid'
    },
    signUp : {
        border : 'solid',
        backgroundColor : "yellow",
       marginLeft : 20,
        width : 200,
        height : 25
    },
    text : {
        textAlign : 'center',
        textSize : 25,
        textFont : 'ariel',
        textWeight : 'bold'
    },
    login : {
        border : 'solid',
        backgroundColor : "yellow",
        marginTop : 20,
       marginLeft : 20,
        width : 200,
        height : 25
    
    }
})