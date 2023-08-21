const thumbs = document.body.querySelector(".thumbs");
const mainImage = document.body.querySelector(".largeImg");

thumbs.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName != "IMG") return;

  const image = event.target;
  const imageSrc = image.getAttribute("src");

  // Сделать обмен
  // image.setAttribute("src", mainImage.getAttribute("src"));

  mainImage.setAttribute("src", imageSrc);

  image.style.opacity = "0";
  mainImage.style.opacity = "0";
  setTimeout(function () {
    image.style.opacity = "1";
    mainImage.style.opacity = "1";
  }, 300);
});
