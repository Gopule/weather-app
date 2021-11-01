import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {
  setWeatherObjectAndWeatherArray,
  formatLocation,
  weatherArray,
} from "./functions/functions";
import Weather from "./components/Weather";
import logo from "./logo.svg";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setWeatherObjectAndWeatherArray(data.daily);
      setWeatherData(weatherArray);
      const formattedLocation = formatLocation(data.timezone);
      setLocation(formattedLocation);
    });
  }, []);

  return (
    <div className="wrapper">
      {!weatherArray.length ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : (
        <>
          <p className="location">{location}</p>

          <Weather weatherData={weatherData} />
        </>
      )}
    </div>
  );
};

export default App;
