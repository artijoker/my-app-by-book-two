import React, { useState } from 'react';
import './Bulb.css';

function Bulb(props) {
    if(props.color === props.currentColor())
        return <div style={{ backgroundColor: props.color }}  className="Bulb"></div>
    else
        return <div style={{ backgroundColor: "gray" }}  className="Bulb"></div>
  }
  
  export default Bulb;
  