import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const { anime } = route.params;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#000", padding: 20 }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Image
        source={{ uri: anime.image }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {anime.title}
      </Text>

      <Text style={{ color: "#ccc", marginTop: 5 }}>Release: {anime.date}</Text>
      <Text style={{ color: "#ccc", marginTop: 5 }}>
        Cast: {anime.cast || "N/A"}
      </Text>
      <Text style={{ color: "#ccc", marginTop: 5 }}>
        Status: {anime.status}
      </Text>

      <Text style={{ color: "#aaa", marginTop: 15, lineHeight: 20 }}>
        {anime.description}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("EditAnime", { anime })}
        style={{
          backgroundColor: "#1e90ff",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Edit Anime</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
