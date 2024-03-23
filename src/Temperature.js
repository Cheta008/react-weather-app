import React, {useState} from "react";

export default function Temperature(props) {
    let [unit, setUnit] = useState("celsuis");
    function Farenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }

    function Celsuis(event) {
        event.preventDefault();
        setUnit("celsuis");
    }

    if (unit === "celsuis") {
        return (
        <span className="WeatherTemperature">
        <span className="temp">{Math.round(props.celsuis)}</span>
        <span className="unit">°C{" "}|{" "} <a href="/" onClick={Farenheit}>°F</a></span>
        </span>
    );
    } else {
        let farenheit = (props.celsuis * 9) / 5 + 32
        return (
        <span className="WeatherTemperature">
        <span className="temp">{Math.round(farenheit)}</span>
        <span className="unit"><a href="/" onClick={Celsuis}>°C</a>{" "} |{" "}°F</span>
        </span>
        );
    }
}