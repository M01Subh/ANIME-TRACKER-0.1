import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  useColorScheme,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AddAnime() {
  const navigation = useNavigation();
  const systemScheme = useColorScheme();
  const [theme] = useState(systemScheme || "dark");
  const isDark = theme === "dark";

  // ✅ Hide default header
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Form states
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [cast, setCast] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Watching");

  const backgroundColor = isDark ? "#000" : "#fff";
  const textColor = isDark ? "#fff" : "#000";
  const cardColor = isDark ? "#1e1e1e" : "#f5f5f5";

  const statuses = ["Watching", "Completed", "On Hold", "Dropped"];

  const handleSave = () => {
    if (!title.trim() || !date.trim()) {
      Alert.alert("Missing Fields", "Please enter title and release date!");
      return;
    }

    console.log({ title, date, cast, description, status });
    Alert.alert("Success", "Anime added successfully!");
    navigation.goBack();
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor }]}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color={textColor} />
        </Pressable>
        <Text style={[styles.title, { color: textColor }]}>Add Anime</Text>
      </View>

      {/* Form */}
      <View style={[styles.formCard, { backgroundColor: cardColor }]}>
        <Text style={[styles.label, { color: textColor }]}>Title</Text>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: textColor }]}
          placeholder="Enter anime title"
          placeholderTextColor={isDark ? "#888" : "#666"}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={[styles.label, { color: textColor }]}>Release Date</Text>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: textColor }]}
          placeholder="YYYY-MM-DD"
          placeholderTextColor={isDark ? "#888" : "#666"}
          value={date}
          onChangeText={setDate}
        />

        <Text style={[styles.label, { color: textColor }]}>Main Cast</Text>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: textColor }]}
          placeholder="e.g., Eren, Mikasa, Armin"
          placeholderTextColor={isDark ? "#888" : "#666"}
          value={cast}
          onChangeText={setCast}
        />

        <Text style={[styles.label, { color: textColor }]}>Description</Text>
        <TextInput
          style={[
            styles.input,
            styles.textArea,
            { color: textColor, borderColor: textColor },
          ]}
          placeholder="Short description..."
          placeholderTextColor={isDark ? "#888" : "#666"}
          value={description}
          multiline
          onChangeText={setDescription}
        />

        <Text style={[styles.label, { color: textColor }]}>Status</Text>
        <View style={styles.statusContainer}>
          {statuses.map((s) => (
            <Pressable
              key={s}
              onPress={() => setStatus(s)}
              style={[
                styles.statusBtn,
                {
                  backgroundColor: s === status ? "#3B82F6" : cardColor,
                  borderColor: textColor,
                },
              ]}
            >
              <Text
                style={{
                  color: s === status ? "#fff" : textColor,
                  fontWeight: "600",
                }}
              >
                {s}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.button, { backgroundColor: "#3B82F6" }]}
            onPress={handleSave}
          >
            <Ionicons name="save-outline" size={20} color="#fff" />
            <Text style={styles.btnText}>Save</Text>
          </Pressable>

          <Pressable
            style={[styles.button, { backgroundColor: "#555" }]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="close-outline" size={20} color="#fff" />
            <Text style={styles.btnText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // 👈 keeps title left-aligned
    marginBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  formCard: {
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  statusContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  statusBtn: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
});
