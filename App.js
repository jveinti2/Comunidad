import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigaton from "./src/navigation/Navigaton";
import { AuthProvider } from "./src/context/authContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigaton />
      </AuthProvider>
    </NavigationContainer>
  );
}
