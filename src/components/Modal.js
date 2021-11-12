import React from "react";

const Modal = ({ showModal, setShowModal, modalData }) => {
  const showHideClasseName = showModal
    ? "overlay display-block"
    : "overlay display-none";
  //humidity % / air pressue hPa / wind MPH
  return (
    <div className={showHideClasseName}>
      <div className="modal-main">
        <span className="close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <div className="modal-text">
          <p>Humidity: {modalData.humidity}%</p>
          <p>Air Pressure: {modalData.airPressure} hPa</p>
          <p>Wind: {modalData.windSpeed} MPH</p>
          <p>High: {modalData.high}°</p>
          <p>Low: {modalData.low}°</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
