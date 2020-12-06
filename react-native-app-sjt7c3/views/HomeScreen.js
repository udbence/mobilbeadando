import React, { Component } from "react";
import { Text, ScrollView, SafeAreaView, StyleSheet,Image,View} from "react-native";


export default class ProfileScreen extends Component {

    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.innerText}> Welcome to React Native</Text>
        <Image style={styles.logo} source={require('../images/react-native.png')} />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems:"center",
    margin:"auto",
  },

  innerText: {
    fontSize: 30,
    marginBottom:30
    
  },
    logo: {
    width: 450,
    height: 200,
  },
});