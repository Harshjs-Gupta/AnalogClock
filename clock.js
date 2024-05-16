// Targeted Element
const hourhand = document.querySelector(".hour-hand");
const minutehand = document.querySelector(".minute-hand");
const secondhand = document.querySelector(".second-hand");

const Clock = () => {
  const now = new Date();
  const second = now.getSeconds();
  const secdegree = (second / 60) * 360 + 90;
  secondhand.style.transform = `rotate(${secdegree}deg)`;

  const minute = now.getMinutes();
  const mindegree = (minute / 60) * 360 + (second / 60) * 6 + 90; //((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minutehand.style.transform = `rotate(${mindegree}deg)`;

  const hour = now.getHours();
  const hrdegree = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  hourhand.style.transform = `rotate(${hrdegree}deg)`;
};
setInterval(Clock, 1000);
