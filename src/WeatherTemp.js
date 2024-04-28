import React from "react"; //I want to create a new state that tracks what units i am using

export default function WeatherTemp(props) {
  //now i need to create a const
  return (
    <div className="WeatherTemp">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">ºC</span>
    </div>
  );
}
