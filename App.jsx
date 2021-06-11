import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "./src/screens/SignUpScreen";
import LogInScreen from "./src/screens/LogInScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoListScreen from "./src/screens/MemoListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MemoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
