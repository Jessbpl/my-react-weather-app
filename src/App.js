import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Jessbpl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jessica Bravo
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Jessbpl/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/melodic-donut-43fc9d/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
