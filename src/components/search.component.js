import React, { Component } from 'react';
import GetWeather from './../scripts/search.js';
import ReactDOM from 'react-dom';

export default class SearchCity extends Component{
  constructor(props){
    super(props);

    this.state = {
      updateWeatherData : this.props.updateWeatherData
    }
    // bind the ClickHandler to current component
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  ClickHandler(){
    var _this = this;

    // save the city name entered in the input box
    var city_name = ReactDOM.findDOMNode(this.refs.city).value;

    // only load the data if some text has been entered in the input box
    if(city_name.trim().length >= 3)
      {
          // make a call to load the weather data and pass the city
          GetWeather(city_name)
          .then(function(weather_data){
            // update the weather_data object with returned data from GetWeather
            _this.state.updateWeatherData(weather_data);

            ReactDOM.findDOMNode(_this.refs.city).value='';
          })
      }
  }

  render(){
    return(
      <div className="search-header">
        Cities <input type="text" ref="city" className="search-box"/>
        <button onClick={this.ClickHandler} className="search-button">Search</button>
      </div>
    );
  }
}
