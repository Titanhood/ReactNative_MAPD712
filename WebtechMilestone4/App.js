/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';
import SignInScreen from './assets/src/SignInScreen/SignInSCreen'
import RegistrationScreen from './assets/src/RegistrationScreen/RegistrationScreen'
import ConfirmEmail from './assets/src/ConfirmEmail/ConfirmEmail'
import ResetPassword from './assets/src/ResetPassword/ResetPassword'
import PatientListScreen from './assets/src/PatientListScreen/PatientListScreen'
import EditPatient from './assets/src/EditPatient/EditPatient'
import AddPatient from './assets/src/AddPatient/AddPatient'
import UserProfile from './assets/src/UserProfile/UserProfile'
import ViewPatientRecord from './assets/src/ViewPatientRecord/ViewPatientRecord'
import Navigation from './assets/src/navigation'

const App = () => { 
  return (
    <SafeAreaView style={styles.root}>
    
    <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ 
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
});

export default App;
