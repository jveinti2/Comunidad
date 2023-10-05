import { Text, FlatList, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import BtnChat from "./BtnChat";
import BtnConfirm from "./BtnConfirm";
import BtnLike from "./BtnLike";
export default function CardNoticias(props) {
  const { noticias } = props;

  return (
    <FlatList
      data={noticias}
      showsVerticalScrollIndicator={false}
      keyExtractor={() => Math.random().toString()}
      renderItem={({ item }) => (
        <View className="bg-white rounded-lg shadow-md p-2 m-2">
          <View className="flex flex-row gap-1 items-center">
            <Image
              source={require("../../assets/avatar.jpg")}
              className="rounded-full h-7 w-7"
            />
            <Text className="text-gray-800">{item.autor}</Text>
          </View>
          <View className="px-1">
            <Text className="text-xl font-bold mb-2">{item.titulo}</Text>
            <Text className="text-gray-600 mb-2">{item.contenido}</Text>
            <View className="flex flex-row gap-2 justify-between items-center">
              <View className="flex flex-row gap-2">
                <View>
                  <BtnChat />
                </View>
                <View>
                  <BtnConfirm />
                </View>
              </View>
              <View>
                <BtnLike />
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
}
