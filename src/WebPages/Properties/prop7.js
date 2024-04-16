import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json';

const Prop7Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop7');
  return (
    <>
     
    <PropertyDetails property={property} />
    
    </>
    );
};

export default Prop7Page;