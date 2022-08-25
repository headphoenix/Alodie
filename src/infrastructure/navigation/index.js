import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { SignIn } from "../../features/SignIn/screens/signin.screen";



export const Navigation = () => {

  return (
    <NavigationContainer>
         {/* <AppNavigator />  */}
         <SignIn />
    </NavigationContainer>
  );
};