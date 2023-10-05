import { View, Text, Button } from "react-native";
import { useState } from "react";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BtnLike() {
  const [like, setLike] = useState(true);

  const Icon = like ? (
    <FontAwesome
      name="heart"
      size={25}
      color={"red"}
      onPress={() => setLike(!like)}
    />
  ) : (
    <FontAwesome5
      name="heart"
      size={25}
      color={"black"}
      onPress={() => setLike(!like)}
    />
  );

  return <View>{Icon}</View>;
}
