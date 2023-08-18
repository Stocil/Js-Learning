const ul = document.body.querySelector("ul");
const sliderMaxWidth = ul.childElementCount * 130;

ul.addEventListener("click", scroll);

function scroll() {
  ul.scrollTo({
    left: ul.scrollLeft + 390,
    top: 0,
    behavior: "smooth",
  });
}
