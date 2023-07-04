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

  return <View style={_styles.FHpmXXQM}>
      <Text style={_styles.EgCZwyoB}>List of all players with data request</Text>

      <Text style={_styles.OCAwgjgt}>List of players who submitted the data:</Text>
      <ScrollView style={_styles.aTHepAdg}>
        {players.map(player => player.submitted && <TouchableOpacity key={player.id} style={_styles.oZXyQIJa} onPress={() => handlePlayerSelection(player)}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.ENLiIPYp} />
              <Text>{player.name} - {player.email}</Text>
            </TouchableOpacity>)}
      </ScrollView>

      <Text style={_styles.WQWuiXfM}>List of players who haven't submitted the data:</Text>
      <ScrollView style={_styles.IVVjEura}>
        {players.map(player => !player.submitted && <View key={player.id} style={_styles.OUwZNVQk}>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.FJlpcBzF} />
              <Text>{player.name} - {player.email}</Text>
            </View>)}
      </ScrollView>

      {selectedPlayer && <View style={_styles.mJTXDopx}>
          <Text style={_styles.IwZQIeep}>Specific player response:</Text>
          <Text>Player: {selectedPlayer.name}</Text>
          <Text>Email: {selectedPlayer.email}</Text>
        </View>}

      <Text style={_styles.nrqwNyXz}>List of all requested data:</Text>
      <ScrollView style={_styles.zZnriJmq}>
        {
        /* Render list of requested data */
      }
      </ScrollView>

      <Text style={_styles.WLjracek}>Specific data field:</Text>
      <Text>Data field name</Text>

      <Text style={_styles.zKWuExDV}>Previous value:</Text>
      <Text>Previous value</Text>

      <Text style={_styles.KbVwYnLR}>New value:</Text>
      <Text>New value</Text>

      <TouchableOpacity style={_styles.ROYzCkxA}>
        <Text style={_styles.LbWbAvVU}>Approve</Text>
      </TouchableOpacity>

      <TouchableOpacity style={_styles.WklsDZNo}>
        <Text style={_styles.yhrmHIlS}>Reject</Text>
      </TouchableOpacity>

      <TouchableOpacity style={_styles.nKIUNfBa}>
        <Text style={_styles.RVCFeUdZ}>Approve all</Text>
      </TouchableOpacity>

      <TouchableOpacity style={_styles.ODxcbYLs}>
        <Text style={_styles.johWGBmZ}>Reject all</Text>
      </TouchableOpacity>
    </View>;
};

export default PlayerScreen;

const _styles = StyleSheet.create({
  FHpmXXQM: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  EgCZwyoB: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  OCAwgjgt: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  aTHepAdg: {
    marginBottom: 20
  },
  oZXyQIJa: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  ENLiIPYp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  WQWuiXfM: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  IVVjEura: {
    marginBottom: 20
  },
  OUwZNVQk: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  FJlpcBzF: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  mJTXDopx: {
    marginBottom: 20
  },
  IwZQIeep: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  nrqwNyXz: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  zZnriJmq: {
    marginBottom: 20
  },
  WLjracek: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  zKWuExDV: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  KbVwYnLR: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  ROYzCkxA: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  LbWbAvVU: {
    color: "white",
    fontWeight: "bold"
  },
  WklsDZNo: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  yhrmHIlS: {
    color: "white",
    fontWeight: "bold"
  },
  nKIUNfBa: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  RVCFeUdZ: {
    color: "white",
    fontWeight: "bold"
  },
  ODxcbYLs: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5
  },
  johWGBmZ: {
    color: "white",
    fontWeight: "bold"
  }
});