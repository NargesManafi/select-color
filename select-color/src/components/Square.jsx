import "./Square.css"

import React from 'react';

function Square({color}) {
  return (
    <div className="box"
      style={{
        backgroundColor:color,
      }}
    />
  );
}

export default Square;