const thumbs = document.body.querySelector(".thumbs");
const mainImage = document.body.querySelector(".largeImg");

thumbs.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName != "IMG") return;

  const image = event.target;
  const imageSrc = image.getAttribute("src");

  mainImage.setAttribute("src", imageSrc);

  image.style.opacity = "0";
  mainImage.style.opacity = "0";
  setTimeout(function () {
    image.style.opacity = "1";
    mainImage.style.opacity = "1";
  }, 300);
});

const bottomSlider = document.body.querySelector(".bottom-slider");
const bottomSliderInner = document.body.querySelector(".bottom-slider__inner");
const thumbsLength = document.body.querySelectorAll("li").length;
const bottomSliderMaxWidth =
  document.body.querySelector(".thumbs__item").clientWidth * 6 + "px";

const thumbsWidth =
  document.body.querySelector(".thumbs__item").clientWidth * thumbsLength +
  "px";

let translateX = 0;

bottomSliderInner.style.width = bottomSliderMaxWidth;
thumbs.style.width = thumbsWidth;

bottomSlider.addEventListener("click", function (event) {
  if (event.target.tagName != "BUTTON") return;

  if (event.target.classList.contains("slider__button-left")) {
    // Слайдер не выходит за левую границу
    if (translateX >= 0) return;

    translateX += 118;
    thumbs.style.transform = `translateX(${translateX}px)`;
  } else {
    // Слайдер не выходит за правую границу. Учитывая нынешнюю прокрутку и размер слайдера
    if (
      translateX - +bottomSliderMaxWidth.slice(0, -2) <=
      -+thumbsWidth.slice(0, -2)
    )
      return;

    translateX -= 118;
    thumbs.style.transform = `translateX(${translateX}px)`;
  }
});
