import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ✅ UPDATED import
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// ✅ Firestore imports
import { getFirestore, setDoc, doc, serverTimestamp } from "firebase/firestore";

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerHandler() {
    if (!name || !email || !password) {
      Alert.alert("Missing Fields", "Please fill all required fields.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Save extra profile data in Firestore
      const db = getFirestore();
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        bio: bio || "N/A",
        favorites: [],
        joinedAt: serverTimestamp(),
      });

      Alert.alert("Success", "Account created!");

      // Clear inputs and navigate
      setName("");
      setBio("");
      setEmail("");
      setPassword("");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subheading}>Join the Anime Tracker family</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Bio (optional)"
        placeholderTextColor="#aaa"
        value={bio}
        onChangeText={setBio}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={registerHandler}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </Pressable>

      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  loginText: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
  },
});