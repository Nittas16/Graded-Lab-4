import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../context/CartContext';
const foodItems = [
  {
    id: '1',
    name: 'Burger',
    description: 'Juicy grilled burger with cheese',
    price: 'R50',
    image: require('../assets/burger.jpeg'),
  },
  {
    id: '2',
    name: 'Pizza',
    description: 'Cheesy pepperoni pizza',
    price: 'R120',
    image: require('../assets/pizza.jpeg'),
  },
  {
    id: '3',
    name: 'Sushi',
    description: 'Fresh sushi with wasabi',
    price: 'R200',
    image: require('../assets/sushi.jpeg'),
  },
  {
    id: '4',
    name: 'Pasta',
    description: 'Creamy Alfredo pasta',
    price: 'R110',
    image: require('../assets/pasta.jpeg'),
  },
  {
    id: '5',
    name: 'Salad',
    description: 'Healthy green salad',
    price: 'R40',
    image: require('../assets/salad.jpeg'),
  },
  {
    id: '6',
    name: 'Steak',
    description: 'Grilled steak with herbs',
    price: 'R180',
    image: require('../assets/steak.jpeg'),
  },
];

const MenuScreen = () => {
  const { addToCart } = useCart();
  const [selectedItems, setSelectedItems] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert('Added to Cart', `${item.name} added to cart!`);
    setSelectedItems(prevItems => ({
      ...prevItems,
      [item.id]: (prevItems[item.id] || 0) + 1
    }));
  };

  const handleIncreaseQuantity = (itemId) => {
    setSelectedItems(prevItems => ({
      ...prevItems,
      [itemId]: Math.min((prevItems[itemId] || 0) + 1, 5)  // Max 5 items
    }));
  };

  const handleDecreaseQuantity = (itemId) => {
    setSelectedItems(prevItems => ({
      ...prevItems,
      [itemId]: Math.max((prevItems[itemId] || 0) - 1, 0)
    }));
  };

  const renderItem = ({ item }) => {
    const quantity = selectedItems[item.id] || 0;

    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        {quantity > 0 ? (
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
          </View>
        ) : (
          <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={foodItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default MenuScreen;






