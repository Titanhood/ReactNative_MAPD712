import React, {useState} from "react"
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native'

const SignInScreen = () => {

  const[username, setUsername ] = useState('');
  const[password, setPassword ] = useState('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {


    navigation.navigate('PatientList');
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password ");
    
    navigation.navigate('ResetPassword');
  }

  const onGoogleSignInPressed = () => { 
    console.warn("Sign In with google");
  }

  const onFacebookSignInPressed = () => { 
    console.warn("Sign In with Facebook");
  }

const onRegisterPressed = () => { 
    console.warn('Registration Page');

    navigation.navigate('Registration');
    
  }

    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
        <View style={styles.root} >
           <Image source={Logo} 
           styles={styles.logo, {height: height * 0.2}} 
           resizeMode="contain" />
           
             <Text style={[styles.textRecord,{fontStyle: 'italic', alignContent: 'center', paddingHorizontal:40}]}> 
              Be a proud part of community and serve with excellence. </Text>

            <Text style={[styles.textRecord,{fontStyle: 'italic', alignContent: 'center', paddingHorizontal:40}]}>Join the WeCare Community ! </Text>
           <CustomInput
           placeholder = "Username"
           value={username} 
           setValue={setUsername} 
           />
           <CustomInput placeholder="Password" 
           value={password} 
           setValue={setPassword} 
           secureTextEntry={true}
           />

           <CustomButton text="Sign In" 
           onPress={onSignInPressed} 
           />


            <CustomButton 
            text="Forgot Password?" 
            onPress={onForgotPasswordPressed} 
            type = 'TERTIARY'
            />

             <CustomButton text="Sign In with Google"  
           onPress={onGoogleSignInPressed} 
           bgColor ="#FAE9EA"
           fgColor="#DD4D44"
           />

            <CustomButton text="Sign In with Facebook"  
           onPress={onFacebookSignInPressed} 
           bgColor ="#E7EAF4"
           fgColor="#4765A9"
           />

           <CustomButton
            text="Dont have an account ? Create one" 
            onPress={onRegisterPressed} 
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
    backgroundColor:'#FFFFFF'
  },
logo : {
  width: '20%',
  maxWidth: 200,
  maxheight : 100,
},
textRecord: {
    alignItems: 'left',
    color: '#051c60',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 14,
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },



});
export default SignInScreen