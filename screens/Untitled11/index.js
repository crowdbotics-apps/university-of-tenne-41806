import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSave = () => {
    // Save changes made in the edit mode
    setIsEditMode(false);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={fullName} onChangeText={setFullName} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={setUsername} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Bio</Text>
        <TextInput style={styles.input} value={bio} onChangeText={setBio} multiline editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} value={dateOfBirth} onChangeText={setDateOfBirth} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.input} value={gender} onChangeText={setGender} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Street Address</Text>
        <TextInput style={styles.input} value={streetAddress} onChangeText={setStreetAddress} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput style={styles.input} value={zipCode} onChangeText={setZipCode} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>State</Text>
        <TextInput style={styles.input} value={state} onChangeText={setState} editable={isEditMode} />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Country</Text>
        <TextInput style={styles.input} value={country} onChangeText={setCountry} editable={isEditMode} />
      </View>

      {isEditMode ? <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity> : <TouchableOpacity style={styles.button} onPress={() => setIsEditMode(true)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  fieldContainer: {
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginTop: 16
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default ProfileScreen;