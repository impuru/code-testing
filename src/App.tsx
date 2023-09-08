import React, { useState } from 'react';
import './App.css';
import Ranger from './Components/Ranger';
import Triangle from './Components/Triangle';

function App() {
  const [number, setNumber] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setHeight(isNaN(value) ? 0 : value)
  }
  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setWidth(isNaN(value) ? 0 : value)
  }

  return (
    <div className="">
      <Ranger />
      <div className="card">
        <Triangle width={width} height={height} />
        <div className="d-flex spacing">
          <div className='flex-1'>
            <label htmlFor="height-input">Height:</label>
            <input type="number" id='height-input'
              value={height}
              onChange={handleHeightChange} />
          </div>
          <div className='flex-1'>
            <label htmlFor="width-input">Width:</label>
            <input type="number" id='width-input'
              value={width}
              onChange={handleWidthChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
