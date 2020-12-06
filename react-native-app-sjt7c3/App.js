import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { WebView } from 'react-native-webview';
import {NavigationContainer} from "@react-navigation/native";
import TextScreen from "./views/TextScreen";
import HomeScreen from "./views/HomeScreen";
import InputScreen from "./views/InputScreen";
import Page from "./views/Page";
import { createStackNavigator } from "@react-navigation/stack";
 

const SecondRoute = () => (
  <WebView source={{ uri: 'http://www.google.com/' }} />
);




export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Welcome' },
      { key: 'second', title: 'Prolog' },
      { key: 'third', title: 'WebPage' },
      { key: 'fourth', title: 'Tasks' },
    ],
  };


  render() {
    return (
      <TabView
      style={styles.dunno}
        navigationState={this.state}
        renderScene={SceneMap({
          first: HomeScreen,
          second: TextScreen,
          third: SecondRoute,
          fourth: InputScreen,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  dunno:{
    paddingTop:35,
  },
});

