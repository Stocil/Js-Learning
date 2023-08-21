const thumbs = document.body.querySelector(".thumbs");
const mainImage = document.body.querySelector(".largeImg");

thumbs.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName != "IMG") return;

  const image = event.target;
  const imageSrc = image.getAttribute("src");

  image.setAttribute("src", mainImage.getAttribute("src"));
  mainImage.setAttribute("src", imageSrc);
});

// Второе решение

// const inner = document.body.querySelector(".inner");

// inner.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.tagName != "IMG") return;

//   let mainImage = document.body.querySelector(".largeImg");
//   let image;

//   if (event.target.classList.contains("largeImg")) return;

//   image = event.target;
//   imageNumber = image.closest("a").getAttribute("title").slice(-1);

//   mainImage.setAttribute("src", image.getAttribute("src"));
// });

// Изначальное решение

// mainImageNumber = imageNumber;

// mainImageScr =
//   mainImage.getAttribute("src").split("/")[0] +
//   "/" +
//   mainImageNumber +
//   mainImage.getAttribute("src").split("/")[1].slice(1);

// mainImage.setAttribute("src", mainImageNumber);
// console.log(mainImageScr);
