import { useState } from "react";
import { fetchMovieTrailer } from "../services/api";
import { saveMovie } from "../services/favoriteApi";
import { FaBookmark } from "react-icons/fa";

export default function MovieCard({ movie }: any) {

  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  // 🎬 Trailer
  const handleTrailer = async () => {
    const trailer = await fetchMovieTrailer(movie.id);

    if (trailer) {
      setTrailerKey(trailer.key);
      setShowTrailer(true);
    }
  };

  // save
  const handleSave = async () => {
    await saveMovie({
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      status: "saved",
    });

    alert("Movie Saved ✅");
  };

  return (
    <div className="movie-card">

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        className="movie-poster"
      />

      <h4 className="movie-title">{movie.title}</h4>

      {/* ✅ BUTTON ROW */}
      <div className="movie-buttons">

        <button onClick={handleTrailer}>
          ▶ Trailer
        </button>

        <button onClick={handleSave}>
          <FaBookmark /> Save
        </button>

      </div>

      {/* 🎬 Modal */}
      {showTrailer && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setShowTrailer(false)}>❌ Close</button>

            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}