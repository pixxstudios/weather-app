import React, { Component } from 'react';

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
