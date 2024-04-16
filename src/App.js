import React,  { useState } from "react";
import "./App.css";
import Navbar from "./Components/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch
} from "react-router-dom";
import LogoMain from "./Components/Logo(Main)";
import Properties from "./WebPages/PropertySearch";
import SignIn from "./WebPages/SignIn";
import SignUp from "./WebPages/SignUp";
import FavoritesPage from './WebPages/Favourites';
import "./Components/Main.css";
import PropertyDetails from "./Components/PropertyDetails";


const App = () => {
    const [favorites, setFavorites] = useState(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return storedFavorites;
    });
  
    const handleFavoriteToggle = (property, isFavorite) => {
      if (isFavorite) {
        // Add to favorites
        const updatedFavorites = [...favorites, property];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      } else {
        // Remove from favorites
        const updatedFavorites = favorites.filter((favProperty) => favProperty.id !== property.id);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
    };

    return (
        
        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LogoMain/>} />
                <Route path="/properties" element={<Properties/>} />
                <Route path="/favourites" element={<FavoritesPage/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/property/:propertyId" element={<PropertyDetails onFavoriteToggle={handleFavoriteToggle} />} />
            </Routes>
        </Router>

        
        </>
    );

    
}
 
export default App;