import React, { useState, useEffect } from 'react';
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
import 'localstorage-polyfill'; 
import CustomButton from '../../../components/CustomButton/CustomButton';
import Logo from '../../images/UserImage.png'
import {useNavigation, useRoute} from '@react-navigation/native';
import Navigation from '../navigation';
import axios from 'axios';

const EditPatient = () => {
  const { height } = useWindowDimensions();
  const [patient1Id, setPatient1Id] = useState('');
  const [patientDOB, setPatient1DOB] = useState('');
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

  const onSubmitpressed = () =>{
    axios.patch(`http://localhost:3000/api/patch/${route.params.id}`,{
      ptid,
      name,
      time,
      dob,
      age,
      condition,
      sugar,
      bloodPressure,
      oxygenLevel
    })

    console.warn('Patient Data changed successfully.');
    navigation.navigate('PatientList');

  }
  useEffect(() => {
    setPatientPTID(localStorage.getItem('ptid'));
    setPatientName(localStorage.getItem('name'));
    setPatientTime(localStorage.getItem('time'));
    setPatientDOB(localStorage.getItem('dob'));
    setPatientAge(localStorage.getItem('age'));
    setPatientCondition(localStorage.getItem('condition'));
    setPatientSugar(localStorage.getItem('sugar'));
    setbloodPressure(localStorage.getItem('bloodPressure'));
    setoxygenLevel(localStorage.getItem('oxygenLevel'));
  }, [])

  const onBackPressed = () => {
    console.warn('Add Patient Pressed');
    navigation.navigate('PatientList');
  };
  const userprofilePressed = () => {
    console.warn('UserProfilePressed');
    navigation.navigate('UserProfile');
  };

  const onEditPressed = () => {
    setPatientPTID(route.params.ptid);
    setPatientName(route.params.name);
    setPatientDOB(route.params.dob);
    setPatientAge(route.params.age);
    setPatientTime(route.params.time);
    setPatientCondition(route.params.condition);
    setPatientSugar(route.params.sugar);
    setbloodPressure(route.params.bloodPressure);
    setoxygenLevel(route.params.oxygenLevel);

  };
   
  const onlogoutPressed = () => {
    console.warn('Successfully Logged Out!');

    navigation.navigate('SignIn');
  };

  const resetFormPressed = () => {
    console.warn('resetForm Pressed');
  };

  const onMorePressed = () => {
    console.warn('Application Is In Development Phase !!');
    
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
        <Text style={styles.title}> Edit Patient Records </Text> 
        <Text>{''}</Text>

         <Image source={Logo}
           styles={styles.logo, {height: height * 0.01}} 
           resizeMode="contain" />


{/* Patient 1 Details   */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'PT ID:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
            placeholder={route.params.ptid}
            value={ptid}
            onChangeText={setPatientPTID}
            //onChange ={(e)=>{setPatientName(e.target.value)}}
             editable={true}/>

             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Name:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
            placeholder={route.params.name}
            value={name}
            onChangeText={setPatientName}
            //onChange ={(e)=>{setPatientName(e.target.value)}}
             editable={true}/>

             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}

            value={'Time:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
           // onChangeText={setData(time)}
           placeholder={route.params.time}
            onChangeText={setPatientTime}
            value={time}
            
            //onChange ={(e)=>{setPatientTime(e.target.value)}}
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatientDOB}
            value={'DOB:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
         //   onChangeText={setData(dob)}
            placeholder={route.params.dob}
            value={dob}
            onChangeText={setPatientDOB}
           // onChange ={(e)=>{setPatientDOB(e.target.value)}}
            keyboardType='numberpad'
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
          </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
           onChangeText={setPatientAge}
            value={'Age:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
           // onChangeText={setData(age)}
            placeholder={route.params.age}
            value={age}
            onChangeText={setPatientAge}
            //onChange ={(e)=>{setPatientAge(e.target.value)}}
            keyboardType='numberpad'
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
          </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setPatientSugar}
            value={'Sugar:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
          //  onChangeText={setData(sugar)}
            placeholder={route.params.sugar}
            value={sugar}
            onChangeText={setPatientSugar}
            //onChange ={(e)=>{setPatientSugar(e.target.value)}}
            keyboardType='numberpad'
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
          </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '40%'}]}
            value={'Blood Pressure:'}
            
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'35%'}]}
          //  onChangeText={setData(bloodPressure)}
            placeholder={route.params.bloodPressure}
            value={bloodPressure}
            onChangeText={setbloodPressure}
            //onChange ={(e)=>{setbloodPressure(e.target.value)}}
            keyboardType='numberpad'
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
          </View>
          

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            onChangeText={setoxygenLevel}
            value={'Oxygen:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'55%'}]}
        //    onChangeText={setData(bloodPressure)}
            placeholder={route.params.oxygenLevel}
            value={oxygenLevel}
            onChangeText={setoxygenLevel}
            //onChange ={(e)=>{setoxygenLevel(e.target.value)}}
            keyboardType='numberpad'
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
          </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '25%'}]}
            onChangeText={setPatientCondition}
            value={'Condition:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'50%'}]}
          //  onChangeText={setData(condition)}
            placeholder={route.params.condition}
            value={condition}
            onChangeText={setPatientCondition}
            //onChange ={(e)=>{setPatientCondition(e.target.value)}}
             editable={true}/>
             <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FORTH"/>
          </View>

        <CustomButton text="More" fgColor="#4765A9"onPress={onMorePressed} type="FORTH" />

         <Text>{''}</Text> 
         <Text>{''}</Text>
         <Text>{''}</Text>

         <CustomButton text="Edit" fgColor="#4765A9"
          onPress={onEditPressed} type="FIFTH"/>
         
        <CustomButton text="Save Patient" onPress={onSubmitpressed}
           />

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
export default EditPatient;
