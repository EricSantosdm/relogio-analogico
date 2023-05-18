const hoursE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minute");
const secondsE1 = document.getElementById("second");
const dateE1 = document.getElementById("date");
const timeE1 = document.getElementById("time");
const toggle = document.getElementById("toggle2");

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function getTimePeriod() {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  if (hour >= 6 && hour < 12) {
    return "light";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "dark";
  }
}

function updateClock() {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const formattedHour = hour.toString().padStart(2, "0"); // Formata o número das horas com dois dígitos

  dateE1.innerHTML = `${days[day]}, ${date} ${months[month]}`;
  timeE1.innerHTML = `${formattedHour}:${minutes < 10 ? `0${minutes}` : minutes}`;

  hoursE1.style.transform = `translate(-50%, -100%) rotateZ(${hour * 30}deg)`;
  minutesE1.style.transform = `translate(-50%, -100%) rotateZ(${minutes * 6}deg)`;
  secondsE1.style.transform = `translate(-50%, -100%) rotateZ(${seconds * 6}deg)`;

  const html = document.querySelector("html");
  const mode = document.querySelector(".mode");
  const timePeriod = getTimePeriod();

  html.classList.remove("light", "afternoon", "dark");
  html.classList.add(timePeriod);
  
  if (timePeriod === "light") {
    mode.innerHTML = "Light Mode";
    toggle.classList.remove("active");
  } else if (timePeriod === "afternoon") {
    mode.innerHTML = "Afternoon Mode";
    toggle.classList.add("active");
  } else {
    mode.innerHTML = "Dark Mode";
    toggle.classList.add("active");
  }
}

setInterval(updateClock, 1000);
updateClock();
