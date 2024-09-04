import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Calculadora from './Telas/Calculadora';
import Login from'./Telas/Login';
import { createStackNavigator } from '@react-navigation/stack';
import{NavigationContainer} from '@react-navigation/native'; 
const Stack = createStackNavigator()
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator InitialRouteName='Login'>
      <Stack.Screen name="Login" component={Login}options={{headerShown: false}} />
      <Stack.Screen name="CalculaNota" component={Calculadora}>     
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
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
