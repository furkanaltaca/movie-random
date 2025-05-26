import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useMovie } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const FavoritesScreen = () => {
  const { favorites } = useMovie();

  const renderItem = ({ item }) => (
    <MovieCard movie={item} showOverview={false} />
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.infoText}>Henüz favorilere film eklenmedi.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#547792",
    color: "white",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  infoText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default FavoritesScreen;
