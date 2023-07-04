import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ArchivedPlayersScreen = () => {
  const archivedPlayers = [{
    name: 'John Doe',
    email: 'johndoe@example.com',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    archivedBy: 'Jane Smith',
    user: {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'Admin'
    }
  } // Add more archived players here
  ];
  return <View style={styles.container}>
      <Text style={styles.title}>List of Archived Players</Text>
      {archivedPlayers.map((player, index) => <View key={index} style={styles.playerContainer}>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerEmail}>{player.email}</Text>
          <Text style={styles.playerDetails}>{player.details}</Text>
          <Text style={styles.archivedBy}>Archived by: {player.archivedBy}</Text>
          <View style={styles.userContainer}>
            <Text style={styles.userTitle}>User Details</Text>
            <Text style={styles.userName}>{player.user.name}</Text>
            <Text style={styles.userEmail}>{player.user.email}</Text>
            <Text style={styles.userRole}>{player.user.role}</Text>
          </View>
          <TouchableOpacity style={styles.unarchiveButton}>
            <Text style={styles.unarchiveButtonText}>Unarchive</Text>
          </TouchableOpacity>
        </View>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  playerContainer: {
    marginBottom: 24
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  playerEmail: {
    fontSize: 16,
    marginBottom: 8
  },
  playerDetails: {
    fontSize: 14,
    marginBottom: 8
  },
  archivedBy: {
    fontSize: 14,
    marginBottom: 8,
    color: 'gray'
  },
  userContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  userTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  userName: {
    fontSize: 14,
    marginBottom: 4
  },
  userEmail: {
    fontSize: 14,
    marginBottom: 4
  },
  userRole: {
    fontSize: 14,
    marginBottom: 4
  },
  unarchiveButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#42a5f5',
    borderRadius: 8,
    alignItems: 'center'
  },
  unarchiveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default ArchivedPlayersScreen;