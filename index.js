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

setInterval(() => {
  currentTime.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}, 1000);
