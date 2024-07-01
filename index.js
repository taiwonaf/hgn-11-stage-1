const currentDay = document.getElementById("currentDay");
const currentTime = document.getElementById("currentTime");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDay.textContent = weekdays[new Date().getUTCDay()];

setInterval(() => (currentTime.textContent = new Date().toUTCString()), 1000);
