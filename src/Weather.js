import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });
   function displayResponse(response) {
    console.log(response.data.main)
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        city: response.data.city,
        date: "Wednesday 07:00",
        description: response.data.condition.description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });
   }
 
   if (weatherData.ready) {
     return (
        <div className="Weather">
            <form>
                <div className="row">
                 <div className="col-9">
                <input type="search" placeholder="Entre a city.." className="form-control" autoFocus="on"/></div>
                 <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
        
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img 
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                   />
                     <span className="temp">{Math.round(weatherData.temperature)}</span>
                     <span className="unit">°C</span>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );

   } else {
    let apiKey = "fbeat7a34efb4a7e60ae9e40fbb3ccoa";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(displayResponse)

    return "Loading...";
   } 
}
