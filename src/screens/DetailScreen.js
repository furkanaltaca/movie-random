import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useMovie } from '../context/MovieContext';

const DetailScreen = ({ route }) => {
  const movie = route?.params?.movie;
  const { favorites, addToFavorites, removeFromFavorites } = useMovie();

  if (!movie) {
    return (
      <View style={styles.center}>
        <Text>Film verisi yüklenemedi.</Text>
      </View>
    );
  }

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    isFavorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>

      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
        resizeMode="cover"
      />

      <Text style={styles.overview}>{movie.overview || 'Açıklama bulunamadı.'}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>📅 Yayın Tarihi:</Text>
        <Text style={styles.infoValue}>{movie.release_date || 'Bilinmiyor'}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>⭐ IMDB:</Text>
        <Text style={styles.infoValue}>{movie.vote_average || '-'}</Text>
      </View>

      <TouchableOpacity
        onPress={handleToggleFavorite}
        style={[
          styles.button,
          { backgroundColor: isFavorite ? '#4CAF50' : '#FF5A5F' },
        ]}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'Favorilerden Çıkar ❌' : 'Favorilere Ekle ❤️'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  overview: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  infoValue: {
    color: '#555',
  },
  button: {
    marginTop: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DetailScreen;
