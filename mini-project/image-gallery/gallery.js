const topSlider = document.body.querySelector(".top-slider");
const sliderUl = topSlider.querySelector(".main-photo");
const sliderUlLength = sliderUl.querySelectorAll(".main-photo__item").length;
const sliderUlWidth =
  500 +
  sliderUl.querySelector(".main-photo__item").offsetWidth *
    (sliderUlLength - 1) +
  (sliderUlLength - 1) * 40;

const topSliderWidth =
  610 + sliderUl.querySelector(".main-photo__item").offsetWidth * 2;

let topSliderTranslateX = 0;

topSlider.style.width = topSliderWidth + "px";
sliderUl.style.width = sliderUlWidth + "px";
sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;

topSlider.addEventListener("click", function (event) {
  if (
    event.target.tagName != "IMG" ||
    event.target.closest("li").classList.contains("selected") == true
  )
    return;

  const image = event.target;
  const leftSibling = image.closest("li").previousElementSibling;
  const rightSibling = image.closest("li").nextElementSibling;

  if (rightSibling) {
    if (rightSibling.classList.contains("selected")) {
      // Левая кнопка
      rightSibling.classList.remove("selected");
      image.closest("li").classList.add("selected");

      ScrollLeft(rightSibling);

      // topSliderTranslateX += 290;
      // sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;

      // Уход за изображение
      // if (rightSibling.nextElementSibling) {
      //   rightSibling.nextElementSibling.style.transform = `translate(${-290}px, ${-20}px)`;
      //   rightSibling.nextElementSibling.style.zIndex = `-1`;
      //   setTimeout(function () {
      //     rightSibling.nextElementSibling.style.opacity = `0`;
      //   }, 300);
      //   setTimeout(function () {
      //     rightSibling.nextElementSibling.style.transform = `translateX(${0}px)`;
      //   }, 400);
      //   setTimeout(function () {
      //     rightSibling.nextElementSibling.style.zIndex = `0`;
      //     rightSibling.nextElementSibling.style.opacity = `1`;
      //   }, 1000);
      // }
    } else {
      // Правая кнопка
      leftSibling.classList.remove("selected");
      image.closest("li").classList.add("selected");

      ScrollRight(leftSibling);

      // topSliderTranslateX -= 290;
      // sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;

      // Уход за изображение
      // if (leftSibling.previousElementSibling) {
      //   leftSibling.previousElementSibling.style.transform = `translate(${290}px, ${-20}px)`;
      //   leftSibling.previousElementSibling.style.zIndex = `-1`;
      //   setTimeout(function () {
      //     leftSibling.previousElementSibling.style.opacity = `0`;
      //   }, 300);
      //   setTimeout(function () {
      //     leftSibling.previousElementSibling.style.transform = `translateX(${0}px)`;
      //   }, 400);
      //   setTimeout(function () {
      //     leftSibling.previousElementSibling.style.zIndex = `0`;
      //     leftSibling.previousElementSibling.style.opacity = `1`;
      //   }, 1000);
      // }
    }
  } else {
    leftSibling.classList.remove("selected");
    image.closest("li").classList.add("selected");

    ScrollRight(leftSibling);

    // topSliderTranslateX -= 290;
    // sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;

    // // Уход за изображение
    // if (leftSibling.previousElementSibling) {
    //   leftSibling.previousElementSibling.style.transform = `translate(${290}px, ${-20}px)`;
    //   leftSibling.previousElementSibling.style.zIndex = `-1`;
    //   setTimeout(function () {
    //     leftSibling.previousElementSibling.style.opacity = `0`;
    //   }, 300);
    //   setTimeout(function () {
    //     leftSibling.previousElementSibling.style.transform = `translateX(${0}px)`;
    //   }, 400);
    //   setTimeout(function () {
    //     leftSibling.previousElementSibling.style.zIndex = `0`;
    //     leftSibling.previousElementSibling.style.opacity = `1`;
    //   }, 1000);
    // }
  }
});

// Нижний слайдер

const thumbs = document.body.querySelector(".thumbs");
const bottomSlider = document.body.querySelector(".bottom-slider");
const bottomSliderInner = document.body.querySelector(".bottom-slider__inner");
const thumbsLength = document.body.querySelectorAll(".thumbs__item").length;
const bottomSliderMaxWidth =
  document.body.querySelector(".thumbs__item").clientWidth * 6 + "px";

const thumbsWidth =
  document.body.querySelector(".thumbs__item").clientWidth * thumbsLength +
  "px";

let translateX = 0;

bottomSliderInner.style.width = bottomSliderMaxWidth;
thumbs.style.width = thumbsWidth;

bottomSlider.addEventListener("click", function (event) {
  event.preventDefault();
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

thumbs.addEventListener("click", function (event) {
  if (event.target.tagName != "IMG") return;

  const bottomSelected = event.target.getAttribute("src");
  const topCurrentSelected = topSlider.querySelector(".selected");
  const topSliderImages = topSlider.querySelectorAll("img");
  let newTopSelected;

  for (let image of topSliderImages) {
    if (image.getAttribute("src") == bottomSelected) {
      newTopSelected = image.closest("li");
    }
  }

  topCurrentSelected.classList.remove("selected");
  setTimeout(() => newTopSelected.classList.add("selected"), 900);

  let lastTopSelectedPlace;
  let newTopSelectedPlace;
  for (let i = 0; i < topSlider.querySelectorAll("li").length; i++) {
    // if (topSlider.querySelectorAll("li")[i].classList.contains("selected")) {
    if (topSlider.querySelectorAll("li")[i] == newTopSelected) {
      newTopSelectedPlace = i + 1;
    }

    if (topSlider.querySelectorAll("li")[i] == topCurrentSelected) {
      lastTopSelectedPlace = i + 1;
    }
  }

  const differenceOfPlace = newTopSelectedPlace - lastTopSelectedPlace;

  if (differenceOfPlace > 0) {
    for (let count = 0; count < differenceOfPlace; count++) {
      ScrollRight(topCurrentSelected.nextElementSibling.previousElementSibling);
    }
    // topSliderTranslateX -= 290 * differenceOfPlace;
    // sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;
  } else if (differenceOfPlace < 0) {
    for (let count = 0; count < -differenceOfPlace; count++) {
      ScrollLeft(topCurrentSelected.previousElementSibling.nextElementSibling);
    }
    // topSliderTranslateX += 290 * -differenceOfPlace;
    // sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;
  }
});

function ScrollLeft(rightSibling) {
  topSliderTranslateX += 290;
  sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;

  // Уход за изображение
  if (rightSibling.nextElementSibling) {
    rightSibling.nextElementSibling.style.transform = `translate(${-290}px, ${-20}px)`;
    rightSibling.nextElementSibling.style.zIndex = `-1`;
    setTimeout(function () {
      rightSibling.nextElementSibling.style.opacity = `0`;
    }, 300);
    setTimeout(function () {
      rightSibling.nextElementSibling.style.transform = `translateX(${0}px)`;
    }, 400);
    setTimeout(function () {
      rightSibling.nextElementSibling.style.zIndex = `0`;
      rightSibling.nextElementSibling.style.opacity = `1`;
    }, 1000);
  }
}

function ScrollRight(leftSibling) {
  topSliderTranslateX -= 290;
  sliderUl.style.transform = `translateX(${topSliderTranslateX}px)`;

  // Уход за изображение
  if (leftSibling.previousElementSibling) {
    leftSibling.previousElementSibling.style.transform = `translate(${290}px, ${-20}px)`;
    leftSibling.previousElementSibling.style.zIndex = `-1`;
    setTimeout(function () {
      leftSibling.previousElementSibling.style.opacity = `0`;
    }, 300);
    setTimeout(function () {
      leftSibling.previousElementSibling.style.transform = `translateX(${0}px)`;
    }, 400);
    setTimeout(function () {
      leftSibling.previousElementSibling.style.zIndex = `0`;
      leftSibling.previousElementSibling.style.opacity = `1`;
    }, 1000);
  }
}
