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
import axios from 'axios';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Logo from '../../../assets/images/UserImage.png'
import {useNavigation, useRoute} from '@react-navigation/native';
import Navigation from '../navigation';

const ViewPatientRecord = () => {
  const { height } = useWindowDimensions();
  const [patient1, setPatient1] = useState('');
  const[posts,setPosts] = useState([]);
  const [id, setPatientID] = useState('');
  const [ptid, setPatientPTID] = useState('');
  const [name, setPatientName] = useState('');
  const [patientId, setPatient] = useState('');
  const[time, setPatientTime] = useState('');
  const [dob, setPatientDOB] = useState('');
  const [age, setPatientAge] = useState('');
  const[condition, setPatientCondition] = useState('');
  const[sugar, setPatientSugar] = useState('');
  const[bloodPressure, setbloodPressure] = useState('');
  const[oxygenLevel, setoxygenLevel] = useState('');
  const [isPending, setIsPending] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const client = axios.create({
    baseURL: "http://localhost:3000/api/delete/"
  });

  const onAddPatientPressed = () => {
    console.warn('Add Patient Pressed');
  };
  const userprofilePressed = () => {
    console.warn('UserProfilePressed');
    navigation.navigate('UserProfile')
  };

  const onDeletePressed = async (id) => {
    await client.delete(`${route.params.id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
    console.warn('Patient has been deleted');
    navigation.navigate('PatientList');
    
  };
  



  const onPatientProfilePressed = () => {
    console.warn('Patient Profile Pressed');
  };
const onMorePressed = () => {
    console.warn('Application Is In Development Phase !!');
  };

  const onBackPressed = () => {

    navigation.navigate('PatientList');
  };

  const onlogoutPressed = () => {
    console.warn('Successfully Logged Out!');

    navigation.navigate('SignIn');
  };
const onEditPAtientPressed = () => {
    console.warn('Click on Edit Button to amend ');
    navigation.navigate('EditPatient');
  };
  const resetFormPressed = () => {
    console.warn('resetForm Pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
        <Text style={styles.title}> Patient Profile </Text> 
        <Text>{''}</Text>

         <Image source={Logo} 
           styles={styles.logo, {height: height * 0.01}} 
           resizeMode="contain" />


{/* Patient 1 Details   */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatient1}
            value={'ID:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientPTID}
            value={route.params.ptid}
             editable={false}/>
        </View>
         
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Name:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientName}
            value={route.params.name}
             editable={false}/>
        </View>
       

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Time:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientTime}
            value={route.params.time}
            
             editable={false}/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'DOB:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientDOB}
            value={route.params.dob}
             editable={false}/>
          </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Age:'}
            editable={false}/>

          <TextInput
           style={[styles.text,{width:'80%'}]}
           value={route.params.age}
           onChangeText={setPatientAge}
            editable={false}/>
            
          </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Sugar:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientSugar}
            value={route.params.sugar}
            keyboardType='numberpad'
             editable={false}/>
          </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '35%'}]}
            value={'Blood Pressure:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'65%'}]}
            onChangeText={setbloodPressure}
            value={route.params.bloodPressure}
            keyboardType='numberpad'
             editable={false}/>
          </View>
          

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Oxygen:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setoxygenLevel}
            value={route.params.oxygenLevel}
            keyboardType='numberpad'
             editable={false}/>
             
          </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '25%'}]}
            value={'Condition:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'75%'}]}
            onChangeText={setPatientCondition}
            value={route.params.condition}
             editable={false}/>
          </View>

        <CustomButton text="More" fgColor="#4765A9"onPress={onMorePressed} type="FORTH" />
        
         <Text>{''}</Text>
         <CustomButton text="Delete Patient" onPress={onDeletePressed} type="TERTIARY" />
        <CustomButton text="Edit Patient" 
        onPress={()=>( navigation.navigate("EditPatient",{
            id : route.params.id,
            ptid : route.params.ptid,
            name : route.params.name,
            dob : route.params.dob,
            time : route.params.time,
            sugar : route.params.sugar,
            condition : route.params.condition,
            bloodPressure : route.params.bloodPressure,
            age : route.params.age,
            oxygenLevel : route.params.oxygenLevel}) )}/>

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
    color: 'gray',
    alignContent: 'right',
    marginVertical: 10,
    fontSize: 12,
    alignItems: 'left',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    width: '25%',
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
  link: {
    color: '#fd8375',
  },
});
export default ViewPatientRecord;
