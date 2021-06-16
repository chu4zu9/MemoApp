import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import firebase from 'firebase';

import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyD02ABZcgXBapXdOEB7jq7BaxcAbgFzsfk',
  authDomain: 'memoapp-36f02.firebaseapp.com',
  projectId: 'memoapp-36f02',
  storageBucket: 'memoapp-36f02.appspot.com',
  messagingSenderId: '298822376830',
  appId: '1:298822376830:web:7ae0225b33b7fffd1a272f',
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#467fd3' },
          headerTitleStyle: { color: '#fff' },
          headerTitle: 'Memo App',
          headerTintColor: '#fff',
          headerBackTitle: 'Back',
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
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
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
