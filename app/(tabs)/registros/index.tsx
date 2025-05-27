import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function RegistroScreen() {

    const [form, setForm] = useState({
        equiOne: '',
        equiTwo: '',

    });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Registro de equipos</Text>
      <View style={{marginTop:50}}/>
      <TextInput 
        value={form.equiOne}
        placeholder="Ingrese el nombre del equipo 1"
        maxLength={20}
        style={[{ color: 'black'},styles.inputConBordeSolido]}
        onChangeText={(value) => setForm({...form, equiOne: value})}
        /> 
        <TextInput 
        value={form.equiTwo}
        placeholder="Ingrese el nombre del equipo 2"
        maxLength={20}
        style={[{ color: 'black'},styles.inputConBordeSolido]}
        onChangeText={(value) => setForm({...form, equiTwo: value})}
        /> 
      <Button >Comenzar Partido </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputConBordeSolido: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 250,
  },
});