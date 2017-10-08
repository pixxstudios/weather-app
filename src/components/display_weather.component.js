import React, { Component } from 'react';
import DisplayWeatherHeader from './display_weather_header.component';
import DisplayWeatherData from './display_weather_data.component';

export default class DisplayWeather extends Component{
constructor(props)
{
  super(props);

  // this array will store all the data which was searched
  this.all_cities_data=[];

  this.state = {
    weather_data:[]
  }
}

componentWillReceiveProps(props){
  
  let required_weather_data ={};

  // extract the relevant data which we need to display
  // and store it inside an object
  if(props.weather_data){
    required_weather_data.name = props.weather_data.name;
    required_weather_data.temp = (props.weather_data.main.temp- 273.15).toFixed(2);
    required_weather_data.main = props.weather_data.weather[0].main;
  }

  // push it inside the required_weather_data array
  this.all_cities_data.push(required_weather_data);

  // update the state with newly received data
  this.setState({
    weather_data : this.all_cities_data
  })
}

render(){
  return(
      <div>
        <DisplayWeatherHeader />
        <DisplayWeatherData weather_data={this.state.weather_data}/>
      </div>
    )
  }
}
