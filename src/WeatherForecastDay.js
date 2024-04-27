import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  //it will return the actual data for the day
  return (
    <div>
      <div className="WeatherForecast-day">{forecast[0].temperature.day} </div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {Math.round(props.data.temperature.maximum)}º
        </span>
        <span className="WeatherForecast-temperatures-min">
          {" "}
          {Math.round(props.data.temperature.minimum)}º
        </span>
      </div>
    </div>
  );
}
