import React from 'react';
import Component3 from './Component3'; // Assuming correct import path

const Component2 = () => {
  return (
    <div style={{ width: '250px' }} className="border ms-3">
      <h1>Component 02</h1>
      <Component3 />
    </div>
  );
};

export default Component2;
