import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const PlayerDetailsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dataFields, setDataFields] = useState([]);
  const [customData, setCustomData] = useState('');
  const [checkedDataFields, setCheckedDataFields] = useState([]);

  const handleAddDataField = () => {
    if (dataFields.includes(customData)) {
      return;
    }

    setDataFields([...dataFields, customData]);
    setCustomData('');
  };

  const handleToggleDataField = field => {
    if (checkedDataFields.includes(field)) {
      setCheckedDataFields(checkedDataFields.filter(item => item !== field));
    } else {
      setCheckedDataFields([...checkedDataFields, field]);
    }
  };

  const handleSend = () => {// Send player details and checked data fields
  };

  const handleCancel = () => {// Cancel and go back to previous screen
  };

  return <View style={_styles.QCJaYrlO}>
      <Text style={_styles.eHugNSuV}>Player Details</Text>
      <TextInput style={_styles.zHPqSflJ} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={_styles.YCrVOShA} placeholder="Email" value={email} onChangeText={setEmail} />
      <Text style={_styles.aZxIQxnJ}>Request Data</Text>
      <View style={_styles.naFtKuBG}>
        <ScrollView>
          {dataFields.map(field => <TouchableOpacity key={field} style={_styles.wnsBRtaR} onPress={() => handleToggleDataField(field)}>
              <View style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: checkedDataFields.includes(field) ? 'green' : 'gray',
            marginRight: 8
          }} />
              <Text>{field}</Text>
            </TouchableOpacity>)}
        </ScrollView>
      </View>
      <Text style={_styles.DLZIFZIc}>Custom Data</Text>
      <View style={_styles.rczPUAgJ}>
        <TextInput style={_styles.cJIQmMOP} placeholder="Enter custom data" value={customData} onChangeText={setCustomData} />
        <TouchableOpacity style={_styles.hAYHFgmy} onPress={handleAddDataField}>
          <Text style={_styles.pyoPfCMB}>Add</Text>
        </TouchableOpacity>
      </View>
      <Text style={_styles.BfyMsUTX}>Checked Data Fields</Text>
      <View style={_styles.vSQlgaxK}>
        <ScrollView>
          {checkedDataFields.map(field => <View key={field} style={_styles.MODSIHGp}>
              <View style={_styles.PBqwmrxt} />
              <Text>{field}</Text>
            </View>)}
        </ScrollView>
      </View>
      <TouchableOpacity style={_styles.JAzGyRzT} onPress={handleSend}>
        <Text style={_styles.TgJkxAKJ}>
          Send
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.YisYhNhQ} onPress={handleCancel}>
        <Text style={_styles.dANIvpYe}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>;
};

export default PlayerDetailsScreen;

const _styles = StyleSheet.create({
  QCJaYrlO: {
    flex: 1,
    padding: 16
  },
  eHugNSuV: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  zHPqSflJ: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 16
  },
  YCrVOShA: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 16
  },
  aZxIQxnJ: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  naFtKuBG: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16
  },
  wnsBRtaR: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  DLZIFZIc: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  rczPUAgJ: {
    flexDirection: "row",
    marginBottom: 16
  },
  cJIQmMOP: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8
  },
  hAYHFgmy: {
    backgroundColor: "blue",
    padding: 8,
    marginLeft: 8,
    borderRadius: 4
  },
  pyoPfCMB: {
    color: "white"
  },
  BfyMsUTX: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  vSQlgaxK: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16
  },
  MODSIHGp: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  PBqwmrxt: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "green",
    marginRight: 8
  },
  JAzGyRzT: {
    backgroundColor: "green",
    padding: 16,
    borderRadius: 4,
    marginBottom: 16
  },
  TgJkxAKJ: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  YisYhNhQ: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 4
  },
  dANIvpYe: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});