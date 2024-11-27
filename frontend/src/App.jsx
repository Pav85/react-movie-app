import "./App.css";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <>
      <MovieCard movie={{ title: "Matrix", release_date: "1999" }} />
    </>
  );
};

export default App;
