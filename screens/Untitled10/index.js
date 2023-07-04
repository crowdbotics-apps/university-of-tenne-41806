import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const PlayerScreen = () => {
  const [players, setPlayers] = useState([{
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    submitted: true
  }, {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    submitted: false
  }, {
    id: 3,
    name: 'Mike Johnson',
    email: 'mikejohnson@example.com',
    submitted: false
  }]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelection = player => {
    setSelectedPlayer(player);
  };

  const handleReminder = () => {// Send reminder logic
  };

  const handleApprove = () => {// Approve logic
  };

  const handleReject = () => {// Reject logic
  };

  const handleApproveAll = () => {// Approve all logic
  };

  const handleRejectAll = () => {// Reject all logic
  };

  return <View style={_styles.xYbVlDyc}>
      <Text style={_styles.PBinXMAA}>List of all players with data request</Text>

      <Text style={_styles.rPDvlcZd}>List of players who submitted the data:</Text>
      <ScrollView style={_styles.wgqAGilM}>
        {players.map(player => player.submitted && <TouchableOpacity key={player.id} style={_styles.uWuKnMDR} onPress={() => handlePlayerSelection(player)}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.WJVYuajG} />
              <Text>{player.name} - {player.email}</Text>
            </TouchableOpacity>)}
      </ScrollView>

      <Text style={_styles.AplZLkvw}>List of players who haven't submitted the data:</Text>
      <ScrollView style={_styles.KrRtUCsp}>
        {players.map(player => !player.submitted && <View key={player.id} style={_styles.IKgnqzxW}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.AcvMOiAI} />
              <Text>{player.name} - {player.email}</Text>
            </View>)}
      </ScrollView>

      {selectedPlayer && <View style={_styles.WgiZwyKu}>
          <Text style={_styles.eIRzKNug}>Specific player response:</Text>
          <Text>Player: {selectedPlayer.name}</Text>
          <Text>Email: {selectedPlayer.email}</Text>
        </View>}

      <Text style={_styles.QAmCLCPB}>List of all requested data:</Text>
      <ScrollView style={_styles.HagceGrp}>
        {
        /* Render list of requested data */
      }
      </ScrollView>

      <Text style={_styles.SyWlAVWC}>Specific data field:</Text>
      <Text>Data field name</Text>

      <Text style={_styles.JLeccgVs}>Previous value:</Text>
      <Text>Previous value</Text>

      <Text style={_styles.coWjXQxg}>New value:</Text>
      <Text>New value</Text>

      <TouchableOpacity style={_styles.UzaeoxtW}>
        <Text style={_styles.jYadoPCS}>Approve</Text>
      </TouchableOpacity>

      <TouchableOpacity style={_styles.CYexOphc}>
        <Text style={_styles.YVdPSPlB}>Reject</Text>
      </TouchableOpacity>

      <TouchableOpacity style={_styles.xLUDfHzz}>
        <Text style={_styles.XXRzHGOV}>Approve all</Text>
      </TouchableOpacity>

      <TouchableOpacity style={_styles.IdHPZyye}>
        <Text style={_styles.NZyfZnom}>Reject all</Text>
      </TouchableOpacity>
    </View>;
};

export default PlayerScreen;

const _styles = StyleSheet.create({
  xYbVlDyc: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  PBinXMAA: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  rPDvlcZd: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  wgqAGilM: {
    marginBottom: 20
  },
  uWuKnMDR: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  WJVYuajG: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  AplZLkvw: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  KrRtUCsp: {
    marginBottom: 20
  },
  IKgnqzxW: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  AcvMOiAI: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  WgiZwyKu: {
    marginBottom: 20
  },
  eIRzKNug: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  QAmCLCPB: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  HagceGrp: {
    marginBottom: 20
  },
  SyWlAVWC: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  JLeccgVs: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  coWjXQxg: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  UzaeoxtW: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  jYadoPCS: {
    color: "white",
    fontWeight: "bold"
  },
  CYexOphc: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  YVdPSPlB: {
    color: "white",
    fontWeight: "bold"
  },
  xLUDfHzz: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  XXRzHGOV: {
    color: "white",
    fontWeight: "bold"
  },
  IdHPZyye: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5
  },
  NZyfZnom: {
    color: "white",
    fontWeight: "bold"
  }
});