// import React, { Component } from 'react'; import logo from './logo.svg';
import './App.css';
// import './scanTheQR';
import React, {Component} from 'react'
import QrReader from 'react-qr-reader'
import ScanTheQR from './ScanTheQR';

class App extends Component {
  render() {

    return (
      <div className="parent">
        <div className="qr-scanner">
          <ScanTheQR/>
        </div>
      </div>
    )
  }
}

export default App;
