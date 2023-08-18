const ul = document.body.querySelector("ul");

ul.addEventListener("click", scroll);

function scroll() {
  console.log(ul.scrollLeft);
  ul.scrollTo({
    left: ul.scrollLeft + 130,
    top: 0,
    behavior: "smooth",
  });
}
