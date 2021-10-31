import alphabet from "./alphabet";

export const weatherArray = [];

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

export const setWeatherObjectAndWeatherArray = (arr) => {
  for (let i = 0; i < 5; i++) {
    const dayWeatherData = arr[i];
    const day = weatherObject[formatTimeStampToDayNumber(dayWeatherData.dt)];
    day.high = Math.round(dayWeatherData.temp.max);
    day.low = Math.round(dayWeatherData.temp.min);
    day.icon = dayWeatherData.weather[0].icon;
    weatherArray.push(day);
  }
};

export const formatLocation = (string) => {
  let location = "";
  let start = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "/") start = true;
    if (start && alphabet[string[i]]) location += string[i];
    else location += " ";
  }
  return location;
};
