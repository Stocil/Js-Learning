window.addEventListener("resize", function (event) {
  if (document.documentElement.clientWidth <= 1000) {
    const descContent = this.document.body.querySelector(
      ".header__content-desc"
    );
    const mobileContent = this.document.body.querySelector(
      ".header__content-mobile"
    );

    descContent.style.display = "none";
    mobileContent.style.display = "flex";
  }
});

window.addEventListener("resize", function (event) {
  if (document.documentElement.clientWidth > 1000) {
    const descContent = this.document.body.querySelector(
      ".header__content-desc"
    );
    const mobileContent = this.document.body.querySelector(
      ".header__content-mobile"
    );

    descContent.style.display = "flex";
    mobileContent.style.display = "none";
  }
});

const burgerButton = document.body.querySelector(".header__burger");
const burgerInner = document.body.querySelector(".burger__inner");
const burgerActive = document.body.querySelector(".burger__active");

burgerButton.addEventListener("click", function (event) {
  if (!event.target.closest(".header__burger")) return;

  burgerButton.classList.toggle("header__burger__active");

  burgerButton.firstElementChild.classList.toggle("burger__first-line__active");
  burgerButton.children[1].classList.toggle("burger__second-line__active");
  burgerButton.lastElementChild.classList.toggle("burger__last-line__active");

  burgerInner.classList.toggle("active");
  burgerActive.classList.toggle("burger__active-true");
});
