import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const ScreenComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');

  const handleSave = () => {
    // Save the entered data
    setData(`Name: ${name}\nEmail: ${email}`);
    Alert.alert('Data Saved', 'Your data has been saved successfully.');
  };

  const handleSend = () => {
    // Send the entered data to the management/admin
    // Notify the management/admin
    Alert.alert('Data Sent', 'Your data has been sent to the management/admin.');
  };

  return <View style={_styles.TFglvKUm}>
      <Text style={_styles.drlxPNyu}>User Details</Text>
      <Text style={_styles.YiPBSpcP}>Name:</Text>
      <TextInput style={_styles.BiwvygJH} onChangeText={text => setName(text)} value={name} placeholder="Enter your name" />
      <Text style={_styles.RBbuBoJL}>Email:</Text>
      <TextInput style={_styles.luOElPKt} onChangeText={text => setEmail(text)} value={email} placeholder="Enter your email" />
      <Text style={_styles.sRrDfJjz}>Other Details:</Text>
      {
      /* Render other input fields asked by the management/admin */
    }
      {
      /* For each input field, use TextInput component to enter the relevant data */
    }
      {
      /* Example: */
    }
      {
      /* <Text style={{ fontSize: 16, marginBottom: 8 }}>Field 1:</Text>
      <TextInput
       style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16 }}
       onChangeText={text => setField1(text)}
       value={field1}
       placeholder="Enter field 1 data"
      /> */
    }
      <Button title="Save" onPress={handleSave} />
      <Button title="Send" onPress={handleSend} />
    </View>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  TFglvKUm: {
    flex: 1,
    padding: 16
  },
  drlxPNyu: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  YiPBSpcP: {
    fontSize: 16,
    marginBottom: 8
  },
  BiwvygJH: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16
  },
  RBbuBoJL: {
    fontSize: 16,
    marginBottom: 8
  },
  luOElPKt: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16
  },
  sRrDfJjz: {
    fontSize: 16,
    marginBottom: 8
  }
});