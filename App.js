import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './context/CartContext';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import Form1Screen from './screens/Form1Screen';
import Form2Screen from './screens/Form2Screen';
import Form3Screen from './screens/Form3Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Form1Screen" component={Form1Screen} />
        <Stack.Screen name="Form2Screen" component={Form2Screen} />
        <Stack.Screen name="Form3Screen" component={Form3Screen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
