import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import AddAnime from "../screens/AddAnime";
import EditAnime from "../screens/EditAnime";
import Details from "../screens/Details"; // ✅ Ensure file name is exactly 'Details.js'
import Profile from "../screens/Profile";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAnime"
        component={AddAnime}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditAnime"
        component={EditAnime}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: true,
          title: "Anime Details",
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          title: "Your Profile",
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: true,
          title: "About",
          headerStyle: { backgroundColor: "#121212" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}
