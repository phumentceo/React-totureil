import React, { useContext } from 'react';
import Component2 from './Component2'; // Assuming correct import path
import { MainContext } from './Context';

const Component1 = () => {
  // Use the context
  const { color } = useContext(MainContext);

  return (
    <div style={{ width: '300px', backgroundColor: color }} className="border ms-3">
      <h1>Component 01</h1>
      <Component2 />
    </div>
  );
};

export default Component1;
