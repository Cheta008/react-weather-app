import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForeacastDay";


export default function Forecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(()=> {
     setLoaded(false);
    },[props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
         return (
        <div className="Forecast">
            <div className="row">
               {forecast.map(function(dailyForecast,index) {
                 if (index < 5) {
                  return (
                  <div className="col" key={index}>
                   <ForecastDay data={dailyForecast}/>
                </div>
              );
            } else {
                return null;
            }
          })}
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