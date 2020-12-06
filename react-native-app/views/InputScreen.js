import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function App()  {

const [newTask, setNewTask] = useState('');
const taskInputHandler = (enteredText) => {
  setNewTask(enteredText);
};


const [appTasks, appTask] = useState([]);
const addTaskHandler = () =>{
   appTask(currentTask => [...currentTask, newTask]);
   console.log(newTask);
 };


  return (
    <View style= {styles.container}>
       
      <View style = {styles.inputContainer}>
       
        <TextInput
          placeholder = "Új feladat"
          style = {styles.input}
          onChangeText = {taskInputHandler}
          value = {newTask}
        />
       
        <Button title = "+"
          onPress = {addTaskHandler}
        /> 
      </View>
      <View>
        {appTasks.map((task) => <Text>{task}</Text>)}
      </View> 
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 50
  },
  input :{
    width: 300,
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    top:0
  },
 
});