import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={styles.titulo}> Soma de Valores </Text>

      <Text style={styles.label}>Primerio Valor:</Text>
      <TextInput style={styles.input} KeyboardType='numeric' PlaceHolder='Digite um número'/>

      <Text style={styles.label}>Primerio Valor:</Text>
      <TextInput style={styles.input} KeyboardType='numeric'/>

      <Button title='Calcular' style={styles.botao} />
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f2f4f1',
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    padding: 10,
    fontSize: 18,
    color: 'red'
  },
  botao: {
    backgroundColor: '#b2da43',
    margin: 20,
    borderRadius: 10,
    padding: 10
  },
  label: {
    marginLeft: 25,
    marginTop: 25
  }
});
