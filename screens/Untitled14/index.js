import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visual Representation of Data</Text>
      </View>
      <View style={styles.graphContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.graphImage} />
      </View>
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionTitle}>Select Player/s</Text>
        {
        /* Player selection component */
      }
      </View>
      <View style={styles.metricsContainer}>
        <Text style={styles.metricsTitle}>Strength Progress</Text>
        <Text style={styles.metricsSubtitle}>Body Weight</Text>
        <Text style={styles.metricsSubtitle}>Body Fat Percentage</Text>
        {
        /* Player performance metrics and statistics components */
      }
      </View>
      <View style={styles.trendsContainer}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled7");
      }}><Text style={styles.trendsTitle}>{"Archived players"}</Text></Pressable>
        {
        /* Graphs/charts displaying trends over time */
      }
      </View>
      <View style={styles.comparativeContainer}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled10");
      }}><Text style={styles.comparativeTitle}>{"Data verification "}</Text></Pressable>
        {
        /* Visualizations for comparing players */
      }
      </View>
      <View style={styles.manageUsersContainer}>
        <Button title="Manage Users" onPress={() => {}} />
        <Text style={styles.manageUsersText}>Number of Players: 10</Text>
        <Text style={styles.manageUsersText}>Number of Management Users: 5</Text>
        <Pressable onPress={() => {
        navigation.navigate("Untitled5");
      }}><Text style={styles.manageUsersText}>{"Manage users screen"}</Text></Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="View" onPress={() => {}} />
        <Button title="Invite User" onPress={() => {}} />
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationTitle}>Notification</Text>
        {
        /* List of notifications */
      }
      </View>
      <View style={styles.profileButtonContainer}>
        <Button title="My Profile" onPress={() => {}} />
      </View>
      <View style={styles.verificationButtonContainer}>
        <Button title="Data Verification" onPress={() => {}} />
      </View>
    <Pressable onPress={() => {
      navigation.navigate("Untitled11");
    }}><Text style={styles.mCThawHJ}>{"Profile"}</Text></Pressable></View>;
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
  graphContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  graphImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  },
  selectionContainer: {
    marginBottom: 20
  },
  selectionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  metricsContainer: {
    marginBottom: 20
  },
  metricsTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  metricsSubtitle: {
    fontSize: 16,
    marginBottom: 5
  },
  trendsContainer: {
    marginBottom: 20
  },
  trendsTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  comparativeContainer: {
    marginBottom: 20
  },
  comparativeTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  manageUsersContainer: {
    marginBottom: 20
  },
  manageUsersText: {
    fontSize: 16,
    marginBottom: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  notificationContainer: {
    marginBottom: 20
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileButtonContainer: {
    marginBottom: 20
  },
  verificationButtonContainer: {
    marginBottom: 20
  },
  mCThawHJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default ScreenComponent;