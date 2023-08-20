let tip;
let cooldown = false;

document.addEventListener("mouseover", function (event) {
  if (cooldown == false) {
    if (event.target.tagName == "BUTTON") {
      if (event.target.dataset.tooltip) {
        tip = document.createElement("div");
        const button = event.target;
        const tipText = event.target.dataset.tooltip;
        const maxLeft = button.getBoundingClientRect().left;
        const maxTop = button.getBoundingClientRect().top;

        tip.style.opacity = "0";
        tip.classList.add("tooltip");
        tip.innerHTML = tipText;
        tip.style.fontFamily = '"Josefin Sans", sans-serif';
        tip.style.fontSize = "16px";

        document.body.append(tip);

        const tipCenter = Math.round(
          (button.offsetWidth - tip.offsetWidth) / 2
        );
        let tipTop =
          button.getBoundingClientRect().top - tip.offsetHeight + scrollY - 5;
        let tipLeft = button.getBoundingClientRect().left + scrollX + tipCenter;

        if (-tipCenter > maxLeft) {
          tipLeft = 0;
        }

        if (tip.offsetHeight + 5 > maxTop) {
          tipTop += tip.offsetHeight + button.offsetHeight + 10;
          console.log(tip.offsetHeight + 5, maxTop);
        }

        tip.style.cssText += `
          top: ${tipTop}px;
          left: ${tipLeft}px;
        `;

        tip.style.opacity = "1";
      }
    }
  }
});

document.addEventListener("mouseout", function (event) {
  if (event.target.tagName == "BUTTON") {
    if (event.target.dataset.tooltip) {
      tip.style.opacity = "0";
      remover();
    }
  }
});

function remover() {
  cooldown = true;

  // 0ms чтобы работало нормально
  setTimeout(function () {
    tip.remove();
    cooldown = false;
  }, 100);
}

document.addEventListener("mouseover", function (event) {
  console.log(event.target, cooldown, tip);
});
