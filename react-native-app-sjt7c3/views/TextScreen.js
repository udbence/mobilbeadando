import React, { Component } from "react";
import { Text, ScrollView, SafeAreaView, StyleSheet,Image} from "react-native";

export default class ProfileScreen extends Component {
    static navigationOptions = {
      title: 'What is React Native?',
    };

    state={
      titleText : "What is React Native?",
      bodyText : "React Native is a JavaScript framework used for developing a real, native mobile application for iOS and Android. It uses only JavaScript to build a mobile application. It is like React, which uses native component rather than using web components as building blocks.",
            titleText2:"What are React Native apps?",
      bodyText2:"React Native apps are not web application. They are running on a mobile device, and it does not load over the browser. It is also not a Hybrid app that builds over Ionic, Phone Gap, etc. that runs over WebView component. React Native apps are the real native app, the JavaScript code stays as JavaScript, and they run in some extra thread by the compiled app. The user interface and everything are compiled to native code.",

        titleText3:"What are React Native apps?",
      bodyText3:"React Native apps are not web application. They are running on a mobile device, and it does not load over the browser. It is also not a Hybrid app that builds over Ionic, Phone Gap, etc. that runs over WebView component. React Native apps are the real native app, the JavaScript code stays as JavaScript, and they run in some extra thread by the compiled app. The user interface and everything are compiled to native code."


    };


    render() {
      return (
        <SafeAreaView style={styles.container} >
          <ScrollView >
            <Text style = {styles.title}>{this.state.titleText} </Text>
            <Text style = {styles.body}>{this.state.bodyText} </Text>
            <Text style = {styles.title2}>{this.state.titleText2} </Text>
            <Text style = {styles.body2}>{this.state.bodyText2} </Text>
            <Text style = {styles.title3}>{this.state.titleText2} </Text>
            <Text style = {styles.body3}>{this.state.bodyText2} </Text>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  body:
  {
    marginTop:2,
    fontSize: 17
  },
  title2: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  body2:
  {
    marginTop:2,
    fontSize: 17
  },
    title3: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
    body3:
  {
    marginTop:2,
    fontSize: 17
  }

});