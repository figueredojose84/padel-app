import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PartidoScreen() {
  const equipoQueSaca = 1 as 1 | 2;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TORNEO DE PÁDEL</Text>
        <Text style={styles.subtitle}>UNIVERSIDAD YACAMBÚ</Text>
        <Text style={styles.playerName}>JOSÉ FIGUEREDO</Text>
      </View>

      <View style={styles.horizontalScoreContainer}>
        {/* Equipo 1 */}
        <View style={[styles.teamScoreRow, equipoQueSaca === 1 && styles.servingTeamBorder]}>
          <View style={styles.teamLabel}>
            {equipoQueSaca === 1 && <View style={styles.serveIndicator} />}
            <Text style={styles.teamName}>EQUIPO 1</Text>
          </View>
          <View style={styles.scoresRow}>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>0</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>0</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>0</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 1 && styles.servingTeam]}>00</Text>
          </View>
        </View>

        {/* Equipo 2 */}
        <View style={[styles.teamScoreRow, equipoQueSaca === 2 && styles.servingTeamBorder]}>
          <View style={styles.teamLabel}>
            {equipoQueSaca === 2 && <View style={styles.serveIndicator} />}
            <Text style={styles.teamName}>EQUIPO 2</Text>
          </View>
          <View style={styles.scoresRow}>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>0</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>0</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>0</Text>
            <Text style={[styles.scoreText, equipoQueSaca === 2 && styles.servingTeam]}>00</Text>
          </View>
        </View>
      </View>

      {/* Etiquetas del marcador - ahora horizontal */}
      <View style={styles.scoreLabels}>
        <Text style={styles.label}>Sets</Text>
        <Text style={styles.label}>Juegos</Text>
        <Text style={styles.label}>Puntos</Text>
        <Text style={styles.label}>TieBreak</Text>
      </View>

      {/* Botones de control */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.primaryButton]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonReset}>
        <Text style={styles.buttonResetText}>REINICIAR PARTIDO</Text>
      </TouchableOpacity>
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
  servingTeamBorder: {
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
  scoreLabels: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 20,
    paddingRight: '30%',
  },
  label: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
    width: 50,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: '#2ecc71',
  },
  secondaryButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonReset: {
    backgroundColor: '#34495e',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonResetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});