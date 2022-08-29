import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Text,View } from "react-native";

import { AccountScreen } from "../../features/SignIn/screens/account.screen";
import { LoginScreen } from "../../features/SignIn/screens/login.screen";
import { RegisterScreen } from "../../features/SignIn/screens/register.screen";

const Stack = createStackNavigator();

const Ele = () => {
  <View>
    <Text>Hello</Text>
  </View>
}

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);