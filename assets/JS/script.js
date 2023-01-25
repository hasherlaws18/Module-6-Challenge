
var apikey= '55c9bf562e70a13fd086546beacbd343'
var City= {city name}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="

//calling apis
function GetWeather(){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + City + '&appid=' + apikey;
    fetch(queryURL)
}