import React, { useContext } from 'react';
import { MainContext } from './Context';

const Component3 = () => {
  const {message} = useContext(MainContext);
  return (
    <div style={{ width: '200px' }} className="border ms-3">
      <h1>Component 03</h1>
      <p>{message}</p>
    </div>
  );
};

export default Component3;
