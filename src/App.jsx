import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import axios from "axios";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPassword from "./pages/ResetPassword";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const API_URL = "http://www.omdbapi.com/?apikey=b84a86dc";

  const searchMovies = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`);
    const data = await response.data;
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <Container maxW="container.xl">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/password_reset" element={<ResetPassword />} />
        <Route
          path="/movies"
          element={
            <Movies
              movies={movies}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              searchMovies={searchMovies}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
