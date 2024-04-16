// src/PropertySearch.js

import React, { useState } from 'react';
import data from '../properties.json';
import '../Components/Main.css'; 
import { Link } from 'react-router-dom'; 

const PropertySearch = () => {
  const [searchParams, setSearchParams] = useState({
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    afterDate: '',
    betweenStartDate: '',
    betweenEndDate: '',
    postcode: '',
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  const filterProperties = () => {
    
    const newFilteredProperties = data.properties.filter((property) => {
      
      return (
        (searchParams.type === 'any' || property.type === searchParams.type) &&
        (searchParams.minPrice === '' || property.price >= parseInt(searchParams.minPrice, 10)) &&
        (searchParams.maxPrice === '' || property.price <= parseInt(searchParams.maxPrice, 10)) &&
        (searchParams.minBedrooms === '' || property.bedrooms >= parseInt(searchParams.minBedrooms, 10)) &&
        (searchParams.maxBedrooms === '' || property.bedrooms <= parseInt(searchParams.maxBedrooms, 10)) &&
        (searchParams.afterDate === '' || new Date(property.added.year, monthToIndex(property.added.month), property.added.day) >= new Date(searchParams.afterDate)) &&
        (searchParams.postcode === '' || property.location.startsWith(searchParams.postcode))
      );
    });

    setFilteredProperties(newFilteredProperties);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  // Helper function to convert month name to index
  const monthToIndex = (month) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months.indexOf(month);
  };

  return (
        <div className="formblock_container">
        <h1 className='properties_h1'>Property Search</h1>

        <form>

          <div className="form-container">
          
          <div className="form-cols">

          <label className="form-label">
            Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select
              className="form-input"
              name="type"
              value={searchParams.type}
              onChange={handleInputChange}
            >
              <option value="any">Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              
            </select>
          </label>

          <br/>
        
          <label className="form-label">
            Min Price:
            <input
              className="form-input"
              type="number"
              name="minPrice"
              value={searchParams.minPrice}
              onChange={handleInputChange}
              step={10000}
            />
          </label>
          <br/>
          <label className="form-label">
            Max Price:
            <input
              className="form-input"
              type="number"
              name="maxPrice"
              value={searchParams.maxPrice}
              onChange={handleInputChange}
              step={10000}
            />
          </label>
          
          <br/>
          <label className="form-label">
            After Date:
            <input
              className="form-input"
              type="date"
              name="afterDate"
              value={searchParams.afterDate}
              onChange={handleInputChange}
            />
          </label>

        </div>

        <div className="form-cols">

        <label className="form-label">
            Postcode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="form-input"
              type="text"
              name="postcode"
              value={searchParams.postcode}
              onChange={handleInputChange}
            />
          </label>

          <br/>

        <label className="form-label">
            Min Bedrooms:
            <input
              className="form-input"
              type="number"
              name="minBedrooms"
              value={searchParams.minBedrooms}
              onChange={handleInputChange}
            />
          </label>
        
          <br/>
          
          <label className="form-label">
            Max Bedrooms:
            <input
              className="form-input"
              type="number"
              name="maxBedrooms"
              value={searchParams.maxBedrooms}
              onChange={handleInputChange}
            />
          </label>
          
          <br />
          <button className="form-button" type="button" onClick={filterProperties}>
            Search
          </button>

          </div>
          
          </div>

          
        </form>

  {filteredProperties.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul className="results-list">
            {filteredProperties.map((property) => (

              <li key={property.id} className="result-item">
                
                <div className="result-container">
                    <Link to={`/property/${property.id}`}>
                      
                      <img
                        src={require(`../Images/${property.picture}`)}
                        alt={`Thumbnail for the house`}
                        className="result-thumbnail"
                      />
                    </Link> 
                    <div className="result-description">
                      <p className="result-heading">{property.title}</p><br/><br/>
                      <p className="result-body">Type: {property.type}</p><br/>
                      <p className="result-body">Bedrooms: {property.bedrooms}</p><br/>
                      <p className="result-body">Price: {property.price}</p><br/>
                      <p className="result-body">Location: {property.location}</p>
                    </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertySearch;
