import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../pages/OnBoarding";
import TabNavigator from "./TabNavigator";
import Details from "../pages/Details";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="HomeStack" component={TabNavigator}></Stack.Screen>
      <Stack.Screen name="Details" component={Details}></Stack.Screen>
    </Stack.Navigator>
  );
}
