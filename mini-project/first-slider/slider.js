const ul = document.body.querySelector("ul");
const leftButton = document.body.querySelector(".slider__left-button");
const rightButton = document.body.querySelector(".slider__right-button");
const sliderMaxWidth = ul.childElementCount * 130;
const slider = document.body.querySelector(".slider");
let isScroll = true;

rightButton.addEventListener("click", scrollRight);

function scrollRight() {
  ul.scrollTo({
    left: ul.scrollLeft + 410,
    top: 0,
    behavior: "smooth",
  });
}

leftButton.addEventListener("click", scrollLeft);

function scrollLeft() {
  ul.scrollTo({
    left: ul.scrollLeft - 410,
    top: 0,
    behavior: "smooth",
  });
}

slider.addEventListener("pointerout", sliderScroll);
slider.addEventListener("pointerover", sliderStop);

slider.addEventListener("pointerover", showHeart);
slider.addEventListener("pointerout", hideHeart);

slider.addEventListener("click", likeHeart);

function sliderScroll(event) {
  isScroll = true;
}

function sliderStop() {
  isScroll = false;
}

setInterval(() => {
  if (!isScroll) return;
  ul.scrollTo({
    left: ul.scrollLeft + 10,
    top: 0,
    behavior: "smooth",
  });
}, 30);

function showHeart(event) {
  if (!event.target.classList.contains("list__item")) return;

  event.target.firstElementChild.style.filter = "opacity(50%)";
}

function hideHeart(event) {
  if (!event.target.classList.contains("list__item")) return;

  event.target.firstElementChild.style.filter = "";
}

function likeHeart(event) {
  if (!event.target.classList.contains("list__item")) return;

  event.target.classList.toggle("like");
}
