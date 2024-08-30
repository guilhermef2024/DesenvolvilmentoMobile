import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Calculadora from './Telas/Calculadora';

export default function App() {
  
  return (
      <Calculadora/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEF8F4',
    alignItems: 'Center',
    justifyContent: 'Center',
    
  },
});
