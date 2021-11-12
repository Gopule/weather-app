import React from "react";
import DayIcon from "./DayIcon";
import Temperature from "./Temperature";

const Weather = ({ weatherData, setShowModal, setModalData }) => {
  return (
    <div className="weather-container">
      {weatherData.map((day, idx) => {
        return (
          <div
            key={idx}
            id={idx === 0 ? "first-day" : ""}
            className="day"
            onClick={() => {
              setModalData(day);
              setShowModal(true);
            }}
          >
            <DayIcon day={day} />

            <Temperature day={day} />
          </div>
        );
      })}
    </div>
  );
};

export default Weather;
