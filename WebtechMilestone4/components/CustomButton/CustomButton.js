import React from 'react'
import {View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (

    <Pressable 
    onPress={onPress} 
    style={[styles.container, 
    styles[`container_${type}`],
    bgColor ? {backgroundColor: bgColor} : {}
    ]}>


    <Text 
    style = {[styles.text, 
    styles[`text_${type}`],
    fgColor? {color: fgColor} : {}
    ]}>{text}</Text>


    </Pressable>
  );
};

const styles = StyleSheet.create({
container: {

  width: '80%',

  padding: 15,
  marginVertical: 5,

  alignItems: 'center',
  borderRadius: 5,

},

container_PRIMARY: {

backgroundColor: '#3b71f3',

},

container_SECONDARY: {
  borderColor: '#3b71f3',
  borderWidth: 2,
},

container_TERTIARY: {},

container_FORTH:
{
  borderColor: '#3b71f3',
  borderWidth: 2,
  padding: 10,
  height: 40,
  marginVertical: 10,
  borderRadius: 5,
  width:'25%',
  fontSize: 12,
},
container_FIFTH:
{
  justifyContent:"center",
  borderColor: '#3b71f3',
  borderWidth: 2,
  padding: 10,
  height: 40,
  marginVertical: 10,
  borderRadius: 5,
  fontSize: 12,
},


text: {
  fontWeight: 'bold',
  color: 'white',
  alignItems: 'center'
},
text_TERTIARY  : {
  color: 'gray'
},

text_SECONDARY: {
  color:'#3b71f3'
},

});

export default CustomButton;