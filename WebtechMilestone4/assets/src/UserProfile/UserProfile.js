import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Logo from '../../../assets/images/UserImage.png'
import {useNavigation} from '@react-navigation/native';


const UserProfile = () => {
  const { height } = useWindowDimensions();
  const [patient1, setPatient1] = useState('');
  const [patientId, setPatient1Id] = useState('');
  const [patientDOB, setPatient1DOB] = useState('');
  const [patient2, setPatient2] = useState('');
  const [patient3, setPatient3] = useState('');
  const [patient4, setPatient4] = useState('');
  const [patient5, setPatient5] = useState('');
  const [patient6, setPatient6] = useState('');
  const [patient7, setPatient7] = useState('');
  const [patient8, setPatient8] = useState('');
  const [patient9, setPatient9] = useState('');
  const [patient10, setPatient10] = useState('');


  const navigation = useNavigation();

  const onSavePatientPressed = () => {
    console.warn('Changes has been Saved!');
    navigation.navigate('PatientList');
  };
  const onBackPressed = () => {
    console.warn('Add Patient Pressed');
    navigation.navigate('PatientList');
  };
  const userprofilePressed = () => {
    console.warn('UserProfilePressed');
  };

  const onPatientProfilePressed = () => {
    console.warn('Patient Profile Pressed');
  };
  const onlogoutPressed = () => {
    console.warn('Successfully Logged Out!');
    navigation.navigate('SignIn');
  };

  const editprofilePressed = () => {
    console.warn('Edit profile Clicked');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}  backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
      <Text>{''}</Text>
        <Text style={styles.title}> Edit Profile </Text> 

         <Image source={Logo} 
           styles={styles.logo, {height: height * 0.01}} 
           resizeMode="contain" />
           <Text>{''}</Text>
           <Text>{''}</Text>

{/* HEADER FOR LIST OF PATIENTS  */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.textRecord,{width: '33.33%'}]}>First Name</Text>
          <Text style={[styles.textRecord,{width: '33.33%'}]}>Middle Name</Text>

          <Text style={[styles.textRecord,{width: '33.33%'}]}>Last Name</Text>
        </View>

{/* Patient 1 Details   */}
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent:'center' }}>
          <TextInput style={[styles.text,{width: '33.33%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9'}]}
            onChangeText={setPatient1}
            value={'Helen'}
            editable={true}/>

          <TextInput style={[styles.text,{width: '33.33%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9'}]}
            onChangeText={setPatient1Id}
            value={''}
           editable={true}/>

          <TextInput style={[styles.text,{width: '33.33%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9'}]}
            value={'Mathews'}
             editable={true}/>

        </View>
        <Text>{''}</Text> 
        <Text>{''}</Text>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.textRecord,{width: '50%', alignContent:'center'}]}>Email Address</Text>
          <Text style={[styles.textRecord,{width: '50%'}]}>Mobile No</Text>

        </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent:'center' }}>
          <TextInput style={[styles.text,{width: '50%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9',paddingHorizontal:5}]}
            onChangeText={setPatient1}
            value={'Helenmath@gmail.com'}
            editable={true}/>

          <TextInput style={[styles.text,{width: '50%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9'}]}
            value={'918-678-1345'}
             editable={true}/>

        </View>

          <Text>{''}</Text> 
        <Text>{''}</Text>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.textRecord,{width: '50%', alignContent:'center'}]}>Occupation</Text>
          <Text style={[styles.textRecord,{width: '50%'}]}>Organization</Text>

        </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent:'center' }}>
          <TextInput style={[styles.text,{width: '50%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9',paddingHorizontal:20}]}
            onChangeText={setPatient1}
            value={'Nurse'}
            editable={true}/>

          <TextInput style={[styles.text,{width: '50%', borderWidth:1, borderRadius: 2, borderColor:'#4765A9'}]}
            value={'Hospital'}
             editable={true}/>

        </View>

        <Text>{''}</Text>
        <Text>{''}</Text>
        <Text>{''}</Text>

        <CustomButton text="Save Changes" onPress={onSavePatientPressed}/>

       
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CustomButton text="Back" onPress={onBackPressed} type="TERTIARY" />
          <CustomButton text="Logout" onPress={onlogoutPressed} type="TERTIARY" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '20%',
    maxWidth: 50,
    maxheight: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: '#403d3d',
    alignContent: 'center',
    marginVertical: 5,
    fontSize: 14,
    alignItems: 'left',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    width: '50%',
  },
  textRecord: {
    alignContent:'Center',
    justifyContent:'center',
    color: '#051c60',
    fontWeight: 'bold',
    fontSize: 14,
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 13,
  },
  link: {
    color: '#fd8375',
  },
});
export default UserProfile;
