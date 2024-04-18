import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Jessica Bravo and
          <a
            href="https://github.com/Jessbpl/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            is open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
