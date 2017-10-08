import config from '../config/config.js';
import $ from 'jquery';

let GetWeather = function(city){
  return new Promise( function(resolve, reject){
   $.ajax({
     url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}`,
     type : "get",
     dataType : "json",
     success : (data) => resolve(data),
     error : (err) => reject(err)
   })
 })
}

export default GetWeather;
