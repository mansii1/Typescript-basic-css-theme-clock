import "./style.css";

const hourEl = document.querySelector(".hour") as HTMLDivElement;
const minuteEl = document.querySelector(".minute") as HTMLDivElement;
const secondEl = document.querySelector(".second") as HTMLDivElement;
const timeEl = document.querySelector(".time") as HTMLDivElement;
const dateEl = document.querySelector(".date") as HTMLDivElement;
const toggle = document.querySelector(".toggle") as HTMLButtonElement; // ✅ if it's a button

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html") as HTMLHtmlElement;
  const target = e.target as HTMLElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();

  const hours = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const hoursForClock = hours % 12;
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minute < 10 ? `0${minute}` : minute
  } ${ampm}`;

  dateEl.innerHTML = `${days[day]} , ${months[month]} <span class="circle">${date}</span>`;
}

function scale(
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);
