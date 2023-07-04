import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email === '') {
      Alert.alert('Error', 'Please enter a valid email');
    } else {
      // Send password reset link to user's email
      // Code to send email goes here
      Alert.alert('Success', 'Password reset link sent to your email');
    }
  };

  const handleCancel = () => {
    // Code to cancel the process goes here
    Alert.alert('Cancel', 'Process cancelled');
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput style={styles.input} placeholder="Enter registered email" onChangeText={text => setEmail(text)} value={email} />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default ResetPasswordScreen;