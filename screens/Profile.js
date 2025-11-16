import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { auth } from "../firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchUser() {
      const db = getFirestore();
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);
        if (snap.exists()) setUserData(snap.data());
      }
    }
    fetchUser();
  }, []);

  async function logoutHandler() {
    await signOut(auth);
  }

  if (!userData) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{userData.name}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{userData.email}</Text>

      <Text style={styles.label}>Bio:</Text>
      <Text style={styles.text}>{userData.bio || "N/A"}</Text>

      <Text style={styles.label}>Favorites:</Text>
      <Text style={styles.text}>
        {userData.favorites?.length > 0
          ? userData.favorites.join(", ")
          : "No favorites added yet."}
      </Text>

      <Pressable style={styles.logoutBtn} onPress={logoutHandler}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>

      <Pressable
        style={styles.aboutBtn}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.aboutText}>About This App</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  label: {
    color: "#ccc",
    fontWeight: "600",
  },
  text: {
    color: "#fff",
    marginBottom: 10,
  },
  logoutBtn: {
    backgroundColor: "#b91c1c",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  aboutBtn: {
    backgroundColor: "#333",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  aboutText: {
    color: "#fff",
    textAlign: "center",
  },
  loading: {
    color: "#fff",
    textAlign: "center",
    marginTop: 40,
  },
});
