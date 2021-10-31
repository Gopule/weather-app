import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setWeatherData(data);
    });
  }, []);

  const weatherArray = [];

  const weatherObject = {
    0: { day: "Sun", high: 0, low: 0, icon: "" },
    1: { day: "Mon", high: 0, low: 0, icon: "" },
    2: { day: "Tue", high: 0, low: 0, icon: "" },
    3: { day: "Wed", high: 0, low: 0, icon: "" },
    4: { day: "Thu", high: 0, low: 0, icon: "" },
    5: { day: "Fri", high: 0, low: 0, icon: "" },
    6: { day: "Sat", high: 0, low: 0, icon: "" },
  };

  const formatTimeStampToDayNumber = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.getDay();
  };

  const helper = (arr) => {
    for (let i = 0; i < 5; i++) {
      const dayWeatherData = arr[i];
      const day = weatherObject[formatTimeStampToDayNumber(dayWeatherData.dt)];
      day.high = Math.round(dayWeatherData.temp.max);
      day.low = Math.round(dayWeatherData.temp.min);
      day.icon = dayWeatherData.weather[0].icon;
      weatherArray.push(day);
    }
  };
  if (weatherData.daily) helper(weatherData.daily);
  const alphabet = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
    G: true,
    H: true,
    I: true,
    J: true,
    K: true,
    L: true,
    M: true,
    N: true,
    O: true,
    P: true,
    Q: true,
    R: true,
    S: true,
    T: true,
    U: true,
    V: true,
    W: true,
    X: true,
    Y: true,
    Z: true,
  };

  const formatLocation = (string) => {
    let location = "";
    let start = false;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "/") start = true;
      if (start && alphabet[string[i]]) location += string[i];
      else location += " ";
    }
    return location;
  };

  console.log(weatherData);

  return (
    <div className="wrapper">
      {weatherData.timezone && (
        <p className="location">{formatLocation(weatherData.timezone)}</p>
      )}
      <div className="weather-container">
        {weatherArray.map((day, idx) => {
          return (
            <div key={idx} id={idx === 0 ? "first-day" : ""} className="day">
              <div className="day-icon">
                <p className="day-name">{day.day}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  alt={day.icon}
                  className="weather-icon"
                />
              </div>
              <div className="high-low">
                <p className="high-temp">{day.high}°</p>
                <p className="low-temp">{day.low}°</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
