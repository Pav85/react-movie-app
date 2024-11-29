import { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {
      id: 1,
      title: "Matrix",
      release_date: "1999",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      release_date: "1994",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    },
    {
      id: 3,
      title: "The Godfather",
      release_date: "1972",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    },
    {
      id: 4,
      title: "Scarface",
      release_date: "1983",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg",
    },
    {
      id: 5,
      title: "The Jurrassic Park",
      release_date: "1993",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
    },
    {
      id: 6,
      title: "Goodfellas",
      release_date: "1990",
      poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search button clicked");
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies"
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
