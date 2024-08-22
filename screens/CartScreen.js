import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useCart } from '../context/CartContext'; 

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.price}>Price: {item.price}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  const totalCost = cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.totalCost}>Total: ${totalCost}</Text>
      <Button title="Clear Cart" onPress={clearCart} />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Form1Screen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalCost: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default CartScreen;
