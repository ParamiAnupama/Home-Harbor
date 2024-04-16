import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json'; 

const Prop3Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop3');
  return (
    <>
     
    <PropertyDetails property={property} />
    
    </>
    );
};

export default Prop3Page;