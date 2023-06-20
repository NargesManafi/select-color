import "./box.css"

import React from 'react';

const ColorBox=({ color }) =>{
  return <div className='box' style={{backgroundColor:color,}}></div>;
}

export default ColorBox;