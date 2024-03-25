import React from "react";
import MyIcon from "./MyIcon";

export default function ForecastDay(props) {
    function max() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`
    }

     function min() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`
    }

    function day() {
        let date = new Date(props.data.time * 1000);
       let day = date.getDay();

        let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];

    

        return days[day];
    }


    return (
         <div className="col">
                    <div className="Forecast-day">{day()}</div>
                    <MyIcon code={props.data.condition.icon} size={36}/>
                    <div className="Forecast-temperatires">
                        <span className="Forecast-max">{max()}</span>
                        <span className="Forecast-min">{min()}</span>
                        </div>
                </div>
    )
}