import axios from "axios";

const API_KEY = "ff53509c0b9d5ff2abbb84cd9bad6ace";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchRandomMovie = async () => {
  try {
    const langs = ["tr", "en"];
    const selectedLang = langs[Math.floor(Math.random() * langs.length)];

    const randomPage = Math.floor(Math.random() * 500) + 1;

    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        language: "tr-TR",
        sort_by: "popularity.desc",
        page: randomPage,
        with_original_language: selectedLang,
      },
    });

    const movies = response.data.results;

    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      return movies[randomIndex];
    } else {
      throw new Error("No movies found");
    }
  } catch (error) {
    console.error("Error fetching movie:", error.message);
    throw error;
  }
};
