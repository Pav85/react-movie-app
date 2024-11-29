import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "Matrix", release_date: "1999" },
    { id: 2, title: "Inception", release_date: "2010" },
    { id: 3, title: "Interstellar", release_date: "2014" },
    { id: 4, title: "Dunkirk", release_date: "2017" },
    { id: 5, title: "Tenet", release_date: "2020" },
    { id: 6, title: "The Matrix Resurrections", release_date: "2021" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
