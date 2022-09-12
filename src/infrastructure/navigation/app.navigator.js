import React, { useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "../../features/home/screens/home.screen"
import { SafeArea } from "../../components/utility/safe-area.component";

import { AuthenticationContext } from "../../services/authentication/authentication.context"



import { Text, TouchableOpacity } from "react-native";
import { HomeNavigator } from "./home.navigator";
const TAB_ICON = {
  Home: "md-home",
  Cards: "md-card",
  Activity: "md-settings",
};

const Tab = createBottomTabNavigator();

const Cards = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Activity = () => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
  <SafeArea>
    <Text>Map</Text>
    <TouchableOpacity onPress={() => onLogout()}>Log Out</TouchableOpacity>
  </SafeArea>
)};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false
  };
};

export const AppNavigator = () => (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#72BAFC",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Activity" component={Activity} />
    </Tab.Navigator>
);