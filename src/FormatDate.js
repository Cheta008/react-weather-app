import React from "react";

export default function FormatDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minites = props.date.getMinutes();

    if (hours < 10 ) {
        hours = `0${hours}`;
    }

    if (minites < 10 ) {
        minites = `0${minites}`;
    }
    

    return (
        <div>
            {day} {hours}:{minites}
        </div>
    );

}