import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
