import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function BtnChat() {
  return (
    <TouchableOpacity className="bg-blue-500 text-white mt-2 p-2 rounded-full">
      <Text className="text-center text-white font-bold">
        <Icon name="comment" size={15} color={"white"} />
        Chat
      </Text>
    </TouchableOpacity>
  );
}
