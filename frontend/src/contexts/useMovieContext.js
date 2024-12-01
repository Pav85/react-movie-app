import { useContext } from "react";
import { MovieContext } from "./MovieProvider";

export const useMovieContext = () => useContext(MovieContext);
