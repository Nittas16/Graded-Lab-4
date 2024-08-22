
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/app_logo.jpg'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Text style={styles.title}>Anitas Speedy Eats</Text>
      <Text style={styles.slogan}>Your favorite meals delivered fast!</Text>

            <TouchableOpacity
        style={[styles.button, styles.setupButton]}
        onPress={() => navigation.navigate('Form1Screen')}
      >
        <Text style={styles.buttonText}>Set up your profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.orderButton]}
        onPress={() => navigation.navigate('MenuScreen')}
      >
        <Text style={styles.buttonText}>Order Here</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.cartButton]}
        onPress={() => navigation.navigate('CartScreen')}
      >
        <Text style={styles.buttonText}>View Cart</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, styles.profileButton]}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  slogan: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: 'green', 
  },
  cartButton: {
    backgroundColor: 'green', 
  },
  profileButton: {
    backgroundColor: '#add8e6', 
  },
  setupButton: {
    backgroundColor: '#d8bfd8',
  },
});

export default HomeScreen;
