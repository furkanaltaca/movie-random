import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { fetchRandomMovie } from "../services/tmdb";
import MovieCard from "../components/MovieCard";

const HomeScreen = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      getMovie();
      hasLoaded.current = true;
    }
  }, []);

  const getMovie = async () => {
    setLoading(true);
    setMovie(null);
    try {
      const data = await fetchRandomMovie();
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonGetMovie} onPress={getMovie}>
        <Text style={styles.buttonText}>Rastgele Film Getir 🎬</Text>
      </TouchableOpacity>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#213448"
          style={styles.spinner}
        />
      )}
      {movie && <MovieCard movie={movie} showOverview={true} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#547792",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonGetMovie: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#213448",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
  },
  spinner: {
    alignSelf: "center",
  },
});

export default HomeScreen;
