import React from 'react';
import './Bulb.css';

export default class Bulb extends React.Component {

    constructor(props) {
        super(props);
        this.color = props.color;
        this.getCurrentColor = props.getCurrentColor;
    }

    render() {
        if (this.color === this.getCurrentColor())
            return <div style={{ backgroundColor: this.color }} className="Bulb"></div>
        else
            return <div style={{ backgroundColor: "gray" }} className="Bulb"></div>
    }

}


