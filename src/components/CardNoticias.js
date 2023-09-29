import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getNoticiasApi } from "../api/noticias";

export default function CardNoticias() {
  useEffect(() => {
    (async () => {
      await loadNoticias();
    })();
  }, []);

  const loadNoticias = async () => {
    try {
      const response = await getNoticiasApi();
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  return (
    <FlatList
      data={loadNoticias}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />

    // <View className="bg-white rounded-lg shadow-md p-4 m-2">
    //   <Text className="text-xl font-bold mb-2">title</Text>
    //   <Text className="text-base mb-4">description</Text>
    //   <TouchableOpacity
    //     onPress={() => {
    //       loadNoticias();
    //     }}
    //     className="bg-blue-500 rounded-md p-2"
    //   >
    //     <Text className="text-white font-semibold">Ver más</Text>
    //   </TouchableOpacity>
    // </View>
  );
}
