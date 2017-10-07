import React, { Component } from 'react';
import GetWeather from './../scripts/search.js';
import ReactDOM from 'react-dom';

export default class SearchCity extends Component{
  constructor(props){
    super(props);

    // bind the ClickHandler to current component
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  ClickHandler(){
    // save the city name entered in the input box
    var city_name = ReactDOM.findDOMNode(this.refs.city).value;

    // let initial weather data be an empty object
    var weather_data={};

    // only load the data if some text has been entered in the input box
    if(city_name.trim().length > 0)
      {
          // make a call to load the weather data and pass the city
          GetWeather(city_name, function(data){

          // update the weather_data object with returned data from GetWeather
          weather_data = data;
          console.log(weather_data);
        });
      }
  }

  render(){
    return(
      <div>
        <input type="text" ref="city"/>
        <button onClick={this.ClickHandler}>Search</button>
      </div>
    );
  }
}
