import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({  }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image 
          source={require('../assets/padel-icon.png')} // Asegúrate de tener este icono
          style={styles.logo}
        /> */}
        <Text style={styles.title}>Padel</Text>
        <Text style={styles.subtitle}>Sistema de Marcación Electrónica</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.description}>
          tus partidos de pádel de manera rápida y sencilla.
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/(tabs)/partidos')}
        >
          <Text style={styles.buttonText}>Comenzar Partido</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push('/(tabs)/registros')}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>Ver Historial</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Torneo Universidad Yacambú 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#2c3e50',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bdc3c7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#27ae60',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#2c3e50',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: '#2c3e50',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  footerText: {
    color: '#7f8c8d',
    fontSize: 14,
  },
});