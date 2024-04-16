import React from 'react';
import PropertyDetails from '../../Components/PropertyDetails';
import propertyData from '../../properties.json'; // 


const Prop1Page = () => {
  const property = propertyData.properties.find(prop => prop.id === 'prop1');
  return (
    <>
   
    <PropertyDetails property={property} />
    </>
  );
};

export default Prop1Page;