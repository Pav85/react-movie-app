const MovieCard = ({ movie }) => {
  const handleFavouriteClick = () => {
    console.log("Favourite button clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className="favourite-btn"
            onClick={handleFavouriteClick}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
