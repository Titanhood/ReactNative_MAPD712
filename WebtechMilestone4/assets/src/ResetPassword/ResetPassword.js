import React, {useState} from "react"
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView, TextInput, Button } from 'react-native'
import Logo from '../../../assets/images/Lock-icon.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native'

const ResetPassword = () => {

    const navigation = useNavigation();

  const[emailId, setEmailid ] = useState('');
  const[newPassword, setNewPassword] = useState(false);
  const [code, setNewcode] = useState(false);
  const updateStateForCode = () => {
    //Handler to enable of disable TextInput
    //Make TextInput Enable/Disable
    setNewcode(!code);
  }
   const updateStateForPassword = () => {
    //Handler to enable of disable TextInput
    //Make TextInput Enable/Disable
    setNewPassword(!newPassword);

  }


  
const onconfirmPressed = () => {
    console.warn("Sign Up Pressed");
  }
  const onVerifyPressed = () => {
    console.warn("Verify Pressed");
  }

  const onResendPressed = () => {
    console.warn("Resend code Pressed");
  }

  const onSignInPressed = () => {
    console.warn("Sign in");

    navigation.navigate('SignIn');
    
  }
  const {height} = useWindowDimensions();

    return (
         <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
        <View style={styles.root} >
        
        <Image source={Logo} 
           styles={styles.logo, {height: height * 0.5}} 
           resizeMode="contain" />
       
           <Text style={styles.title}> Reset Your Password </Text>
           <Text style={styles.text, {fontStyle:"italic", alignContent:"center", fontSize:11, }}>Please enter the email address associated with WeCare profile. We will send you an email which will allow you to reset your password.</Text>

           <Text>{' '}</Text>


           <CustomInput
           placeholder = "Enter your Email Address"
           value={emailId} 
           setValue={setEmailid}
           />
           
           <Text>{' '}</Text>

           <CustomButton text="Confirm" 
           onPress={onconfirmPressed} 
           onPress={updateStateForCode}
           />

           
          <Text>{' '}</Text>

           
           <TextInput
          placeholder={code ? 'Code' : 'Code'}
          underlineColorAndroid="transparent"
          style={[
            styles.textInputStyle,
            {
              backgroundColor: code ? 'white' : '#d8d8d8',
              height: 50,
               width: '100%',
               borderColor:'#e8e8e8',
               borderWidth: 1,
               borderRadius: 5,
               paddingHorizontal: 10,
               marginVertical: 7,
              //updating the border color on enable/disable
            },
          ]}
          //editable is used to make TextInput enable/disable
          editable={code}
         // setValue={setNewcode}
         // value={code}
        />
         <Text>{' '}</Text>


        <CustomButton text="Verify" 
           onPress={onVerifyPressed} 
           onPress={updateStateForPassword}
            type = 'SECONDARY'
           />


            <Text>{' '}</Text>


        <TextInput
          placeholder={newPassword ? 'Enter New Password' : 'Enter New Password'}
          underlineColorAndroid="transparent"
          style={[
            styles.textInputStyle,
            {
              borderColor: newPassword ? 'black' : 'red',
              backgroundColor: newPassword ? 'white' : '#d8d8d8',
              height: 50,
               width: '100%',
               borderColor:'#e8e8e8',
               borderWidth: 1,
               borderRadius: 5,
               paddingHorizontal: 10,
               marginVertical: 7,
              //updating the border color on enable/disable
            },
          ]}
          editable={newPassword}
          setValue={setNewPassword}
          //editable is used to make TextInput enable/disable
        />
            <Text>{' '}</Text>
      
           <CustomButton text="Submit" 
           onPress={onconfirmPressed} 
            type = 'SECONDARY'
           />


            <CustomButton 
            text="Back to Sign In" 
            onPress={onSignInPressed} 
            type = 'TERTIARY'
            />
        </View>
        </ScrollView>
    );
      
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#FFFFFF',
  },
text:{
color:'gray',
marginVertical:10,
fontSize: 12,
},
logo : {
  width: '40%',
  maxWidth: 100,
  maxheight : 100,
},
title:{
  fontSize: 24,
  fontWeight: 'bold',
  color: '#051c60',
  margin: 10,
},
 textInputStyle: {
    height: 90,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },

});
export default ResetPassword