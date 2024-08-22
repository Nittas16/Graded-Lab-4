
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Form3Screen = ({ navigation, route }) => {
  const { userDetails } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    if (cardNumber.length === 16 && expiryDate && cvv.length === 3) {
      // Update user profile with the collected details
      alert('Profile updated successfully!');
      navigation.navigate('HomeScreen', { updatedProfile: userDetails });
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.step}>Step 3/3</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Credit Card Number:</Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="Enter your credit card number"
          keyboardType="numeric"
          maxLength={16}
        />
        <Text style={styles.label}>Expiration Date (MM/YY):</Text>
        <TextInput
          style={styles.input}
          value={expiryDate}
          onChangeText={setExpiryDate}
          placeholder="MM/YY"
        />
        <Text style={styles.label}>CVV:</Text>
        <TextInput
          style={styles.input}
          value={cvv}
          onChangeText={setCvv}
          placeholder="Enter your CVV"
          keyboardType="numeric"
          maxLength={3}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    position: 'relative',
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
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
  submitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Form3Screen;
