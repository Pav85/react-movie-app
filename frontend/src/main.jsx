import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { MovieProvider } from "./contexts/MovieProvider.jsx";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </HashRouter>
  </StrictMode>
);
