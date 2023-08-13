let div = document.createElement("div");
let spanHours = document.createElement("span");
let spanMinutes = document.createElement("span");
let spanSeconds = document.createElement("span");

div.className = "clock";
spanHours.className = "clock__hours";
spanMinutes.className = "clock__minutes";
spanSeconds.className = "clock__seconds";

spanHours.style.color = "red";
spanMinutes.style.color = "green";
spanSeconds.style.color = "blue";

spanHours.innerHTML = "hh:";
spanMinutes.innerHTML = "mm";
spanSeconds.innerHTML = ":ss";

let buttonStart = document.createElement("button");
let buttonStop = document.createElement("button");

buttonStart.className = "button__start button";
buttonStop.className = "button__stop button";

buttonStart.innerHTML = "Start";
buttonStop.innerHTML = "Stop";

div.append(spanHours, spanMinutes, spanSeconds);
document.body.append(div);
document.body.append(buttonStart, buttonStop);

buttonStart.style.margin = "5px";

buttonStart.setAttribute("onclick", "ClockStart()");
buttonStop.setAttribute("onclick", "clearInterval(StartInterval)");

let StartInterval;

function ClockStart() {
  StartInterval = setInterval(function () {
    let date = new Date();

    spanHours.innerHTML =
      (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    spanMinutes.innerHTML =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    spanSeconds.innerHTML =
      ":" +
      (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
  }, 1000);
}
