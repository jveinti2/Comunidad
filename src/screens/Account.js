import { Text, View, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth, logout } = useAuth();

  return (
    <View>
      {auth ? (
        <View className="p-4 space-y-2">
          <View className="flex flex-row gap-1">
            <Image
              className="rounded h-20 w-20"
              source={require("../../assets/avatar.jpg")}
            />
            <View className="">
              <Text>{auth.name}</Text>
              <Text>Edad</Text>
              <Text>{auth.email}</Text>
            </View>
          </View>
          <View className="rounded p-2">
            <Text className=" font-normal">
              Hola! soy Jhonatan y me gustaria conocer gente nueva!
            </Text>
          </View>
          <View className="bg-cyan-600 rounded p-2">
            <Text className="font-bold text-white">Intereses</Text>
            <View className="flex flex-row gap-1">
              <Text className="text-white font-normal">Interes 1</Text>
              <Text className="text-white font-normal">Interes 1</Text>
              <Text className="text-white font-normal">Interes 1</Text>
            </View>
          </View>
          <View>
            <Button title="Salir" onPress={() => logout()} />
          </View>
        </View>
      ) : (
        <LoginForm />
      )}
    </View>
  );
}
