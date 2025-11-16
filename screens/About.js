// screens/About.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Anime Tracker is a React Native application designed to help users keep
        track of their anime watchlist.
      </Text>

      <Text style={styles.section}>Developer</Text>
      <Text style={styles.text}>Subham Gautam</Text>
      <Text style={styles.text}>Email: subham433gautam@gmail.com</Text>
      <Text style={styles.text}>Professional Email: 23BCS10085@cuchd.in</Text>

      <Text style={styles.section}>Version</Text>
      <Text style={styles.text}>1.0.0</Text>
      <Text style={styles.footer}>© 2025 All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 8,
  },
  section: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 18,
  },
  footer: {
    color: "#777",
    marginTop: 30,
    textAlign: "center",
  },
});
