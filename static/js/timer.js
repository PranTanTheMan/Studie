const timer = document.querySelector(".timer");
const minDiv = document.querySelector(".min");
const secDiv = document.querySelector(".sec");
const startButton = document.querySelector(".start");
localStorage.setItem("button", "start");
let init, totalSeconds, percent, min, sec, paused;

// Start timer on click of start button
startButton.addEventListener("click", () => {
  let button = localStorage.getItem("button");
  // start/end
  if (button === "start") {
    min = +localStorage.getItem("startTime") || 25;
  } else {
    min = +localStorage.getItem("breakTime") || 25;
  }
  totalSeconds = min * 60;
  sec = min * 60;
  setTimeout(decrement(), 60);
  startButton.style.transform = "scale(0)";
  paused = false;
});

// Timer is running
function decrement() {
  minDiv.textContent = Math.floor(sec / 60);
  secDiv.textContent = sec % 60 > 9 ? sec % 60 : `0${sec % 60}`;
  if (sec > 0) {
    percent = Math.ceil(((totalSeconds - sec) / totalSeconds) * 100);
    setProgress(percent);
    sec--;
    init = window.setTimeout("decrement()", 1000);
  } else {
    min = 0;
    sec = 0;
    let button = localStorage.getItem("button");

    if (button === "start") {
      startButton.textContent = "break";
      startButton.classList.add("break");
      localStorage.setItem("button", "break");
    } else {
      startButton.classList.remove("break");
      startButton.textContent = "start";
      localStorage.setItem("button", "start");
    }
    startButton.style.transform = "scale(1)";
  }
}

const startTimeInput = document.querySelector("#pomodoro");
const breakTimeInput = document.querySelector("#shortBreak");
const pauseButton = document.querySelector(".pause");

startTimeInput.value = localStorage.getItem("startTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("startTime", startTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  startButton.style.transform = "scale(1)";
  clearTimeout(init);
  setProgress(0);
  minDiv.textContent = "0";
  secDiv.textContent = "00";
});

pauseButton.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    init = setTimeout(decrement(), 60);
    pauseButton.textContent = "pause";
    pauseButton.classList.remove("resume");
  } else {
    clearTimeout(init);
    pauseButton.textContent = "resume";
    pauseButton.classList.add("resume");
    paused = true;
  }
});

const circleRing = document.querySelector(".ring-circle");
const radius = circleRing.r.baseVal.value;
const circum = radius * 2 * Math.PI;

circleRing.style.strokeDasharray = circum;
circleRing.style.strokeDashoffset = circum;

function setProgress(percent) {
  const offset = circum - (percent / 100) * circum;
  circleRing.style.strokeDashoffset = offset;
}
