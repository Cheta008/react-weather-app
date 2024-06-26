import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Info from "./Info";
import Forecast from "./Forecast";

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);
   function displayResponse(response) {
    console.log(response.data.main)
    setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        city: response.data.city,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        icon: response.data.condition.icon,
        coordinates : response.data.coordinates
    });
   }

   function search() {
     let apiKey = "fbeat7a34efb4a7e60ae9e40fbb3ccoa";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
     axios.get(apiUrl).then(displayResponse)
   }

   function handleSubmit(event) {
    event.preventDefault()
    search();
   }

   function handleCity(event) {
    setCity(event.target.value);
   }
 
   if (weatherData.ready) {
     return (
        <div className="Weather">
            <form  onSubmit={handleSubmit}>
                <div className="row">
                 <div className="col-8">
                <input type="search" placeholder="Entre a city.." className="form-control" autoFocus="on" onChange={handleCity}/></div>
                 <div className="col-4">
                <input type="submit" value="Search" className="btn w-100 form-search" />
                </div>
                </div>
            </form>

            <Info data={weatherData}/>
            <Forecast coordinates={weatherData.coordinates}/>
            
        </div>
    );

   } else {
    search();
    return "Loading...";
   } 
}
