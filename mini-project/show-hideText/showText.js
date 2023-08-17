const mainText = document.body.querySelector(".spoiler__title");
const spoilerText = document.body.querySelector(".spoiler__text");
const plusH = document.body.querySelector(".plus__horizotal");
const plusV = document.body.querySelector(".plus__vertical");

mainText.addEventListener("click", showList);

function showList() {
  spoilerText.classList.toggle("active");
  plusH.classList.toggle("plus__collapsed");
  plusV.classList.toggle("plus__collapsed");
}
