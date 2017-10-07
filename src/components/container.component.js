import React, { Component } from 'react';
import SearchCity from './search.component';
import DisplayWeather from './displayweather.component';

/*The parent container component fot our application*/
export default class Container extends Component{
  render(){
    return(
      <div>
          <SearchCity />
          <DisplayWeather />
      </div>
    );
  }
}
