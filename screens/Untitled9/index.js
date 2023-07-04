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

  return <View style={_styles.sOuSbjub}>
      <Text style={_styles.OQovOcxF}>Player Details</Text>
      <TextInput style={_styles.wKVFQfQg} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={_styles.NohAkSLt} placeholder="Email" value={email} onChangeText={setEmail} />
      <Text style={_styles.DtrUHMbS}>Request Data</Text>
      <ScrollView style={_styles.ZwflEjct}>
        {dataFields.map(field => <TouchableOpacity key={field} style={_styles.GdaCPLUD} onPress={() => handleToggleDataField(field)}>
            <View style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: checkedDataFields.includes(field) ? 'blue' : '#ccc',
          marginRight: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
              {checkedDataFields.includes(field) && <View style={_styles.TQihqndX} />}
            </View>
            <Text>{field}</Text>
          </TouchableOpacity>)}
      </ScrollView>
      <Text style={_styles.FGDsdLZo}>Custom Data</Text>
      <View style={_styles.xLefWewF}>
        <TextInput style={_styles.prgSjBqT} placeholder="Enter custom data" value={customData} onChangeText={setCustomData} />
        <TouchableOpacity style={_styles.IVvByjQj} onPress={handleAddDataField}>
          <Text style={_styles.bvJkVEuI}>Add</Text>
        </TouchableOpacity>
      </View>
      <Text style={_styles.XdQfYtiI}>Checked Data Fields</Text>
      <ScrollView style={_styles.CeXUmWOp}>
        {checkedDataFields.map(field => <Text key={field}>{field}</Text>)}
      </ScrollView>
      <TouchableOpacity style={_styles.oLXAuEho} onPress={handleSend}>
        <Text style={_styles.xEQwtkux}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.tXggSYWx} onPress={handleCancel}>
        <Text style={_styles.AvGVgqfn}>Cancel</Text>
      </TouchableOpacity>
    </View>;
};

export default PlayerDetailsScreen;

const _styles = StyleSheet.create({
  sOuSbjub: {
    flex: 1,
    padding: 16
  },
  OQovOcxF: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  wKVFQfQg: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16
  },
  NohAkSLt: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16
  },
  DtrUHMbS: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  ZwflEjct: {
    maxHeight: 200,
    marginBottom: 16
  },
  GdaCPLUD: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  TQihqndX: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "blue"
  },
  FGDsdLZo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  xLefWewF: {
    flexDirection: "row",
    marginBottom: 16
  },
  prgSjBqT: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8
  },
  IVvByjQj: {
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8
  },
  bvJkVEuI: {
    color: "white"
  },
  XdQfYtiI: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  CeXUmWOp: {
    maxHeight: 200,
    marginBottom: 16
  },
  oLXAuEho: {
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  xEQwtkux: {
    color: "white"
  },
  tXggSYWx: {
    backgroundColor: "red",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  AvGVgqfn: {
    color: "white"
  }
});