import PropTypes from "prop-types";
import { useContext } from "react";
import { MovieProvider } from "../contexts/MovieProvider";
import { useMovieContext } from "../contexts/useMovieContext";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  useContext(MovieProvider);
  const handleFavoriteClick = () => {
    console.log("Favorite button clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title || "No title available"}
        />

        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0] || "Unknown Year"}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
