import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScreenComponent = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visual Representation of Data</Text>
      </View>
      <View style={styles.instructions} onPress={() => {
      navigation.navigate("Untitled11");
    }}>
        <Text style={styles.instructionText}>Select Player/s</Text>
        <Text style={styles.instructionText}>Strength Progress</Text>
        <Text style={styles.instructionText}>Body Weight</Text>
        <Text style={styles.instructionText}>Body Fat Percentage</Text>
        <Text style={styles.instructionText}>Player Performance Metrics</Text>
        <Text style={styles.instructionText}>Player Statistics</Text>
        <Text style={styles.instructionText}>Data Trends</Text>
        <Text style={styles.instructionText}>Graphs/Charts</Text>
        <Text style={styles.instructionText}>Comparative Analysis</Text>
        <Text style={styles.instructionText}>Visualisations</Text>
        <Text style={styles.instructionText}>Manage Users</Text>
        <Text style={styles.instructionText}>Number of Players</Text>
        <Text style={styles.instructionText}>Number of Management Users</Text>
        <Text style={styles.instructionText}>Number of Archived Players</Text>
        <Text style={styles.instructionText}>View Archived Players</Text>
        <Text style={styles.instructionText}>Invite User</Text>
        <Text style={styles.instructionText}>Notification</Text>
        <Text style={styles.instructionText}>List of Notifications</Text>
        <Text style={styles.instructionText}>My Profile</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.UbFrBsWa]} onPress={() => {}}>
          <Text style={styles.buttonText}>Select Player/s</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.BdpikYMp]} onPress={() => {}}>
          <Text style={styles.buttonText}>Strength Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.mzYsgJAg]} onPress={() => {}}>
          <Text style={styles.buttonText}>Body Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.fEIgEQAz]} onPress={() => {}}>
          <Text style={styles.buttonText}>Body Fat Percentage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.iGFrvVJN]} onPress={() => {}}>
          <Text style={styles.buttonText}>Player Performance Metrics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.fEwQyBlh]} onPress={() => {}}>
          <Text style={styles.buttonText}>Player Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.OVZJnpqf]} onPress={() => {}}>
          <Text style={styles.buttonText}>Data Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.hmFOSixB]} onPress={() => {}}>
          <Text style={styles.buttonText}>Graphs/Charts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.gKqzhNfP]} onPress={() => {}}>
          <Text style={styles.buttonText}>Comparative Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.PqtOqKOk]} onPress={() => {}}>
          <Text style={styles.buttonText}>Visualisations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.EtBCcGIr]} onPress={() => {}}>
          <Text style={styles.buttonText}>Manage Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.eMRnbgtX]} onPress={() => {}}>
          <Text style={styles.buttonText}>Number of Players</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.YpXHflko]} onPress={() => {}}>
          <Text style={styles.buttonText}>Number of Management Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.afTzFnUx]} onPress={() => {}}>
          <Text style={styles.buttonText}>Number of Archived Players</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.RqdcFHYI]} onPress={() => {}}>
          <Text style={styles.buttonText}>View Archived Players</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.eXHjvKGz]} onPress={() => {}}>
          <Text style={styles.buttonText}>Invite User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.SSWMfnGj]} onPress={() => {}}>
          <Text style={styles.buttonText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.IWtnVszA]} onPress={() => {}}>
          <Text style={styles.buttonText}>List of Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.MlHDGyCU]} onPress={() => {}}>
          <Text style={styles.buttonText}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  instructions: {
    marginBottom: 20
  },
  instructionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#334fd9",
    opacity: 0.9
  },
  buttons: {
    marginBottom: 20
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  },
  UbFrBsWa: {
    backgroundColor: "#FF0000"
  },
  BdpikYMp: {
    backgroundColor: "#FF7F00"
  },
  mzYsgJAg: {
    backgroundColor: "#FFFF00"
  },
  fEIgEQAz: {
    backgroundColor: "#00FF00"
  },
  iGFrvVJN: {
    backgroundColor: "#00FFFF"
  },
  fEwQyBlh: {
    backgroundColor: "#0000FF"
  },
  OVZJnpqf: {
    backgroundColor: "#8B00FF"
  },
  hmFOSixB: {
    backgroundColor: "#FF00FF"
  },
  gKqzhNfP: {
    backgroundColor: "#FF1493"
  },
  PqtOqKOk: {
    backgroundColor: "#FF4500"
  },
  EtBCcGIr: {
    backgroundColor: "#FFD700"
  },
  eMRnbgtX: {
    backgroundColor: "#ADFF2F"
  },
  YpXHflko: {
    backgroundColor: "#00BFFF"
  },
  afTzFnUx: {
    backgroundColor: "#8A2BE2"
  },
  RqdcFHYI: {
    backgroundColor: "#FF69B4"
  },
  eXHjvKGz: {
    backgroundColor: "#FFA500"
  },
  SSWMfnGj: {
    backgroundColor: "#FFC0CB"
  },
  IWtnVszA: {
    backgroundColor: "#00CED1"
  },
  MlHDGyCU: {
    backgroundColor: "#FF8C00"
  }
});
export default ScreenComponent;