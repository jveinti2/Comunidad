import React from "react";
import Chat from "../screens/Chat";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
