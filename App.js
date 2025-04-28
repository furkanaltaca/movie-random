import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { MovieProvider } from './src/context/MovieContext';

export default function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </MovieProvider>
  );
}