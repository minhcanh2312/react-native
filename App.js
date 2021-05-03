import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Signin from './components/Signin'
import Signup from './components/Signup'
import { 
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <Signin /> */}
      <Signup />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20
  }
})