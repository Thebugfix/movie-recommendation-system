import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (category: string) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${category}?api_key=${API_KEY}`
  );

  return res.data.results;
};

export const fetchMovieTrailer = async (movieId: number) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  const trailer = res.data.results.find(
    (v: any) => v.type === "Trailer"
  );

  return trailer;
};