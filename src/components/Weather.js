import React from "react";
import DayIcon from "./DayIcon";
import Temperature from "./Temperature";

const Weather = ({ weatherData }) => {
  return (
    <div className="weather-container">
      {weatherData.map((day, idx) => {
        return (
          <div key={idx} id={idx === 0 ? "first-day" : ""} className="day">
            <DayIcon day={day} />

            <Temperature day={day} />
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
