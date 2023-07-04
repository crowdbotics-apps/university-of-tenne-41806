import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("Untitled14");
    }}>
        <Text style={styles.buttonText}>Sign-in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {
      navigation.navigate("Untitled3");
    }}>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  forgotPasswordButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default App;