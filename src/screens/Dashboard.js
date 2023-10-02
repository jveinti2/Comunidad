import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CardNoticias from "../components/CardNoticias";

export default function Dashboard() {
  const [noticias, setNoticias] = useState([]);

  const loadNoticias = async () => {
    const noticiasArray = [];
    const res = await fetch("http://10.0.2.2:8000/api/noticias/");
    const data = await res.json();

    data.noticias.forEach((item) => {
      noticiasArray.push(item);
    });

    setNoticias(noticiasArray);
  };

  useEffect(() => {
    loadNoticias();
  }, []);

  return (
    <SafeAreaView className="bg-cyan-600 h-full">
      <View>
        <CardNoticias noticias={noticias} />
      </View>
    </SafeAreaView>
  );
}
