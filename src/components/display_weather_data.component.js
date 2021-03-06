import React, { Component } from 'react';

export default class DisplayWeatherData extends Component{

  render(){
      return(
      /* loop through each element in the weather_data array and
      create a row for each city */

      this.props.weather_data.map( (data, index) => {
        return(
        <div key={index} className="animated pulse">
          <span className="city-name city-data">{data.name}</span>
          <span className="city-temp city-data">{data.temp}</span>
          <span className="city-main city-data">{data.main}</span>
        </div>
      );
      })
    );
  }
}
