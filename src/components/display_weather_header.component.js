import React, { Component } from 'react';

// Generates the header for showing city, temp and condition
export default class DisplayWeatherHeader extends Component{
  render(){
    return(
      <div>
        <span className="city-name city-header">City</span>
        <span className="city-temp city-header">Temperature</span>
        <span className="city-main city-header">Condition</span>
      </div>
    )
  }
}
