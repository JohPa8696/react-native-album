/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
//
// // Create a Component
// AppRegistry.registerComponent(appName, () => App);

//////////////////////

// Import a library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// // Create a Component
const App = () => (
    <View style= {{flex: 1}}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
// Render it to the device

AppRegistry.registerComponent('albums', () => App);
