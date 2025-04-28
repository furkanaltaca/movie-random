import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useMovie } from "../context/MovieContext";

const FavoritesScreen = ({ navigation }) => {
  const { favorites, removeFromFavorites } = useMovie();

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { item })}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w300${item.poster_path}` }}
          style={{ width: 200, height: 300 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeFromFavorites(item.id)}
        style={{
          marginTop: 10,
          backgroundColor: "#ccc",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "black" }}>Favorilerden Kaldır</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      {favorites.length === 0 ? (
        <Text>Henüz favorilere film eklenmedi.</Text>
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

export default FavoritesScreen;
