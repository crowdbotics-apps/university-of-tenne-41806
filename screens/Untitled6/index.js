import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PlayerDetailsScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Player Details</Text>
      </View>
      <View style={styles.playerInfoContainer}>
        <Image style={styles.playerImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.playerName}>First Name</Text>
        <Text style={styles.playerName}>Last Name</Text>
        <Text style={styles.playerDetails}>Jersey: </Text>
        <Text style={styles.playerDetails}>Nickname: </Text>
        <Text style={styles.playerDetails}>Height: </Text>
        <Text style={styles.playerDetails}>Weight: </Text>
        <Text style={styles.playerDetails}>Date of Birth: </Text>
      </View>
      <View style={styles.teamDetailsContainer}>
        <Text style={styles.sectionTitle}>Team Details</Text>
        {
        /* Render team details */
      }
      </View>
      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities</Text>
        {
        /* Render list of activities */
      }
      </View>
      <View style={styles.activityDetailsContainer}>
        <Text style={styles.sectionTitle}>Specific Activity Details</Text>
        {
        /* Render specific activity details */
      }
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.sectionTitle}>Statistics for Specific Activity</Text>
        {
        /* Render statistics for specific activity */
      }
      </View>
      <View style={styles.videosContainer}>
        <Text style={styles.sectionTitle}>Videos</Text>
        {
        /* Render list of videos */
      }
      </View>
      <View style={styles.videoPlayerContainer}>
        <Text style={styles.sectionTitle}>Video Player</Text>
        {
        /* Render video player */
      }
      </View>
      <View style={styles.otherDetailsContainer}>
        <Text style={styles.sectionTitle}>Other Details</Text>
        {
        /* Render other details captured from APIs */
      }
      </View>
      <TouchableOpacity style={styles.editButton}>
        {
        /* Render edit icon */
      }
      </TouchableOpacity>
      <TouchableOpacity style={styles.requestButton}>
        <Text style={styles.requestButtonText}>Request Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.archiveButton}>
        {
        /* Render archive icon */
      }
      </TouchableOpacity>
    </View>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#333',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  playerInfoContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  playerImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  playerDetails: {
    fontSize: 16,
    marginBottom: 5
  },
  teamDetailsContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  activitiesContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  activityDetailsContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  statisticsContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  videosContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  videoPlayerContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  otherDetailsContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  requestButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20
  },
  requestButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  archiveButton: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
};
export default PlayerDetailsScreen;