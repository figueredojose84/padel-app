import { Button } from '@react-navigation/elements';
import { Text, View } from 'react-native';


export default function RegistroScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Registro de equipos</Text>
      <View style={{marginTop:50}}/>
      <Button>Comenzar Partido </Button>
    </View>
  );
}