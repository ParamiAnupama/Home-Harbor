import React, { useState, useEffect } from 'react';
import '../Components/Main.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites;
  });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (propertyId) => {
    const updatedFavorites = favorites.filter((property) => property.id !== propertyId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-page">
      <h1>Favorites Page</h1>
      {favorites.length === 0 ? (
        <p>No favorites selected.</p>
      ) : (
        <div>
          {favorites.map((property) => (
            <div key={property.id} className="favorite-property">
              <h2 className="property-type">{property.type}</h2>
              <p className="property-description">{property.description}</p>
              <p className="property-details">Bedrooms: {property.bedrooms}</p>
              <p className="property-details">Price: {property.price}</p>
              <button
                className="remove-favorite-button"
                onClick={() => handleRemoveFavorite(property.id)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
