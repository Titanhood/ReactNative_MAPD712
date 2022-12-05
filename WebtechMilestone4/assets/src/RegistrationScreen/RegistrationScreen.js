import React, {useState} from "react"
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Registration.jpeg'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import {useNavigation} from '@react-navigation/native'

const RegistrationScreen = () => {

  const[givenName, setGivenName ] = useState('');
  const[lastName, setLastName ] = useState('');
  const[emailId, setEmailid ] = useState('');
  const[mobileNo, setMobileNo ] = useState('');
  const[occupation, setOccupation ] = useState('');
  const[organization, setOrganization ] = useState('');
  const[password, setPassword ] = useState('');
  const[repeatPassword, setPasswordRepeat ] = useState('');

  const {height} = useWindowDimensions();
  
  const navigation = useNavigation();

  
const onSignUpPressed = () => {
    console.warn("Sign Up Pressed");
  
    navigation.navigate('ConfirmEmail');
  }

  const onResetPressed = () => {
    console.warn(" Reset Form");
  }

  const onGoogleSignInPressed = () => { 
    console.warn("Sign In with google");
  }

  const onFacebookSignInPressed = () => { 
    console.warn("Sign In with Facebook");
  }
  const termsOfUsePressed = () => {
    console.warn("Terms and conditions clicked")
  }

  const privacyOnpressed = () => {
    console.warn("Privacy clicked")
  }

  const onSignInPressed = () => {
    console.warn('Sign in');

    navigation.navigate('SignIn');
    
  }

    return (
         <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
        <View style={styles.root} >
       
           <Image source={Logo} 
           styles={styles.logo, {height: height * 0.05}} 
           resizeMode="contain" />

           <CustomInput
           placeholder = "Given Name"
           value={givenName} 
           setValue={setGivenName}
           />

           <CustomInput
           placeholder = "Last Name"
           value={lastName} 
           setValue={setLastName}
           />
           <CustomInput
           placeholder = "Email Id"
           value={emailId} 
           setValue={setEmailid}
           />
           <CustomInput
           placeholder = "Mobile No"
           value={mobileNo} 
           setValue={setMobileNo}
           />
           <CustomInput
           placeholder = "Enter Organization"
           value={organization} 
           setValue={setOrganization}
           />
           <CustomInput
           placeholder = "Enter Occupation"
           value={occupation} 
           setValue={setOccupation}
           />
           


           <CustomButton text="Sign Up" 
           onPress={onSignUpPressed} 
           />

           <Text style={styles.text}>
           With Registration, you are confirmation accepatance of our{' '} 
           <Text style= {styles.link} onPress={termsOfUsePressed}>Terms of use </Text> and 
           <Text style= {styles.link} onPress={privacyOnpressed}> Privacy policy</Text>
           </Text>


           

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
            text="RESET" 
            onPress={onResetPressed} 
            type = 'TERTIARY'
            />

            <CustomButton 
            text="Have an Account? Sign In" 
            onPress={onSignInPressed} 
            type = 'TERTIARY'
            />


       
        </View>
        </ScrollView>
        /* 
           <CustomInput placeholder="Password" 
           value={password} 
           setValue={setPassword} 
           secureTextEntry={true}
           />

           <CustomInput placeholder="Repeat Password" 
           value={repeatPassword} 
           setValue={setPasswordRepeat} 
           secureTextEntry={true}
           /> 
           */
    );
      
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#FFFFFF',
  },
logo : {
  width: '20%',
  maxWidth: 50,
  maxheight : 50,
},
text:{
color:'gray',
marginVertical:10,
fontSize: 12,

},
link:{
  color: '#FDB075'
},




});
export default RegistrationScreen