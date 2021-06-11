import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MemoDetail"
        screenOptions={{
          headerStyle: { backgroundColor: '#467fd3' },
          headerTitleStyle: { color: '#fff' },
          headerTitle: 'Memo App',
        }}
      >
        <Stack.Screen
          name="MemoList"
          component={MemoListScreen}
        />
        <Stack.Screen
          name="MemoDetail"
          component={MemoDetailScreen}
        />
        <Stack.Screen
          name="MemoEdit"
          component={MemoEditScreen}
        />
        <Stack.Screen
          name="MemoCreate"
          component={MemoCreateScreen}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
