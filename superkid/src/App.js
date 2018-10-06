// import React, { Component } from 'react'; import logo from './logo.svg';
import './App.css';
// import './scanTheQR';
import React, {Component} from 'react'
import QrReader from 'react-qr-reader'
import ScanTheQR from './ScanTheQR';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {

    return (
      <div className="parent">
        <div className="qr-scanner">
          <ScanTheQR/>

        </div>
        <Button className="scan-button" variant="contained" color="primary">
          Scan
        </Button>
      </div>
    )
  }
}

export default App;
