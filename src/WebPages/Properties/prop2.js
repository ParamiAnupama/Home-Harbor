import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json'; 

const Prop2Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop2');
  return (
  <>
   
  <PropertyDetails property={property} />

  </>
  );
};

export default Prop2Page;