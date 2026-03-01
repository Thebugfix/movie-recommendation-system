import axios from "axios";

const API = `${import.meta.env.VITE_BACKEND_URL}/favorites`;

export const saveMovie = (movie:any) =>
  axios.post(API, movie);

export const getSavedMovies = () =>
  axios.get(`${API}/saved`);