import React, { useState } from 'react';
import "./Randomizer.css";

export default function Randomizer(props) {
  const [value, setValue] = useState(0);
  
  return <div className='Randomizer'>
    <h1>Генератор случайных чисел от {props.min} до {props.max}</h1>
    <p>{value}</p>
    <button onClick={() => {
      setValue(getRandomValue(props.min, props.max + 1));
    }}>
      Сгенерировать число
    </button>
  </div>
}

function getRandomValue(min, max) {
  return Math.floor((Math.random() * max) + min);
}
