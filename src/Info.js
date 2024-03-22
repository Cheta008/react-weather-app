import React from "react";
import FormatDate from "./FormatDate";
import MyIcon from "./MyIcon";

export default function Info(props) {
    return (
    <div>
        <h1>{props.data.city}</h1>
            <ul>
                <li><FormatDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <MyIcon code={props.data.icon}/>
                     <span className="temp">{Math.round(props.data.temperature)}</span>
                     <span className="unit">°C</span>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {Math.round(props.data.humidity)}%</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
            </div>
    </div>
    );
}