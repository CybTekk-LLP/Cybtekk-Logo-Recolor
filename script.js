function textColorSelected(element) {
  document
    .querySelectorAll(".changeme")
    .forEach((item) => (item.style.fill = element.value));
}

function logoColorSelected(element) {
  document
    .querySelectorAll(".modifyme")
    .forEach((item) => (item.style.fill = element.value));

  document
    .querySelectorAll(".modifyme")
    .forEach((item) => (item.style.stroke = element.value));
}
