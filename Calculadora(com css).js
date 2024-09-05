import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Calculadora({route}) {
  var nome= route.params.nome
  const navigation = useNavigation()
    const[Prova, setProva] = useState(0)
    const[Trabalho, setTrabalho] = useState(0)
    const[Resultado, setResultado] = useState(0)
    const calcular = function() {
        setResultado ((Prova*0.7)+(Trabalho*0.3))

    }
  return (

    <View style={styles.container}>
      <Text style={styles.textoGrande} >Olá, {nome}. Sua idade é {route.params.idade}</Text>
      <Text style={[styles.textoGrande, styles.textoNegrito]} >Minha Calculadora</Text>
      <TextInput placeholder='Nota da Prova' onChangeText={(text)=>setProva(text)} />
      <TextInput placeholder='Nota do Trabalho' onChangeText={(text)=>setTrabalho(text)} />
        <Button title='Calcular' onPress={()=>calcular()} />
        <Text>A média do aluno é: {Resultado}</Text>
        <Button title='Voltar' onPress={()=>{navigation.goBack()}}/>
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
  textoGrande: {
    fontSize: 30,
    color:'red'
  },

  textoNegrito: {
    fontWeight: 'bold',
    color:'blue'
  }

});
