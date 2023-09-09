const body = document.body;
const closeClick = new CustomEvent("click");

// Бургер
const burgerButton = body.querySelector(".header__menu-btn");
const burgerLines = body.querySelectorAll(".header__menu-line");

// Навигация
const burgerNav = body.querySelector(".header_nav-bottom");

burgerButton.addEventListener("click", burgerMenuActive);

function burgerMenuActive(event) {
  body.classList.toggle("scroll-lock");
  burgerNav.classList.toggle("active");

  burgerLines[0].classList.toggle("menu__line-1");
  burgerLines[1].classList.toggle("menu__line-2");
  burgerLines[2].classList.toggle("menu__line-3");

  body.addEventListener("click", clickOutOfNavigation);
  body.addEventListener("keydown", exitKey);
}

function clickOutOfNavigation(event) {
  if (!burgerNav.classList.contains("active")) return;
  if (event.target.closest(".header_nav-list")) return;
  if (event.target.closest(".header__menu-btn") === burgerButton) return;

  burgerButton.dispatchEvent(closeClick);
}

function exitKey(event) {
  if (!burgerNav.classList.contains("active")) return;
  if (event.code !== "Escape") return;

  burgerButton.dispatchEvent(closeClick);
}
