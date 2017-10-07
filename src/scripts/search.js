import API_KEY from '../config/config.js';
import $ from 'jquery';
console.log($);

let GetWeather = function(city, callback){
 $.ajax({
   url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY.API_KEY}`,
   type : "get",
   dataType : "json",
   success : dataLoaded
 })

function dataLoaded(data){
    callback(data);
}
}

export default GetWeather;
