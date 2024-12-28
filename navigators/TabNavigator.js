import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import BookMark from "../pages/BookMark";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

//TabNavigator Holding below tabs
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Jobs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag-sharp" color={color} size={28} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="BookMark"
        options={{
          tabBarLabel: "BookMark",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmarks" size={24} color={color} />
          ),
        }}
        component={BookMark}
      />
    </Tab.Navigator>
  );
}
