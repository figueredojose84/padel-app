import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PartidoScreen() {
  const [marcador, setMarcador] = useState({
    sh1: 0, sh2: 0, sh3: 0,
    sl1: 0, sl2: 0, sl3: 0,
    dh1: 0, dh2: 0,
    dl1: 0, dl2: 0,
    jugador: 0x30
  });
  const [ipESP32] = useState('192.168.1.105');
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://${ipESP32}/estado`);
        const data = await response.json();
        setMarcador(data);
        setIsConnected(true);
      } catch (error) {
        console.error(error);
        setIsConnected(false);
      } finally {
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, [ipESP32]);

  const enviarComando = async (endpoint: string) => {
    try {
      const response = await fetch(`http://${ipESP32}/${endpoint}`, {
        method: 'POST'
      });
      const result = await response.text();
      console.log(result);
      setIsConnected(true);
    } catch (error) {
      console.error(error);
      setIsConnected(false);
    }
  };

  const cambiarJugador = async () => {
    try {
      await fetch(`http://${ipESP32}/cambiarjugador`, {
        method: 'POST'
      });
      setIsConnected(true);
    } catch (error) {
      console.error(error);
      setIsConnected(false);
    }
  };

  const equipoQueSaca = marcador.jugador === 0x34 ? 1 : 2;

  return (
    <View style={styles.container}>
      {/* Mensaje de reconexión */}
      {!isConnected && (
        <View style={styles.reconnectingContainer}>
          <ActivityIndicator size="small" color="#ffffff" />
          <Text style={styles.reconnectingText}>Reconectando...</Text>
        </View>
      )}

      <View style={styles.header}>
        <Text style={styles.title}>TORNEO DE PÁDEL</Text>
        <Text style={styles.subtitle}>UNIVERSIDAD YACAMBÚ</Text>
        <Text style={styles.playerName}>JOSÉ FIGUEREDO</Text>
      </View>

      {/* Marcador principal */}
      <View style={styles.horizontalScoreContainer}>
        {/* Equipo 1 */}
        <View style={[styles.teamScoreRow,styles.servingTeamBorderEqui1]}>
          <View style={styles.teamLabel}>
            <Text style={styles.teamName}>EQUIPO 1</Text>
          </View>
          <View style={styles.scoresRow}>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>{marcador.sh1}</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>{marcador.sh2}</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>{marcador.sh3}</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>{marcador.dh1}{marcador.dh2}</Text>
          </View>
        </View>

        {/* Equipo 2 */}
        <View style={[styles.teamScoreRow, styles.servingTeamBorderEqui2]}>
          <View style={styles.teamLabel}>
            <Text style={styles.teamName}>EQUIPO 2</Text>
          </View>
          <View style={styles.scoresRow}>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>{marcador.sl1}</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>{marcador.sl2}</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>{marcador.sl3}</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>{marcador.dl1}{marcador.dl2}</Text>
          </View>
        </View>
      </View>

      {/* Botones de control */}
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          onPress={() => enviarComando('incrementar/equipo1')}
          style={[styles.button, styles.primaryButton]}>
          <Text style={styles.buttonText}>EQUIPO 1 +</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => enviarComando('incrementar/equipo2')}
          style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>EQUIPO 2 +</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>  
        <TouchableOpacity 
          onPress={() => enviarComando('reiniciar')}
          style={[styles.button, styles.resetButton]}>
          <Text style={styles.buttonText}>REINICIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 3,
  },
  playerName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#3498db',
    marginBottom: 20,
  },
  horizontalScoreContainer: {
    width: '100%',
    marginTop: 80,
    marginBottom: 10,
  },
  teamScoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  servingTeamBorderEqui1: {
    borderWidth: 2,
    borderColor: '#2ecc71',
  },
  servingTeamBorderEqui2: {
    borderWidth: 2,
    borderColor: '#e74c3c',
  },
  teamLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginLeft: 10,
  },
  scoresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '65%',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495e',
    width: 50,
    textAlign: 'center',
  },
  servingTeam: {
    color: '#e74c3c',
  },
  serveIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e74c3c',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    flex: 1,
    marginHorizontal: 5,
  },
  primaryButton: {
    backgroundColor: '#2ecc71',
  },
  secondaryButton: {
    backgroundColor: '#e74c3c',
  },
  tertiaryButton: {
    backgroundColor: '#f39c12',
  },
  resetButton: {
    backgroundColor: '#34495e',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reconnectingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e74c3c',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  reconnectingText: {
    color: '#fff',
    marginLeft: 10,
  },
});