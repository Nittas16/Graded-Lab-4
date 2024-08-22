
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Form2Screen = ({ navigation, route }) => {
  const { userDetails } = route.params;
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleNext = () => {
    if (address && city && state && zip) {
      navigation.navigate('Form3Screen', {
        userDetails: { ...userDetails, address, city, state, zip },
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.step}>Step 2/3</Text>
      <Text style={styles.title}>Address Details</Text>
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={setState}
        placeholder="Enter your state"
      />
      <Text style={styles.label}>ZIP Code:</Text>
      <TextInput
        style={styles.input}
        value={zip}
        onChangeText={setZip}
        placeholder="Enter your ZIP code"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  step: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Form2Screen;
