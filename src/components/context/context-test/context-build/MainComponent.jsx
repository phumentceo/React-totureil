import React from 'react';
import Component1 from './Component1';
import { MainContext } from './Context';

const MainComponent = () => {
  return (
    <div>
      {/* Providing the correct value */}
      <MainContext.Provider value={{ color: 'red',message : "fuck you" }}>
        <Component1 />
      </MainContext.Provider>
    </div>
  );
};

export default MainComponent;
