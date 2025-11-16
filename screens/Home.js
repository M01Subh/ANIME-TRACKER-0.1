import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  useColorScheme,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(systemScheme || "dark");
  const isDark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const backgroundColor = isDark ? "#000" : "#fff";
  const textColor = isDark ? "#fff" : "#000";
  const cardColor = isDark ? "#1e1e1e" : "#f0f0f0";

const animeList = [
  {
    id: 1,
    title: "Attack on Titan",
    date: "2013-04-07",
    cast: "Eren Yeager, Mikasa Ackerman, Armin Arlert",
    status: "On Hold",
    description:
      "Humanity fights for survival against man-eating Titans. The story follows Eren Yeager and his friends as they uncover the mysteries of their world and the Titans themselves.",
    image:
      "https://cdn.wallpapersafari.com/41/90/SlK0to.jpg",
    rating: "IMDb Rating: 9.1",
  },
  {
    id: 2,
    title: "Demon Slayer",
    date: "2019-04-06",
    cast: "Tanjiro Kamado, Nezuko Kamado, Zenitsu Agatsuma",
    status: "Watching",
    description:
      "Tanjiro Kamado becomes a Demon Slayer after his family is slaughtered and his sister Nezuko is turned into a demon.",
    image:
      "https://wallpapers.com/images/featured/demon-slayer-pictures-tsbyd3y88kxirm15.jpg",
    rating: "IMDb Rating: 8.6",
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    date: "2020-10-03",
    cast: "Yuji Itadori, Megumi Fushiguro, Nobara Kugisaki",
    status: "Completed",
    description:
      "A boy swallows a cursed talisman and becomes cursed himself. He enters a shaman school to locate the demon's remaining body parts and exorcise himself.",
    image:
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/10/jjk-characters-surviving.jpg",
    rating: "IMDb Rating: 8.5",
  },
  {
    id: 4,
    title: "Naruto",
    date: "2002-10-03",
    cast: "Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno",
    status: "Completed",
    description:
      "A young ninja strives to become the Hokage of his village while battling dark forces and his own inner demons.",
    image: "https://wallpapercave.com/wp/wp1835910.jpg",
    rating: "IMDb Rating: 8.4",
  },
  {
    id: 5,
    title: "Naruto: Shippuden",
    date: "2007-02-15",
    cast: "Naruto Uzumaki, Sasuke Uchiha, Kakashi Hatake",
    status: "Completed",
    description:
      "Naruto returns to his village after years of training to protect it from the Akatsuki and bring back Sasuke.",
    image: "https://images.alphacoders.com/606/thumb-1920-606284.jpg",
    rating: "IMDb Rating: 8.7",
  },
  {
    id: 6,
    title: "One Piece",
    date: "1999-10-20",
    cast: "Monkey D. Luffy, Roronoa Zoro, Nami",
    status: "Watching",
    description:
      "Monkey D. Luffy sails across the Grand Line with his pirate crew in search of the legendary treasure, One Piece.",
    image: "https://images4.alphacoders.com/133/thumb-1920-1336564.png",
    rating: "IMDb Rating: 9.0",
  },
  {
    id: 7,
    title: "Death Note",
    date: "2006-10-04",
    cast: "Light Yagami, L, Misa Amane",
    status: "Completed",
    description:
      "A high school student discovers a notebook that allows him to kill anyone by writing their name in it.",
    image: "https://images.alphacoders.com/666/thumb-1920-666580.jpg",
    rating: "IMDb Rating: 9.0",
  },
  {
    id: 8,
    title: "Fullmetal Alchemist: Brotherhood",
    date: "2009-04-05",
    cast: "Edward Elric, Alphonse Elric, Roy Mustang",
    status: "Completed",
    description:
      "Two brothers use alchemy in their quest to find the Philosopher’s Stone and restore their bodies.",
    image: "https://wallpapercave.com/wp/wp4382560.jpg",
    rating: "IMDb Rating: 9.1",
  },
  {
    id: 9,
    title: "My Hero Academia",
    date: "2016-04-03",
    cast: "Izuku Midoriya, Katsuki Bakugo, All Might",
    status: "On Hold",
    description:
      "In a world where superpowers called Quirks are common, a powerless boy dreams of becoming a hero.",
    image: "https://images6.alphacoders.com/909/thumb-1920-909641.jpg",
    rating: "IMDb Rating: 8.4",
  },
  {
    id: 10,
    title: "Tokyo Ghoul",
    date: "2014-07-04",
    cast: "Ken Kaneki, Touka Kirishima, Rize Kamishiro",
    status: "Completed",
    description:
      "A college student becomes part ghoul after a near-fatal encounter and must adapt to his new dual life.",
    image: "https://wallpapercave.com/wp/wp1822876.jpg",
    rating: "IMDb Rating: 7.8",
  },
  {
    id: 11,
    title: "One Punch Man",
    date: "2015-10-05",
    cast: "Saitama, Genos, Mumen Rider",
    status: "Watching",
    description:
      "Saitama, a hero who can defeat any enemy with a single punch, struggles with boredom and finding worthy opponents.",
    image: "https://images6.alphacoders.com/632/thumb-1920-632969.png",
    rating: "IMDb Rating: 8.7",
  },
  {
    id: 12,
    title: "Hunter x Hunter",
    date: "2011-10-02",
    cast: "Gon Freecss, Killua Zoldyck, Kurapika",
    status: "Completed",
    description:
      "Gon embarks on a journey to become a Hunter and find his father, facing dangerous adventures along the way.",
    image: "https://wallpapercave.com/wp/wp1845257.jpg",
    rating: "IMDb Rating: 9.0",
  },
  {
    id: 13,
    title: "Bleach",
    date: "2004-10-05",
    cast: "Ichigo Kurosaki, Rukia Kuchiki, Renji Abarai",
    status: "Completed",
    description:
      "Ichigo Kurosaki gains the powers of a Soul Reaper and defends humans from evil spirits.",
    image: "https://wallpapercave.com/wp/wp2000502.jpg",
    rating: "IMDb Rating: 8.3",
  },
  {
    id: 14,
    title: "Chainsaw Man",
    date: "2022-10-11",
    cast: "Denji, Power, Aki Hayakawa",
    status: "Watching",
    description:
      "A young man merges with his pet devil and becomes Chainsaw Man, fighting devils for survival and freedom.",
    image: "https://wallpapercave.com/wp/wp11948132.jpg",
    rating: "IMDb Rating: 8.5",
  },
  {
    id: 15,
    title: "Spy x Family",
    date: "2022-04-09",
    cast: "Loid Forger, Yor Forger, Anya Forger",
    status: "Watching",
    description:
      "A spy, an assassin, and a telepath pretend to be a family to complete their secret missions.",
    image: "https://images8.alphacoders.com/122/thumb-1920-1227296.jpg",
    rating: "IMDb Rating: 8.4",
  },
  {
    id: 16,
    title: "Dr. Stone",
    date: "2019-07-05",
    cast: "Senku Ishigami, Taiju Oki, Kohaku",
    status: "On Hold",
    description:
      "After humanity turns to stone, a brilliant scientist rebuilds civilization using science.",
    image: "https://wallpapercave.com/wp/wp4796750.jpg",
    rating: "IMDb Rating: 8.1",
  },
  {
    id: 17,
    title: "Haikyuu!!",
    date: "2014-04-06",
    cast: "Shoyo Hinata, Tobio Kageyama, Daichi Sawamura",
    status: "Completed",
    description:
      "A determined volleyball player teams up with a talented setter to make their team the best in Japan.",
    image: "https://wallpapercave.com/wp/wp1828072.jpg",
    rating: "IMDb Rating: 8.7",
  },
  {
    id: 18,
    title: "Black Clover",
    date: "2017-10-03",
    cast: "Asta, Yuno, Noelle Silva",
    status: "On Hold",
    description:
      "Asta, a boy born without magic, aims to become the Wizard King.",
    image: "https://wallpapercave.com/wp/wp4081033.jpg",
    rating: "IMDb Rating: 8.3",
  },
  {
    id: 19,
    title: "Blue Lock",
    date: "2022-10-09",
    cast: "Yoichi Isagi, Meguru Bachira, Rin Itoshi",
    status: "Watching",
    description:
      "Japan’s soccer team starts a radical training program to create the ultimate striker.",
    image: "https://wallpapercave.com/wp/wp11744603.jpg",
    rating: "IMDb Rating: 8.2",
  },
  {
    id: 20,
    title: "Vinland Saga",
    date: "2019-07-07",
    cast: "Thorfinn, Askeladd, Canute",
    status: "Completed",
    description:
      "A young Viking warrior seeks revenge for his father's murder while discovering peace.",
    image: "https://wallpapercave.com/wp/wp4598801.jpg",
    rating: "IMDb Rating: 8.8",
  },
  {
    id: 21,
    title: "Solo Leveling",
    date: "2024-01-07",
    cast: "Sung Jinwoo, Cha Hae-In, Yoo Jinho",
    status: "Watching",
    description:
      "A weak hunter gains the ability to level up endlessly after a mysterious encounter.",
    image: "https://wallpapercave.com/wp/wp13122460.jpg",
    rating: "IMDb Rating: 8.5",
  },
  {
    id: 22,
    title: "Oshi no Ko",
    date: "2023-04-12",
    cast: "Ai Hoshino, Aqua Hoshino, Ruby Hoshino",
    status: "Completed",
    description:
      "A reincarnation story that explores the dark side of the entertainment industry.",
    image: "https://wallpapercave.com/wp/wp12088479.jpg",
    rating: "IMDb Rating: 8.3",
  },
  {
    id: 23,
    title: "Attack on Titan: The Final Chapters",
    date: "2023-11-04",
    cast: "Eren Yeager, Mikasa Ackerman, Armin Arlert",
    status: "Completed",
    description:
      "The final confrontation between humanity and the Titans reveals Eren’s true intentions.",
    image: "https://wallpapercave.com/wp/wp13431561.jpg",
    rating: "IMDb Rating: 9.2",
  },
];

  const filters = ["All", "Watching", "Completed", "On Hold", "Dropped"];

  const filteredList = animeList.filter((anime) => {
    const matchesFilter =
      activeFilter === "All" || anime.status === activeFilter;
    const matchesSearch = anime.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: textColor }]}>Anime Tracker</Text>
        <View style={styles.headerIcons}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Ionicons
              name="person-circle-outline"
              size={28}
              color={textColor}
              style={{ marginRight: 15 }}
            />
          </Pressable>
          <Pressable onPress={toggleTheme}>
            <Ionicons
              name={isDark ? "sunny-outline" : "moon-outline"}
              size={26}
              color={textColor}
            />
          </Pressable>
        </View>
      </View>

      {/* Search Bar */}
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: cardColor, borderColor: textColor },
        ]}
      >
        <Ionicons name="search-outline" size={20} color={textColor} />
        <TextInput
          style={[styles.searchInput, { color: textColor }]}
          placeholder="Search anime..."
          placeholderTextColor={isDark ? "#888" : "#666"}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Filters */}
      <FlatList
        data={filters}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
        renderItem={({ item: f }) => (
          <Pressable
            onPress={() => setActiveFilter(f)}
            style={[
              styles.filterBtn,
              {
                backgroundColor: activeFilter === f ? "#3B82F6" : cardColor,
                borderColor: activeFilter === f ? "#3B82F6" : "#ccc",
              },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: activeFilter === f ? "#fff" : textColor },
              ]}
              allowFontScaling={true}
            >
              {f}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />

      {/* Anime List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {filteredList.length > 0 ? (
          filteredList.map((anime) => (
            <Pressable
              key={anime.id}
              style={[styles.card, { backgroundColor: cardColor }]}
              onPress={() => navigation.navigate("Details", { anime })}
            >
              <Image source={{ uri: anime.image }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, { color: textColor }]}>
                  {anime.title}
                </Text>
                <Text style={{ color: textColor }}>Launched: {anime.date}</Text>
                <Text style={{ color: textColor }}>Main Cast: {anime.cast}</Text>
                <Text style={{ color: textColor }}>{anime.rating}</Text>
                <Text
                  style={{
                    color:
                      anime.status === "Completed"
                        ? "skyblue"
                        : anime.status === "On Hold"
                        ? "orange"
                        : anime.status === "Watching"
                        ? "limegreen"
                        : "gray",
                    marginTop: 4,
                  }}
                >
                  Status: {anime.status}
                </Text>
              </View>
            </Pressable>
          ))
        ) : (
          <Text style={[styles.emptyText, { color: textColor }]}>
            No anime found.
          </Text>
        )}
      </ScrollView>

      {/* Floating Add Anime Button */}
      <Pressable
        style={styles.floatingBtn}
        onPress={() => navigation.navigate("AddAnime")}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },

  // Filter styling: flexible (no fixed width) and prevent shrinking
  filterContainer: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: "center",
  },
  filterBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18, // lets the label fit comfortably
    borderRadius: 12,
    marginHorizontal: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0, // prevent shrinking on small screens
    minHeight: 40,
  },
  filterText: {
    fontSize: 15,
    fontWeight: "600",
  },

  card: {
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
    opacity: 0.7,
  },
  floatingBtn: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#3B82F6",
    borderRadius: 50,
    padding: 14,
    elevation: 5,
  },
});