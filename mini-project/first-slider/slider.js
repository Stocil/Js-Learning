const body = document.body;
const slider = body.querySelector(".slider");
const sliderItems = body.querySelectorAll(".slider__list__item");
const sliderItemsCount = sliderItems.length;
const sliderItemWidth = 250;
const sliderList = body.querySelector(".slider__list");
const sliderListGap = +getComputedStyle(sliderList).gap.slice(0, -2);
const sliderListGapCount = sliderItemsCount - 1;
const sliderWidth = Math.round(sliderItemsCount * sliderItemWidth + sliderListGap * sliderListGapCount);
sliderList.style.width = sliderWidth + "px";
for (let index = 0; index < sliderItemsCount; index++) {
    sliderItems[index].setAttribute("aria-label", `${index + 1} / ${sliderItemsCount}`);
    sliderItems[index].setAttribute("data-slide-index", `${index}`);
}
// Slider buttons
let sliderTranslate = 0;
let slideIndex = 3;
const maxSlideIndex = sliderItemsCount - 1;
slider.addEventListener("click", scrollSlider);
function scrollSlider(event) {
    const target = event.target;
    if (!target.closest(".slider__button"))
        return;
    if (target.closest(".slider__button").classList.contains("slider__left-button")) {
        if (sliderIsOver("left"))
            return;
        sliderTranslate += 260;
        slideIndex--;
    }
    else {
        if (sliderIsOver("right"))
            return;
        sliderTranslate -= 260;
        slideIndex++;
    }
    sliderList.style.transform = `translateX(${sliderTranslate}px)`;
}
function sliderIsOver(side) {
    if (side === "left") {
        if (sliderTranslate >= 0)
            return true;
    }
    if (side === "right") {
        if (-sliderTranslate + 250 >= sliderWidth - slider.offsetWidth)
            return true;
    }
    return false;
}
