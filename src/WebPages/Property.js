
import React from 'react';
import PropertyComponent from '../Components/PropertyComponent';
import '../Components/Main.css';
import data from '../properties.json';
import PropertyDetails from '../Components/PropertyDetails';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const PropertyPage = () => {
  const properties = data.properties;

  return (
    <Router>
      <div className="property-page">
        <h1>Property Page</h1>
        {properties.map((property) => (
          <div key={property.id}>
            <Link to={`/property/${property.id}`}>
              <PropertyComponent property={property} />
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/property/:propertyId" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default PropertyPage;
