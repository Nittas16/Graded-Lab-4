
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Form1Screen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (name && email && phone) {
      navigation.navigate('Form2Screen', { userDetails: { name, email, phone } });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.step}>Step 1/3</Text>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
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

export default Form1Screen;
