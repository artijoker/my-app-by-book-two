import React, { useState } from 'react';
import Buib from './Bulb';
import './TrafficLight.css';

var count = 0;
const colors = [
  'red',
  'yellow',
  'green',
  'yellow',
];

export default function TrafficLight() {
  const [currentColor, setCurrentColor] = useState("red");

  return <div style={{ padding: "150px 0" }}>
    <div className="TrafficLight">
      <Buib color="red" currentColor={() => currentColor} />
      <Buib color="yellow" currentColor={() => currentColor} />
      <Buib color="green" currentColor={() => currentColor} />
      <button onClick={() => {
        count = (count + 1) % colors.length;
        setCurrentColor(colors[count]);
      }}>
        Next
      </button>
    </div>
  </div>

}

