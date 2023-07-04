import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
const data = [{
  id: '1',
  fullName: 'John Doe',
  department: 'Sales',
  role: 'Player',
  email: 'johndoe@example.com'
}, {
  id: '2',
  fullName: 'Jane Smith',
  department: 'Marketing',
  role: 'Management',
  email: 'janesmith@example.com'
}, {
  id: '3',
  fullName: 'Mike Johnson',
  department: 'HR',
  role: 'Player',
  email: 'mikejohnson@example.com'
}, {
  id: '4',
  fullName: 'Sarah Williams',
  department: 'Finance',
  role: 'Management',
  email: 'sarahwilliams@example.com'
}];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleSearch = () => {// Perform search logic here
  };

  const handleFilter = role => {
    setSelectedRole(role); // Perform filter logic here
  };

  const renderItem = ({
    item
  }) => <View style={styles.userContainer}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled6");
      }}><Text style={styles.fullName}>{item.fullName}</Text></Pressable>
        <Text style={styles.department}>{item.department}</Text>
        <Text style={styles.role}>{item.role}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" value={searchText} onChangeText={setSearchText} onSubmitEditing={handleSearch} />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, selectedRole === 'Player' && styles.selectedFilterButton]} onPress={() => handleFilter('Player')}>
          <Text style={[styles.filterButtonText, selectedRole === 'Player' && styles.selectedFilterButtonText]}>
            Player
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, selectedRole === 'Management' && styles.selectedFilterButton]} onPress={() => handleFilter('Management')}>
          <Text style={[styles.filterButtonText, selectedRole === 'Management' && styles.selectedFilterButtonText]}>
            Management
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.listContainer} />
      <TouchableOpacity style={styles.inviteButton} onPress={() => {
      navigation.navigate("Untitled8");
    }}>
        <Text style={styles.inviteButtonText}>Invite user</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  filterButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10
  },
  selectedFilterButton: {
    backgroundColor: '#007AFF'
  },
  filterButtonText: {
    color: '#000'
  },
  selectedFilterButtonText: {
    color: '#fff'
  },
  listContainer: {
    paddingBottom: 20
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userInfo: {
    flex: 1
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  department: {
    fontSize: 14,
    marginBottom: 5
  },
  role: {
    fontSize: 14,
    marginBottom: 5
  },
  email: {
    fontSize: 14
  },
  inviteButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default SearchScreen;