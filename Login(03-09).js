import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [senha, setSenha ] = useState('') 
  const [resultado, setResultado ] = useState(true) //boleano
  const ValidaLogin = function (){
    if (email == 'admin@gmail.com' && senha == '1234') {
      var nomeCerto = 'Guilherme'
      setResultado (true)
      console.log ('Login Correto')
      navigation.navigate('CalculaNota', {nome: nomeCerto, idade: 27})
    } else {
      setResultado(false)
console.log ('Incorreto')
 }
  }   
  return (
    <View style={styles.container}>
      {resultado?null:<Text>Usuario errou email ou senha!</Text>}
      <TextInput placeholder='Email' onChangeText={(text)=>setEmail(text)} />
      <TextInput placeholder='Senha' onChangeText={(text)=>setSenha(text)} />
        <Button title='Entrar' onPress={()=> ValidaLogin()} />
       <StatusBar style="auto" />
    </View>
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
