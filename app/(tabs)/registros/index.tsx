import { useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';

interface Partido {
  equipo1: string;
  equipo2: string;
  fecha: string;
  sh1: number;
  sh2: number;
  sh3: number;
  sl1: number;
  sl2: number;
  sl3: number;
  dh1: number;
  dh2: number;
  dl1: number;
  dl2: number;
  ganador: string;
}

export default function RegistroScreen() {
    const [partidos] = useState<Partido[]>([
        {
            equipo1: "Los Lobos",
            equipo2: "Las Águilas",
            fecha: "2023-11-20T15:30:00",
            sh1: 6, sh2: 4, sh3: 0,
            sl1: 3, sl2: 6, sl3: 0,
            dh1: 4, dh2: 2,
            dl1: 1, dl2: 4,
            ganador: "Los Lobos"
        },
        {
            equipo1: "Los Tigres",
            equipo2: "Los Leones",
            fecha: "2023-11-19T14:00:00",
            sh1: 6, sh2: 6, sh3: 7,
            sl1: 4, sl2: 7, sl3: 5,
            dh1: 3, dh2: 5,
            dl1: 6, dl2: 3,
            ganador: "Los Leones"
        },
        {
            equipo1: "Los Halcones",
            equipo2: "Los Osos",
            fecha: "2023-11-18T16:45:00",
            sh1: 6, sh2: 6, sh3: 6,
            sl1: 2, sl2: 4, sl3: 4,
            dh1: 5, dh2: 4,
            dl1: 2, dl2: 3,
            ganador: "Los Halcones"
        }
    ]);

    const renderItem: ListRenderItem<Partido> = ({ item }) => (
        <View style={styles.partidoItem}>
            <View style={styles.partidoHeaderContainer}>
                <Text style={styles.partidoEquipo}>{item.equipo1}</Text>
                <Text style={styles.vsText}>vs</Text>
                <Text style={styles.partidoEquipo}>{item.equipo2}</Text>
            </View>
            
            <Text style={styles.partidoFecha}>
                {new Date(item.fecha).toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}
            </Text>
            
            <View style={styles.scoresContainer}>
                <View style={styles.scoreColumn}>
                    <Text style={styles.scoreTitle}>Sets</Text>
                    <Text style={styles.scoreValue}>{item.sh1} - {item.sh2} - {item.sh3}</Text>
                </View>
                <View style={styles.scoreColumn}>
                    <Text style={styles.scoreTitle}>Juegos</Text>
                    <Text style={styles.scoreValue}>{item.dh1} - {item.dh2}</Text>
                </View>
            </View>
            
            <View style={styles.scoresContainer}>
                <View style={styles.scoreColumn}>
                    <Text style={styles.scoreTitle}>Sets</Text>
                    <Text style={styles.scoreValue}>{item.sl1} - {item.sl2} - {item.sl3}</Text>
                </View>
                <View style={styles.scoreColumn}>
                    <Text style={styles.scoreTitle}>Juegos</Text>
                    <Text style={styles.scoreValue}>{item.dl1} - {item.dl2}</Text>
                </View>
            </View>
            
            <View style={[
                styles.ganadorContainer,
                item.ganador === item.equipo1 ? styles.ganadorEquipo1 : styles.ganadorEquipo2
            ]}>
                <Text style={styles.ganadorText}>Ganador: {item.ganador}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Historial de Partidos</Text>
                <Text style={styles.subtitle}>Torneo de Pádel 2023</Text>
            </View>
            
            <FlatList
                data={partidos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No hay partidos registrados</Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#2c3e50',
        padding: 20,
        paddingTop: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#bdc3c7',
        textAlign: 'center',
        marginBottom: 10,
    },
    listContainer: {
        padding: 15,
        paddingBottom: 30,
    },
    partidoItem: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    partidoHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    partidoEquipo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
        flex: 1,
        textAlign: 'center',
    },
    vsText: {
        fontSize: 12,
        color: '#7f8c8d',
        marginHorizontal: 10,
    },
    partidoFecha: {
        fontSize: 12,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 15,
        fontStyle: 'italic',
    },
    scoresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    scoreColumn: {
        flex: 1,
        alignItems: 'center',
    },
    scoreTitle: {
        fontSize: 12,
        color: '#7f8c8d',
        marginBottom: 3,
    },
    scoreValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34495e',
    },
    ganadorContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    ganadorEquipo1: {
        backgroundColor: '#e3f2fd',
        borderLeftWidth: 4,
        borderLeftColor: '#2196f3',
    },
    ganadorEquipo2: {
        backgroundColor: '#ffebee',
        borderLeftWidth: 4,
        borderLeftColor: '#f44336',
    },
    ganadorText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    emptyText: {
        fontSize: 16,
        color: '#7f8c8d',
        textAlign: 'center',
    },
});