// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {

  const [ cars, setCarsPosition ] = useState({
      red: false,
      blue: false,
      yellow: false,
  })

  function moveCar(car, side) {
    setCarsPosition({
        ...cars,
        [car]: side,
    });
  };

    const context = {
      cars,
      moveCar: moveCar,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  };

export default Provider;
