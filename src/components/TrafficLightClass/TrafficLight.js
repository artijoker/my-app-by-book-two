import React from 'react';
import Buib from './Bulb';
import './TrafficLight.css';


export default class TrafficLight extends React.Component {
  
  static #colors = [
    'red',
    'yellow',
    'green',
    'yellow',
  ];

  static get Colors() {
    return TrafficLight.#colors
  }

  constructor(props) {
    super(props);
    this.state = {
      currentColor: "red",
      count: 0
    };
  }

  getCurrentColor = () => this.state.currentColor;

  render() {
    return <div style={{ padding: "150px 0" }}>
      <div className="TrafficLight">
        <Buib color="red" getCurrentColor={this.getCurrentColor} />
        <Buib color="yellow" getCurrentColor={this.getCurrentColor} />
        <Buib color="green" getCurrentColor={this.getCurrentColor} />
      </div >
    </div>
  }

  nextColor = () => {
    let count = (this.state.count + 1) % TrafficLight.Colors.length;
    this.setState({
      currentColor: TrafficLight.Colors[count],
      count: count
    })
  }

  componentDidMount() {
    setInterval(this.nextColor, 1000);
  }

}

