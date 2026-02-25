import { useEffect, useState } from "react";
import { getSavedMovies } from "../services/favoriteApi";

interface Movie {
  _id: string;
  title: string;
  poster: string;
}

export default function Watchlist() {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getSavedMovies().then((res:any) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div className="page">
      <h2>My Watchlist</h2>

      <div className="watchlist-grid">
        {movies.map(movie => (
          <div key={movie._id} className="watch-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}