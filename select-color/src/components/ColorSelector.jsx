import "./select.css"

import React, { useState } from 'react';

import ColorBox from './ColorBox';

const ColorSelector=({value,onChange}) =>{
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <select className='select' value={selectedColor} onChange={handleColorChange}>
        <option value="">choose your color</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="pink">pink</option>
      </select>
      <ColorBox color={selectedColor} />
    </div>
  );
}

export default ColorSelector;