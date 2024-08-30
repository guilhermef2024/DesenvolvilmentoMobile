import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function Calculadora() {
    const[Prova, setProva] = useState(0)
    const[Trabalho, setTrabalho] = useState(0)
    const[Resultado, setResultado] = useState(0)
    const calcular = function() {
        setResultado ((Prova*0.7)+(Trabalho*0.3))

    }
  return (

    <View style={styles.container}>
      <Text>Minha Calculadora</Text>
      <TextInput placeholder='Nota da Prova' onChangeText={(text)=>setProva(text)} />
      <TextInput placeholder='Nota do Trabalho' onChangeText={(text)=>setTrabalho(text)} />
        <Button title='Calcular' onPress={()=>calcular()} />
        <Text>A média do aluno é: {Resultado}</Text>
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
