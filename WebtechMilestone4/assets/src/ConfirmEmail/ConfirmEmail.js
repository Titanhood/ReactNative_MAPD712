import React, {useState} from "react"
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import Logo from '../../../assets/images/Registration.jpeg'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native'


const ConfirmEmail = () => {
  
    const navigation = useNavigation();
  

  const[emailId, setEmailid ] = useState('');
  const[code, setCode ] = useState('');

 
const onconfirmPressed = () => {
    console.warn('Confirm Pressed');
    navigation.navigate('PatientList');
  }

  const onResendPressed = () => {
    console.warn("Resend code Pressed");
  }

  const onSignInPressed = () => {
    console.warn("Sign in");

    navigation.navigate('SignIn');
  }

    return (
         <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
        <View style={styles.root} >
       
           <Text style={styles.title}> Confirm Your Email </Text>
           
           
           
           <TextInput 
          style={[
            styles.text,
            {
              height: 50, 
              borderColor:'#e8e8e8',
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: 'white',
              width: '100%',
              paddingHorizontal: 10,
            },
          ]}
           value={code} 
           onChangeText={setCode}
           placeholder="Verify your Email"
           keyboardType="numeric"
           />





           <CustomButton text="Confirm" 
           onPress={onconfirmPressed} 
           />

            <CustomButton 
            text="resend Code" 
            onPress={onResendPressed} 
            type = 'SECONDARY'
            />


            <CustomButton 
            text="Have an Account? Sign In" 
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

title:{
  fontSize: 24,
  fontWeight: 'bold',
  color: '#051c60',
  margin: 10,
},

});
export default ConfirmEmail