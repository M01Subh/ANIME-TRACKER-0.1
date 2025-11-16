import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import About from "./screens/About";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AddAnime from "./screens/AddAnime";
import EditAnime from "./screens/EditAnime";
import Details from "./screens/Details"; // ✅ new import

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#000" },
        }}
      >
        {user ? (
          <>
            <Stack.Screen
              name="Anime Tracker"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="AddAnime" component={AddAnime} />
            <Stack.Screen name="EditAnime" component={EditAnime} />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
