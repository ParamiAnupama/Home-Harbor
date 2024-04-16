import React, { useState } from 'react';
import './Main.css'; 
import { useParams } from 'react-router-dom';
import data from '../properties.json'; 

const PropertyDetails = ({ onFavoriteToggle }) => {
  const { propertyId } = useParams();
  const selectedProperty = data.properties.find((property) => property.id === propertyId);
  const [isFavorite, setIsFavorite] = useState(false);
  const [viewAllImages, setViewAllImages] = useState(false);

  if (!selectedProperty) {
    return <p>Property not found</p>;
  }

  // Function to handle toggling favorites
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(selectedProperty, !isFavorite); // Toggle favorite status and update favorites list
  };

  // Function to handle toggling viewAllImages state
  const handleViewAllImages = () => {
    setViewAllImages(!viewAllImages);
  };

  return (
    <div className="property-details-page">
      <img
        src={require(`../Images/${selectedProperty.picture}`)}
        alt={`Large image for the ${selectedProperty.type}`}
        className="property-large-image"
      />

      <h1>{selectedProperty.title}</h1> 
      
      {/* Render "Remove from Favorites" button if property is in favorites */}
      {isFavorite ? (
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          Remove from Favorites
        </button>
      ) : (
        // Render "Add to Favorites" button if property is not in favorites
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          Add to Favorites
        </button>
      )}

      <p className="property-description">{selectedProperty.description}</p>
      <p>Type: {selectedProperty.type}</p>
      <p>Bedrooms: {selectedProperty.bedrooms}</p>
      <p>Price: {selectedProperty.price}</p>
      <p>Location: {selectedProperty.location}</p>

      <div className="thumbnail-container">
        {/* Render all thumbnail images if viewAllImages is true */}
        {viewAllImages && selectedProperty.thumbnailImages && selectedProperty.thumbnailImages.map((thumbnail, index) => (
          <img
            key={index}
            src={require(`../Images/${thumbnail}`)}
            alt={`Thumbnail ${index + 1} for the ${selectedProperty.type}`}
            className="thumbnail-image"
          />
        ))}
        {/* Render only the first thumbnail image initially */}
        {!viewAllImages && selectedProperty.thumbnailImages && selectedProperty.thumbnailImages.length > 0 && (
          <img
            src={require(`../Images/${selectedProperty.thumbnailImages[0]}`)}
            alt={`Thumbnail 1 for the ${selectedProperty.type}`}
            className="thumbnail-image"
          />
        )}

        {/* Conditionally render the "View All Images" or "Show Less" button based on whether there are more images to show */}
        {selectedProperty.thumbnailImages && selectedProperty.thumbnailImages.length > 1 && (
          <button className="view-all-images-button" onClick={handleViewAllImages}>
            {viewAllImages ? 'Show Less' : 'View All Images'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
