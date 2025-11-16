import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function EditAnime() {
  const route = useRoute();
  const navigation = useNavigation();
  const { anime } = route.params;
  const systemScheme = useColorScheme();
  const [theme] = useState(systemScheme || "dark");
  const isDark = theme === "dark";

  const [status, setStatus] = useState(anime.status);

  const backgroundColor = isDark ? "#000" : "#fff";
  const textColor = isDark ? "#fff" : "#000";
  const cardColor = isDark ? "#1e1e1e" : "#f0f0f0";

  const statusOptions = ["Watching", "Completed", "On Hold", "Dropped"];

  const handleSave = () => {
    alert(`Status updated to "${status}"`);
    navigation.goBack();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      {/* Image */}
      <Image source={{ uri: anime.image }} style={styles.image} />

      {/* Details */}
      <View style={[styles.detailsCard, { backgroundColor: cardColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{anime.title}</Text>
        <Text style={[styles.text, { color: textColor }]}>
          <Text style={styles.label}>Launched: </Text>
          {anime.date}
        </Text>
        <Text style={[styles.text, { color: textColor }]}>
          <Text style={styles.label}>Main Cast: </Text>
          {anime.cast}
        </Text>
        <Text style={[styles.text, { color: textColor }]}>
          <Text style={styles.label}>About: </Text>
          {anime.description}
        </Text>

        {/* Status Selection */}
        <Text style={[styles.statusLabel, { color: textColor }]}>
          Current Status:
        </Text>
        <View style={styles.statusContainer}>
          {statusOptions.map((option) => (
            <Pressable
              key={option}
              onPress={() => setStatus(option)}
              style={[
                styles.statusBtn,
                {
                  backgroundColor:
                    status === option ? "#3B82F6" : "transparent",
                  borderColor: "#3B82F6",
                },
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  { color: status === option ? "#fff" : textColor },
                ]}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Save Button */}
        <Pressable style={styles.saveBtn} onPress={handleSave}>
          <Ionicons name="save-outline" size={20} color="#fff" />
          <Text style={styles.saveText}>Save Status</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  detailsCard: {
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 22,
  },
  label: {
    fontWeight: "600",
  },
  statusLabel: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  statusBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  statusText: {
    fontSize: 15,
    fontWeight: "500",
  },
  saveBtn: {
    flexDirection: "row",
    backgroundColor: "#3B82F6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginTop: 20,
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
