// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { updatedProfile } = route.params || {};

  return (
    <View style={styles.container}>
      {updatedProfile ? (
        <>
          <Text style={styles.label}>Name: {updatedProfile.name}</Text>
          <Text style={styles.label}>Email: {updatedProfile.email}</Text>
          <Text style={styles.label}>Phone: {updatedProfile.phone}</Text>
          <Text style={styles.label}>Address: {updatedProfile.address}</Text>
          <Text style={styles.label}>City: {updatedProfile.city}</Text>
          <Text style={styles.label}>State: {updatedProfile.state}</Text>
          <Text style={styles.label}>ZIP Code: {updatedProfile.zip}</Text>
        </>
      ) : (
        <Text>No profile data available.</Text>
      )}
      {/* Add customization options here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
