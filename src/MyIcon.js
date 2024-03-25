import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function MyIcon(props) {
    const Map = {
        "clear-sky-day":"CLEAR_DAY",
        "clear-sky-night":"CLEAR_NIGHT",
        "few-clouds-day":"PARTLY_CLOUDY_DAY",
        "few-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day":"PARTLY_CLOUDY_DAY",
        "scattered-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day":"CLOUDY",
        "broken-clouds-night":"CLOUDY",
        "rain-day":"RAIN",
        "rain-night":"RAIN",
        "shower-rain-day":"RAIN",
        "shower-rain-night":"RAIN",
        "thunderstorm-day":"RAIN",
        "thunderstorm-night":"RAIN",
        "snow-day":"SLOW",
        "snow-night":"SLOW",
        "mist-day":"FOG",
        "mist-night":"FOG",
    };
    
    return (
    <ReactAnimatedWeather
    icon={Map[props.code]}
    color="#1e1e1e"
    size={props.size}
    animate={true}
  />
    )
}