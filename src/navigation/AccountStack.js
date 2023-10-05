import React from "react";
import Account from "../screens/Account";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}
