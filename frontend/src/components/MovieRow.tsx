import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  poster: string;
}

interface MovieRowProps {
  movies: Movie[];
}

const MovieRow = ({ movies }: MovieRowProps) => {
  return (
    <div className="movie-row">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieRow;