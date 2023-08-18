const ul = document.body.querySelector("ul");
const leftButton = document.body.querySelector(".slider__left-button");
const rightButton = document.body.querySelector(".slider__right-button");
const sliderMaxWidth = ul.childElementCount * 130;

rightButton.addEventListener("click", scrollRight);

function scrollRight() {
  ul.scrollTo({
    left: ul.scrollLeft + 390,
    top: 0,
    behavior: "smooth",
  });
}

leftButton.addEventListener("click", scrollLeft);

function scrollLeft() {
  ul.scrollTo({
    left: ul.scrollLeft - 390,
    top: 0,
    behavior: "smooth",
  });
}
