import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json'; 

const Prop4Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop4');
  return (
    <>
     
    <PropertyDetails property={property} />
    
    </>
    );
};

export default Prop4Page;