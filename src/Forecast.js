import React from "react";
import MyIcon from "./MyIcon"
import "./Forecast.css";

export default function Forecast () {
    return (
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="Forecast-day">Thu</div>
                    <MyIcon code="clear-sky-night" size={36}/>
                    <div className="Forecast-temperatires">
                        <span className="Forecast-max">19</span>
                        <span className="Forecast-min">10</span>
                        </div>
                </div>
            </div>
        </div>
    )
}