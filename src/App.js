import React, { Component } from 'react';
import logo from './logo.svg';
import CountDown from './counter/CountDown';
import CityWether from  './wether/CityWether'
import './App.css';
import './counter/CountDown.css';

class App extends Component {
  render() {
    return (
      <div>
      	 {/* <CountDown /> */} 
      	 <CityWether />
      </div>
    );
  }
}

export default App;
