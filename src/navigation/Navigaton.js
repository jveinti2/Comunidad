import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountStack from "./AccountStack";
import Icon from "react-native-vector-icons/FontAwesome5";
import DashboardStack from "./DashboardStack";

const Tab = createBottomTabNavigator();

export default function Navigaton() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarLabel: "Mural",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
