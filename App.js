import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}