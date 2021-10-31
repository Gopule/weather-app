import React from "react";

const Temperature = ({ day }) => {
  return (
    <div className="high-low">
      <p className="high-temp">{day.high}°</p>
      <p className="low-temp">{day.low}°</p>
    </div>
  );
};

export default Temperature;
