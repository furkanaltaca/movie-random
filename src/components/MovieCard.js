import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useMovie } from "../context/MovieContext";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ movie, showOverview = false }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useMovie();
  const navigation = useNavigation();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  const handleNavigate = () => {
    navigation.navigate("Details", { movie });
  };

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
        resizeMode="cover"
      />
      <Text style={styles.title}>{movie.title}</Text>

      {showOverview && movie.overview ? (
        <Text numberOfLines={4} style={styles.overview}>
          {movie.overview}
        </Text>
      ) : null}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={handleToggleFavorite}
          style={[
            styles.button,
            { backgroundColor: isFavorite ? "#4CAF50" : "#FF5A5F" },
          ]}
        >
          <Text style={styles.buttonText}>
            {isFavorite ? "Favorilerden Çıkar ❌" : "Favorilere Ekle ❤️"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNavigate}
          style={[
            styles.button,
            { backgroundColor: "#2196F3", marginLeft: 10 },
          ]}
        >
          <Text style={styles.buttonText}>Detaya Git 🎬</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "transparent",
    elevation: 3,
    alignItems: "center",
  },
  poster: {
    width: 250,
    height: 375,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  overview: {
    fontSize: 14,
    color: "#fff",
    textAlign: "justify",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default MovieCard;
