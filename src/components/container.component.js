import React, { Component } from 'react';
import SearchCity from './search.component';
import DisplayWeather from './displayweather.component';

/*The parent container component fot our application*/
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
      weather_data:{}
    }
    this.updateWeatherData = this.updateWeatherData.bind(this);
  }

  updateWeatherData(weather_data){
    this.setState({
      weather_data: weather_data
    })
  }

  render(){
    return(
      <div className="display-weather-main">
          <SearchCity updateWeatherData={this.updateWeatherData}/>
          <DisplayWeather weather_data = {this.state.weather_data}/>
      </div>
    );
  }
}
