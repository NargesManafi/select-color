import './app.css'

import React, { useState } from 'react';

import ColorSelect from './components/ColorSelector';
import Square from './components/Square';

function App() {
  const [color, setColor] = useState('');

  function handleChange(newColor) {
    setColor(newColor);
  }

  return (
    <div className='container'>
      <Square color={color} />
      <ColorSelect value={color} onChange={handleChange} />
    </div>
  );
}

export default App;