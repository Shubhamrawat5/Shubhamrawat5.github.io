/* -------------------------------- DARK-MODE ------------------------------- */
let themeMode = document.querySelector(".theme-mode-container");
let logo = document.querySelector("#logo");
let body = document.querySelector("body");
themeMode.addEventListener("click", changeTheme);

function changeTheme() {
  body.classList.toggle("dark");
  logo.classList.toggle("invert");

  let currentThemeMode = document.querySelector(".theme-mode-img");

  if (currentThemeMode.getAttribute("src") === "images/moon.svg")
    currentThemeMode.setAttribute("src", "images/light.svg");
  else currentThemeMode.setAttribute("src", "images/moon.svg");

  currentThemeMode.classList.remove("theme-animate");
  setTimeout(() => {
    currentThemeMode.classList.add("theme-animate");
  });
}



const nameCharacterElements = document.querySelectorAll(".name-char");
function animateName() {
  let t = 0;
  nameCharacterElements.forEach((charElement) => {
    t += 115;
    setTimeout(() => {
      charElement.classList.add("name-color");
      setTimeout(() => {
        charElement.classList.remove("name-color");
      }, 140);
    }, t);
  });
}

animateName();
setInterval(() => {
  animateName();
}, 1800);
