import React from "react";

export default function Temperature(props) {
        return (
        <span className="WeatherTemperature">
        <span className="temp">{Math.round(props.celsuis)}</span>
        <span className="unit">°C</span>
        </span>
        )
        }