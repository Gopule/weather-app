import React from "react";

const DayIcon = ({ day }) => {
  return (
    <div className="day-icon">
      <p className="day-name">{day.day}</p>
      <img
        src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
        alt={day.icon}
        className="weather-icon"
      />
    </div>
  );
};

export default DayIcon;
