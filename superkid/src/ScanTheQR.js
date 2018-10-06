// import React, { Component } from 'react'; import logo from './logo.svg';
import './App.css';
// import './scanTheQR';
import React, {Component} from 'react'
import QrReader from 'react-qr-reader'

class ScanTheQR extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 500,
      result: 'No result'
    }

    this.handleScan = this
      .handleScan
      .bind(this)
  }
  handleScan(result) {
    var data = {
      "name": "Collin Abidi",
      "age": 15,
      "age_months": 2,
      "age_weeks": 49,
      "name": "Price Witt",
      "gender": "male",
      "Notes": "Tumor is in remission, progress of medication appears to be positive",
      "primary_contact": [
        {
          "name": "Rosario Witt",
          "phone": "(412) 421-2512",
          "email": "rosariowitt@gmail.com",
          "relationship": "Mother"
        }
      ],
      "secondary_contacts": [
        {
          "name": "Jonathan Witt",
          "phone": "(412) 502-2220",
          "email": "wittywitt@gmail.com",
          "relationship": "Father"
        }
      ],
      "primary_physician": [
        {
          "name": "Bob Sponge",
          "phone": "(415) 405-9999",
          "email": "spongebob@upmc.org",
          "title": "Oncologist",
          "department": "Oncology"
        }
      ],
      "physician_history": [
        {
          "name": "Dr. Bob Sponge",
          "phone": "(415) 405-9999",
          "email": "spongebob@upmc.edu",
          "title": "Oncologist",
          "department": "Oncology"
        }, {
          "name": "Dr. Sandra Chec",
          "phone": "(415) 282-1123",
          "email": "schec@upmc.edu",
          "title": "Oncologist",
          "department": "Oncology"
        }
      ]
    };

    if (result) {
      this.setState(data)
    }
  }
  handleError(err) {
    console.error(err)
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320
    }

    return (
      <div className="qr-scanner">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}/>
        <p>{this.state.result}</p>
      </div>
    )
  }
}
export default ScanTheQR;
