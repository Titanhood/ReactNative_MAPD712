import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import SignInScreen from '../SignInScreen/SignInSCreen'
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'
import ConfirmEmail from '../ConfirmEmail/ConfirmEmail'
import ResetPassword from '../ResetPassword/ResetPassword'
import PatientListScreen from '../PatientListScreen/PatientListScreen'
import EditPatient from '../EditPatient/EditPatient'
import AddPatient from '../AddPatient/AddPatient'
import UserProfile from '../UserProfile/UserProfile'
import ViewPatientRecord from '../ViewPatientRecord/ViewPatientRecord'






const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ cardStyle: {
            backgroundColor: '#FFFFFF'},headerShown: false}}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="PatientList" component={PatientListScreen} />
    <Stack.Screen name="EditPatient" component={EditPatient} />
    <Stack.Screen name="AddPatient" component={AddPatient} />
    <Stack.Screen name="UserProfile"  component={UserProfile} />
    <Stack.Screen name="ViewPatientRecord" component={ViewPatientRecord} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;