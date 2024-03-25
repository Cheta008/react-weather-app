import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForeacastDay";


export default function Forecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
         return (
        <div className="Forecast">
            <div className="row">
               <ForecastDay data={forecast[0]}/>
            </div>
        </div>
    );

   
    } else {
    let apiKey = "fbeat7a34efb4a7e60ae9e40fbb3ccoa";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    }
}