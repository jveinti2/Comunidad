import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CardNoticias from "../components/CardNoticias";
import { getNoticiasApi } from "../api/noticias";

export default function Dashboard() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    (async () => {
      await loadNoticias();
    })();
  }, []);

  const loadNoticias = async () => {
    try {
      const response = await getNoticiasApi();
      const noticiasArray = [];

      response.map((noticia) => {
        noticiasArray.push({
          author: noticia.author,
        });
      });

      setNoticias(noticiasArray);
    } catch (error) {
      throw error;
    }
  };

  return (
    <SafeAreaView className="bg-emerald-200 h-full">
      <View>
        <CardNoticias noticias={noticias} />
      </View>
    </SafeAreaView>
  );
}
