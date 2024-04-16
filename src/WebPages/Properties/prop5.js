import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json'; 
const Prop5Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop5');
  return (
    <>
     
    <PropertyDetails property={property} />
    
    </>
    );
};

export default Prop5Page;