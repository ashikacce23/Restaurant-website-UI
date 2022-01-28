
import React from "react";
import Navbar from "./component/navbar/Navbar";
//import { ImFacebook2 } from "react-icons/im";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import Footer from "./component/footer/Footer";
import About from './pages/about/About';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
     
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipe" element={<Recipes />} />
                <Route path="about" element={<About />} />
      </Routes>

      <Footer />
     
 </BrowserRouter>
  );
}

export default App;
