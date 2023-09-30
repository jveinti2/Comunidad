import { Text, FlatList, View, TouchableOpacity } from "react-native";
import React from "react";

export default function CardNoticias(props) {
  const { noticias } = props;

  return (
    <FlatList
      data={noticias}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => Math.random().toString()}
      renderItem={({ item }) => (
        <View className="bg-white rounded-lg shadow-md p-4 m-2">
          <Text className="text-xl font-bold mb-2">{item.author}</Text>
          <Text className="text-gray-600 mb-2">{item.author}</Text>
          <Text className="text-gray-800">{item.author}</Text>
          <View className="flex flex-row gap-2">
            <TouchableOpacity className="bg-blue-500 text-white mt-2 p-2 rounded">
              <Text className="text-center">{item.author}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 text-white mt-2 p-2 rounded">
              <Text className="text-center">{item.author}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}
