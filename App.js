import { StatusBar } from "expo-status-bar";
import StackNavigator from "./navigators/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_300Light,
    Poppins_400Regular,
  });
  if (!fontsLoaded) return null;

  ///Navigation Container
  return (
    <NavigationContainer>
      <StatusBar style="dark"></StatusBar>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}
