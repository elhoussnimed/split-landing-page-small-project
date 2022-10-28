const playstation = document.querySelector(".playstation");
const xbox = document.querySelector(".xbox");

playstation.addEventListener("mouseover", largePlayStation);
playstation.addEventListener("mouseout", smallPlayStation);
xbox.addEventListener("mouseover", largeXbox);
xbox.addEventListener("mouseout", smallXbox);

function largePlayStation() {
  playstation.classList.add("large");
  xbox.classList.add("small");
}
function smallPlayStation() {
  playstation.classList.remove("large");
  xbox.classList.remove("small");
}

function largeXbox() {
  xbox.classList.add("large");
  playstation.classList.add("small");
}
function smallXbox() {
  xbox.classList.remove("large");
  playstation.classList.remove("small");
}
