function randomHexColor() {
  //begin function

  //declare the hexColor
  let hexColor;

  //store a random red rgb value
  let red = Math.floor(Math.random() * 255) + 1;

  //store a random green rgb value
  let green = Math.floor(Math.random() * 255) + 1;

  //store a random blue rgb value
  let blue = Math.floor(Math.random() * 255) + 1;

  //store the random hex Color value after converting the rgb values to hexadecimal
  hexColor = ((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1);

  //return the upper cased hex color value
  return hexColor.toUpperCase();
} //end function

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

//Some classes and html functions need to determine a constant
let color1 = document.querySelector(".color1"); // 1st color
let color2 = document.querySelector(".color2"); // 2nd color
let label1 = document.querySelector("#label-1[contenteditable]");
let label2 = document.querySelector("#label-2[contenteditable]");
let bodys = document.getElementById("gradient"); // color display
let cancel = document.querySelector(".cancel");

//You have to make arrangements to see the color code in the display
cancel.style.display = "none";

let fileTag = document.getElementById("filetag"),
  preview = document.getElementById("preview");

fileTag.addEventListener("change", function () {
  changeImage(this);
});

label1.addEventListener("input", () => label1Hex(label1.textContent, color1));

function label1Hex(label, color) {
  changeColor1("#" + label);
  logoColorSelected(color);
}

label2.addEventListener("input", () => label2Hex(label2.textContent, color2));

function label2Hex(label, color) {
  changeColor2("#" + label);
  textColorSelected(color);
}

function changeColor1(input) {
  color1.value = input;
}
function changeColor2(input) {
  color2.value = input;
}

color1.addEventListener("input", function () {
  changeText1(color1.value);
});
color2.addEventListener("input", function () {
  changeText2(color2.value);
});

function changeText1(input) {
  label1.textContent = input.substring(1);
}
function changeText2(input) {
  label2.textContent = input.substring(1);
}

function changeImage(input) {
  let reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute("src", e.target.result);
      preview.style.display = "block";
      cancel.style.display = "block";
    };

    reader.readAsDataURL(input.files[0]);
  }
}
function hidestuff() {
  cancel.style.display = "none";
  preview.style.display = "none";
}

let up = false,
  right = false,
  down = false,
  left = false,
  zoomIn = false,
  zoomOut = false,
  i = 1,
  x = window.innerWidth / 2 - 130 / 2,
  y = window.innerHeight / 2 - 130 / 2;
document.addEventListener("keydown", press);
function press(e) {
  if (e.code === "KeyW" /* w */) {
    up = true;
  }
  if (e.code === "KeyD" /* d */) {
    right = true;
  }
  if (e.code === "KeyS" /* s */) {
    down = true;
  }
  if (e.code === "KeyA" /* a */) {
    left = true;
  }
  if (e.code === "KeyZ" /* z */) {
    zoomIn = true;
  }
  if (e.code === "KeyX" /* x */) {
    zoomOut = true;
  }
}
document.addEventListener("keyup", release);
function release(e) {
  if (e.code === "KeyW" /* w */) {
    up = false;
  }
  if (e.code === "KeyD" /* d */) {
    right = false;
  }
  if (e.code === "KeyS" /* s */) {
    down = false;
  }
  if (e.code === "KeyA" /* a */) {
    left = false;
  }
  if (e.code === "KeyZ" /* z */) {
    zoomIn = false;
  }
  if (e.code === "KeyX" /* x */) {
    zoomOut = false;
  }
}
function gameLoop() {
  let div = document.querySelector("#move");
  if (up) {
    y = y - 20;
  }
  if (right) {
    x = x + 20;
  }
  if (down) {
    y = y + 20;
  }
  if (left) {
    x = x - 20;
  }
  if (zoomIn) {
    i = i + 0.1;
  }
  if (zoomOut) {
    i = i - 0.1;
  }
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.transform = `scale(${i})`;
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

document.addEventListener("DOMContentLoaded", () => {
  let random = randomHexColor();
  label1Hex(random, color1);
  label2Hex(random, color2);
  changeText1(random);
  changeText2(random);
});
