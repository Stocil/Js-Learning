const body = document.body;

const options = {
  threshold: 0.4,
};

const reveal = function (entries, scrollObserver) {
  entries.forEach((entry) => {
    let side = wichSide(entry.target);

    if (entry.isIntersecting) {
      entry.target.classList.remove(side);
      entry.target.classList.add(side + "-show");
    } else {
      entry.target.classList.remove(side + "-show");
      entry.target.classList.add(side);
    }
  });
};

const scrollObserver = new IntersectionObserver(reveal, options);

const hidedElementsLeft = body.querySelectorAll(".fadeInLeft");
const hidedElementsRight = body.querySelectorAll(".fadeInRight");
const hidedElementsDown = body.querySelectorAll(".fadeInDown");
const hidedElementsCenter = body.querySelectorAll(".fadeInCenter");

hidedElementsLeft.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsRight.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsDown.forEach((element) => {
  scrollObserver.observe(element);
});

hidedElementsCenter.forEach((element) => {
  scrollObserver.observe(element);
});

function wichSide(element) {
  if (
    element.classList.contains("fadeInLeft") ||
    element.classList.contains("fadeInLeft-show")
  )
    return "fadeInLeft";

  if (
    element.classList.contains("fadeInRight") ||
    element.classList.contains("fadeInRight-show")
  )
    return "fadeInRight";

  if (
    element.classList.contains("fadeInDown") ||
    element.classList.contains("fadeInDown-show")
  )
    return "fadeInDown";

  if (
    element.classList.contains("fadeInCenter") ||
    element.classList.contains("fadeInCenter-show")
  )
    return "fadeInCenter";
}
