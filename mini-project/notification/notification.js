function showNotification({
  top = 0,
  right = 0,
  html = "text",
  className = "none",
}) {
  let div = document.createElement("div");
  div.textContent = html;
  div.className = "notification";

  if (className != "none") {
    div.classList.add(className);
  }

  div.style.cssText = `
      top: ${top}px;
      right: ${right}px;
  
      background-color: rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
    Math.random() * 255
  )}, ${Math.ceil(Math.random() * 255)});
    `;
  document.body.append(div);
  setTimeout(() => div.remove(), 1500);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
