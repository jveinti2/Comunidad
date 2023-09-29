import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigaton from "./src/navigation/Navigaton";

export default function App() {
  return (
    <NavigationContainer>
      <Navigaton />
    </NavigationContainer>
  );
}
