import React from "react";

const Weather = props => (
    <div>
        {props.city &&
        <div>
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Температура: {Math.round(props.temp - 273.15)}</p>
            <p>Давление: {props.pressure }</p>
            <p>Закат: {props.sunset}</p>
        </div>
        }
        <p>{props.error}</p>
    </div>
)

export default Weather