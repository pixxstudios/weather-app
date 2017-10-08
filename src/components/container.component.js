import React, { Component } from 'react';
import SearchCity from './search.component';
import DisplayWeather from './displayweather.component';

/*The parent container component for the application*/
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
      weather_data:{}
    }
    // bind the updateWeatherData method to current component
    this.updateWeatherData = this.updateWeatherData.bind(this);
  }

  /* Is method is called from the clild component
  which loads the weather data and passes it to the parent component.
  The data in turn is passed to the DisplayWeather component via props
  for displying it on the screen
  */
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
