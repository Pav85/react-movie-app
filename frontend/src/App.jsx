import { Route, Routes } from "react-router-dom";
import "./css/App.css";

import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

const App = () => {
  // const apiKey = import.meta.env.VITE_API_KEY;
  // console.log("API Key:", apiKey);

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
