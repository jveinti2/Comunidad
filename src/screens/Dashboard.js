import { SafeAreaView } from "react-native-safe-area-context";
import CardNoticias from "../components/CardNoticias";

import React from "react";
import { View } from "react-native";

export default function Dashboard() {
  return (
    <SafeAreaView className="bg-emerald-200 h-full">
      <View>
        <CardNoticias />
      </View>
    </SafeAreaView>
  );
}
