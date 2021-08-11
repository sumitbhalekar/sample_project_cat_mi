/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from './src/MainScreen';
import { SecondScreen } from './src/SecondScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
