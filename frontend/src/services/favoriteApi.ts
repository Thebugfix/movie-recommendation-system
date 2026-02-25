import axios from "axios";

const API = "https://movie-recommendation-system-ogcw.vercel.app/api/favorites";

export const saveMovie = (movie:any) =>
  axios.post(API, movie);

export const getSavedMovies = () =>
  axios.get(`${API}/saved`);