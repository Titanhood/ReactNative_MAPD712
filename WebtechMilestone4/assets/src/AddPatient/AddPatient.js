import React, { useEffect,useState } from 'react';
import axios from "axios";
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


const AddPatient = () => {
  
  const { height } = useWindowDimensions();
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

  const client = axios.create({
    baseURL: "http://localhost:3000/api/post" 
  });

  const navigation = useNavigation();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(ptid,name,age,time,dob,condition,oxygenLevel,bloodPressure,sugar);
  };
  const addPosts = (ptid,name,time,age,dob,condition,oxygenLevel,bloodPressure,sugar) =>{
    client
    .post('',{
      ptid : ptid,
      name: name,
      age : age,
      time: time,
      dob : dob,
      condition : condition,
      oxygenLevel : oxygenLevel,
      bloodPressure : bloodPressure,
      sugar : sugar,
    })
    .then((response)=>{
      setPosts([response.data, ...posts]);
    });
    setPatientPTID('');
    setPatientName('');
    setPatientDOB('');
    setPatientAge('');
    setPatientTime('');
    setPatientCondition('');
    setPatientSugar('');
    setbloodPressure('');
    setoxygenLevel('');

} 

  function onSavePatientPressed() {
    console.warn('Add Patient Pressed');
    navigation.navigate('PatientList');
  }
  const userprofilePressed = () => {
    console.warn('Entering into User Profile!');
    navigation.navigate('UserProfile');
  };

  const onMorePressed = () => {

  };
  const onlogoutPressed = () => {
    console.warn('Successfully Logged Out!');
    navigation.navigate('SignIn');
  };

  const resetFormPressed = () => {
    console.warn('Form has been reset Successfully!');
    setPatientPTID('');
    setPatientName('');
    setPatientDOB('');
    setPatientAge('');
    setPatientTime('');
    setPatientCondition('');
    setPatientSugar('');
    setbloodPressure('');
  };

  const onBackButtonPressed = () => {
    navigation.navigate('PatientList');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} backgroundColor="#FFFFFF">
      <View style={styles.root}>
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={[styles.textRecord,{width: '50%', height:20}]}> Welcome{' '} <Text style= {styles.link} onPress={userprofilePressed}> Helen, </Text></Text>
       <Text style={[styles.textRecord,{width: '40%', height:20}]}> Profile : <Text style= {styles.link} onPress={userprofilePressed}>Nurse</Text> </Text>

      </View>
        <Text style={styles.title}> Add Patient Records </Text> 
        <Text>{''}</Text>

        <Image source={Logo}
           styles={styles.logo, {height: height * 0.01}} 
           resizeMode="contain" />


{/* Patient 1 Details   */}

          {/* Patient declaring id starts   */}
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            
            value={'ID:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientPTID}
            value={ptid}
             editable={true}/>
        </View>
        {/* Patient declaring id ends   */}


          {/* Patient declaring name starts   */}
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            
            value={'Name:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientName}
            value={name}
             editable={true}/>
        </View>
        {/* Patient declaring name ends   */}

        {/* Patient declaring time starts   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Time:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientTime}
            value={time}
             editable={true}/>
        </View>
        {/* Patient declaring time ends   */}

        {/* Patient declaring dob starts   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'DOB:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientDOB}
            value={dob}
            keyboardType='numberpad'
             editable={true}/>
          </View>
          {/* Patient declaring dob ends  */}


         {/* Patient declaring Age starts   */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Age:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientAge}
            value={age}
            keyboardType='numberpad'
             editable={true}/>
          </View>
          {/* Patient declaring Age stops   */}

          {/* Patient declaring sugar starts   */}

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Sugar:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setPatientSugar}
            value={sugar}
            keyboardType='numberpad'
             editable={true}/>
          </View>
          {/* Patient declaring sugar ends   */}

          {/* Patient declaring blood pressure starts   */}

           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '40%'}]}
            value={'Blood Pressure:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'60%'}]}
            onChangeText={setbloodPressure}
            value={bloodPressure}
            keyboardType='numberpad'
             editable={true}/>
          </View>
        
           {/* Patient declaring blood pressure ends   */}

              {/* Patient declaring oxygen starts   */}


          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '20%'}]}
            value={'Oxygen:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'80%'}]}
            onChangeText={setoxygenLevel}
            value={oxygenLevel}
            keyboardType='numberpad'
             editable={true}/>
          </View>
              {/* Patient declaring oxygen stops   */}


              {/* Patient declaring Condition starts   */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={[styles.textRecord,{width: '25%'}]}
            value={'Condition:'}
            editable={false}/>

          <TextInput
            style={[styles.text,{width:'75%'}]}
            onChangeText={setPatientCondition}
            value={condition}
             editable={true}/>
          </View>

        <CustomButton text="More" fgColor="#4765A9"onPress={onMorePressed} type="FORTH" />

         <Text>{''}</Text> 
         <Text>{''}</Text>
         
        { !isPending && <CustomButton text="Save Patient" 
        onPress={handleSubmit}
           />}
        {isPending && <CustomButton>"Saving Patient..." </CustomButton>}

        <CustomButton
          text="Reset Form"
          onPress={resetFormPressed}
          bgColor="#FFFFFF"
          fgColor="#4765A9"
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <CustomButton text="Back" onPress={onBackButtonPressed} type="TERTIARY" />
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
export default AddPatient;
