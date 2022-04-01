"use strict";

function showTime() {
  const clock = document.querySelector("#clock");
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  if (hour >= 12) {
    hour = hour - 12 + " PM";
  } else {
    hour = hour + " AM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }
  clock.innerHTML = `${hour} : ${minute} : ${second}`;
  setTimeout(showTime, 1000);
}

showTime();
