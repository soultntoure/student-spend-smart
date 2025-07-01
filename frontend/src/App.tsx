import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

// Placeholder for screen components
const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Welcome to StudentSpendSmart!</Text>
    <Text style={styles.subtitle}>Your personal finance companion.</Text>
    {/* Navigation links will go here */}
  </SafeAreaView>
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'StudentSpendSmart' }} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;
