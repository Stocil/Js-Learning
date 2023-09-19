const body = document.body;

const sliderItems: NodeListOf<HTMLElement> = body.querySelectorAll(
  ".slider__list__item"
);
const sliderItemsCount = sliderItems.length;
const sliderItemWidth = 250;

const sliderList: HTMLElement = body.querySelector(".slider__list");
const sliderListGap = +getComputedStyle(sliderList).gap.slice(0, -2);
const sliderListGapCount = sliderItemsCount - 1;

const sliderWidth =
  Math.round(
    sliderItemsCount * sliderItemWidth + sliderListGap * sliderListGapCount
  ) + "px";

sliderList.style.width = sliderWidth;

for (let index = 0; index < sliderItemsCount; index++) {
  sliderItems[index].setAttribute(
    "aria-label",
    `${index + 1} / ${sliderItemsCount}`
  );

  sliderItems[index].setAttribute("data-slide-index", `${index}`);
}
