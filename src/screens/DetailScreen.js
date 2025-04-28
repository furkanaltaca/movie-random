import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const DetailScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        {movie.title}
      </Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={{ width: 300, height: 450 }}
        resizeMode="contain"
      />
      <Text style={{ marginTop: 15, fontSize: 16, lineHeight: 22 }}>
        {movie.overview}
      </Text>
      <Text style={{ marginTop: 10 }}>Yayın Tarihi: {movie.release_date}</Text>
      <Text>IMDB Puanı: {movie.vote_average}</Text>
    </ScrollView>
  );
};

export default DetailScreen;
