import PropTypes from "prop-types";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const handleFavouriteClick = () => {
    console.log("Favorite button clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={handleFavouriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
