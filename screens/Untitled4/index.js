import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visual Representation of Data</Text>
      </View>
      <View style={styles.graphicalView}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.graphicalImage} />
      </View>
      <View style={styles.selectPlayers}>
        <Text style={styles.subtitle}>Select Player/s</Text>
      </View>
      <View style={styles.progressMetrics}>
        <Text style={styles.subtitle}>Strength Progress</Text>
        <Text style={styles.subtitle}>Body Weight</Text>
        <Text style={styles.subtitle}>Body Fat Percentage</Text>
      </View>
      <View style={styles.playerMetrics}>
        <Text style={styles.subtitle}>Player Performance Metrics</Text>
        <Text style={styles.subtitle}>Player Statistics</Text>
      </View>
      <View style={styles.dataTrends}>
        <Text style={styles.subtitle}>Data Trends</Text>
        <Text style={styles.subtitle}>Graphs/Charts</Text>
      </View>
      <View style={styles.comparativeAnalysis}>
        <Text style={styles.subtitle}>Comparative Analysis</Text>
        <Text style={styles.subtitle}>Visualisations</Text>
      </View>
      <View style={styles.manageUsers}>
        <Button title="Manage Users" onPress={() => {}} />
      </View>
      <View style={styles.playerStats}>
        <Text style={styles.subtitle}>Number of Players</Text>
        <Text style={styles.subtitle}>Number of Management Users</Text>
        <Text style={styles.subtitle}>Number of Archived Players</Text>
      </View>
      <View style={styles.viewArchived}>
        <Button title="View Archived Players" onPress={() => {}} />
      </View>
      <View style={styles.inviteUser}>
        <Button title="Invite User" onPress={() => {}} />
      </View>
      <View style={styles.notification}>
        <Text style={styles.subtitle}>Notification</Text>
        <Text style={styles.subtitle}>List of Notifications</Text>
      </View>
      <View style={styles.myProfile}>
        <Button title="My Profile" onPress={() => {}} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  graphicalView: {
    alignItems: 'center',
    marginBottom: 20
  },
  graphicalImage: {
    width: 200,
    height: 200,
    borderRadius: 10
  },
  selectPlayers: {
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  progressMetrics: {
    marginBottom: 20
  },
  playerMetrics: {
    marginBottom: 20
  },
  dataTrends: {
    marginBottom: 20
  },
  comparativeAnalysis: {
    marginBottom: 20
  },
  manageUsers: {
    marginBottom: 20
  },
  playerStats: {
    marginBottom: 20
  },
  viewArchived: {
    marginBottom: 20
  },
  inviteUser: {
    marginBottom: 20
  },
  notification: {
    marginBottom: 20
  },
  myProfile: {
    marginBottom: 20
  }
});
export default ScreenComponent;