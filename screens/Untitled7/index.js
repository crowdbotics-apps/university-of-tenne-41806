import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserListScreen = () => {
  const users = [{
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin"
  }, {
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "User"
  }, {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    role: "User"
  }];
  return <View style={styles.container}>
      <Text style={styles.title}>{"Archived User List"}</Text>
      {users.map((user, index) => <View key={index} style={styles.userContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <Text style={styles.userRole}>{user.role}</Text>
        </View>)}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  userContainer: {
    marginBottom: 24
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  userEmail: {
    fontSize: 16,
    marginBottom: 8
  },
  userRole: {
    fontSize: 14,
    color: "gray"
  }
});
export default UserListScreen;