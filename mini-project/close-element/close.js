const closeBottons = document.querySelectorAll(".close__button");
const panes = document.querySelectorAll(".pane");

for (let closeBotton of closeBottons) {
  closeBotton.addEventListener("click", close);

  // Передадим параметр через свойство объекта
  closeBotton.param = closeBotton;
}

function close(event) {
  // Достаем параметр
  const button = event.currentTarget.param;

  // Ищем родителя
  const pane = button.closest(".pane");
  const plusH = pane.querySelector(".horizontal");
  const plusV = pane.querySelector(".vertical");

  plusH.classList.add("collapsed");
  plusV.classList.add("collapsed");
  pane.classList.add("close");
}
