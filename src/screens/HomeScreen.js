import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { fetchRandomMovie } from '../services/tmdb';
import { useMovie } from '../context/MovieContext';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToFavorites } = useMovie();
  const navigation = useNavigation();

  const getMovie = async () => {
    setLoading(true);
    try {
      const data = await fetchRandomMovie();
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleAddFavorite = () => {
    if (movie) addToFavorites(movie);
  };

  const handleDetail = () => {
    if (movie) navigation.navigate('Details', { movie });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="🎬 Rastgele Film Getir" onPress={getMovie} />
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}
      {movie && (
        <View style={styles.movieContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <TouchableOpacity onPress={handleDetail}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
              style={styles.poster}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddFavorite} style={styles.button}>
            <Text style={styles.buttonText}>Favorilere Ekle ❤️</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  movieContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 8,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#FF5A5F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
