import "./select.css"

import React, { useState } from 'react';

function ColorSelect({ value, onChange }) {
  const [color, setColor] = useState('');

  function handleChange(event) {
    setColor(event.target.value);
    onChange(event.target.value);
  }

  return (
    <select className="select" value={value} onChange={handleChange}>
      <option value="">choose your color</option>
      <option value="orange">orange</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="yellow">Yellow</option>
    </select>
  );
}

export default ColorSelect;