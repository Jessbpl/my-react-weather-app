import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Madrid" />

        <footer>
          This project was coded by Jessica Bravo and
          <a
            href="https://github.com/Jessbpl/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            is open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
