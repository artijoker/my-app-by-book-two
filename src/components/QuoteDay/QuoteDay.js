import React from 'react';
import "./QuoteDay.css"
export default class QuoteDay extends React.Component {

  constructor(props) {
    super(props);
    this.author = props.author;
    this.quote = props.quote;

    this.state = {
      disabled: false
    }
  }
  
  render() {
    return <div className='QuoteDay'>
      <div style={{opacity: this.state.disabled ? 0 : 1}}>
        <p className='quote'>
          {this.quote}
        </p>
        <p className='author'>{this.author}</p>
      </div>
      <button onClick={() => {
          this.setState({ disabled: !this.state.disabled });
        }}>
        {this.state.disabled ? "Показать" : "Скрыть"}
      </button>

    </div>;
  }



}

