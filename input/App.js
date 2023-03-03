import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function summ()
  {
    const result = parseFloat(num1) + parseFloat(num2);

    getElementById('res').value = result;

    return <Text style={styles.titulo}>{result}</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Soma de Valores </Text>
      <Text style={styles.titulo} id='res' value=''></Text>

      <Text style={styles.label}>Primerio Valor:</Text>
      <TextInput
       style={styles.input}
       KeyboardType='numeric'
       placeholder='Digite um número'
       onChangeText={(num1)=>setNum1(num1)}
       />

      <Text style={styles.label}>Primerio Valor:</Text>
      <TextInput 
      style={styles.input} 
      KeyboardType='numeric' 
      placeholder='Digite um número'
      onChangeText={(num2)=>setNum2(num2)}
      />

      <TouchableOpacity style={styles.btn} onPress={summ}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#212121',
    color: '#fff',
    padding: 20,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  input: {
    backgroundColor: '#212121',
    borderBottomWidth: 1,
    borderColor: '#fff',
    margin: 20,
    padding: 10,
    fontSize: 18,
    color: '#fff'
  },
  btn:{
    textAlign: "center",
    padding: 10,
    margin: 20,
    backgroundColor: '#b2da43',
  },
  btnText:{
    textAlign: 'center'
  },
  label: {
    marginLeft: 25,
    color: '#fff',
    marginTop: 25
  }
});
