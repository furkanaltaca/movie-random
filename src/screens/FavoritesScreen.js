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
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = () => {
  const { favorites, removeFromFavorites } = useMovie();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { movie: item })}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}
          style={{ width: 200, height: 300 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeFromFavorites(item.id)}
        style={styles.buttonRemoveFavorite}
      >
        <Text style={styles.buttonText}>Favorilerden Kaldır 🗑️</Text>
      </TouchableOpacity>
    </View>
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
  buttonRemoveFavorite: {
    marginTop: 10,
    backgroundColor: "#213448",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
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
