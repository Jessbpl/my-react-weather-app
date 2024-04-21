import React, { useState } from "react"; //I want to create a new state that tracks what units i am using

export default function WeatherTemp(props) {
  //now i need to create a const
  const [unit, setUnit] = useState("celsius");
  let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <strong>ºC</strong>|
          <a className="templink" href="/" onClick={convertToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{fahrenheit}</span>
        <span className="unit">
          <a className="templink" href="/" onClick={convertToCelsius}>
            ºC
          </a>
          | <strong>ºF</strong>
        </span>
      </div>
    );
  }
}
