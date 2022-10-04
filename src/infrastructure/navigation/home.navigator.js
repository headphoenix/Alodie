import React from "react";
import { Text, Platform } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Pass } from "../../features/Scan/screens/pass.screen";
import { Home } from "../../features/home/screens/home.screen";
import { Send } from "../../features/Scan/screens/send.screen";
import { Confirm } from "../../features/Scan/screens/confirm";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Send" component={Send} />
      <HomeStack.Screen name="Pass" component={Pass} />
      <HomeStack.Screen name="Confirm" component={Confirm} />
    </HomeStack.Navigator>
  );
};
