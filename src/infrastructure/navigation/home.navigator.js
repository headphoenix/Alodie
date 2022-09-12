import React from "react";
import { Text, Platform } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { ScannerScreen } from "../../features/Scan/screens/scan.screen";
import { Home } from "../../features/home/screens/home.screen";

const HomeStack = createStackNavigator();


export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
            }}>
            <HomeStack.Screen 
              name='Home'
              component={Home}
            />
             <HomeStack.Screen 
              name='Scanner'
              component={ScannerScreen}
            />
        </HomeStack.Navigator>
    )
}