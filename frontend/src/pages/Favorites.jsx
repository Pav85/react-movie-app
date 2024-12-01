import "../css/Favorites.css";

import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/useMovieContext";

const Favorite = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
};

export default Favorite;
