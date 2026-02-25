import axios from "axios";

const API = "http://localhost:5000/api/favorites";

export const saveMovie = (movie:any) =>
  axios.post(API, movie);

export const getSavedMovies = () =>
  axios.get(`${API}/saved`);