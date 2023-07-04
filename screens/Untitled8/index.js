import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const departments = ['Department 1', 'Department 2', 'Department 3'];

const InviteScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  const handleInvite = () => {
    // Send invitation logic here
    const invitationDetails = {
      name,
      email,
      password,
      role,
      department,
      message
    };
    console.log(invitationDetails);
  };

  return <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Temporary Password" value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Role" value={role} onChangeText={setRole} />
      <TextInput style={styles.input} placeholder="Department" value={department} onChangeText={setDepartment} />
      <TextInput style={styles.input} placeholder="Message" value={message} onChangeText={setMessage} />
      <TouchableOpacity style={styles.button} onPress={handleInvite}>
        <Text style={styles.buttonText}>Invite</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default InviteScreen;