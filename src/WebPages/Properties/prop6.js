import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json'; 

const Prop6Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop6');
  return (
    <>
     
    <PropertyDetails property={property} />
    
    </>
    );
};

export default Prop6Page;