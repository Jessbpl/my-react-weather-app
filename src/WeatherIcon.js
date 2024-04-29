import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherIcon = ({ code, size = 64 }) => {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN", // Corrected typo in codeMapping key
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  console.log("Received size:", size);
  return (
    <div>
      <ReactAnimatedWeather
        icon={codeMapping[code]}
        color="#fff"
        size={size}
        animate={true}
      />
    </div>
  );
};

export default WeatherIcon;
