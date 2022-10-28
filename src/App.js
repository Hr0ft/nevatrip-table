import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title_x">
          <div className="header">id</div>
          <div className="header">event_id</div>
          <div className="header">event_date</div>
          <div className="header">ticket_type</div>
          <div className="header">ticket_price</div>
          <div className="header">ticket_quantity</div>
          <div className="header">barcode</div>
          <div className="header">equal_price</div>
          <div className="header">total_price</div>
          <div className="header">created</div>
        </div>
        <div className="item">
          <div className="title id">1</div>
          <div className="title event_id">111</div>
          <div className="title event_date">22.11.22</div>
          <div className="tickets">
            <div className="title">
              <div className="ticket_type">adult</div>
              <div className="ticket_type">kid</div>
              <div className="ticket_type">preferential</div>
            </div>
            <div className="title ">
              <div className="ticket_price">4000</div>
              <div className="ticket_price">2000</div>
              <div className="ticket_price">1000</div>
            </div>
            <div className="title ticket_quantity">
              <div className="ticket_quantity">1</div>
              <div className="ticket_quantity">3</div>
              <div className="ticket_quantity">2</div>
            </div>
            <div className="title">
              <div className="barcode">11111</div>
              <div className="barcode">22221,22222,22223</div>
              <div className="barcode">33331,33332</div>
            </div>
            <div className="title">
              <div className="equal_price">4000</div>
              <div className="equal_price">6000</div>
              <div className="equal_price">2000</div>
            </div>
            <div className="title created">12000</div>
            <div className="title created">21.11.22</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
