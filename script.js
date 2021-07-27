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

/* ---------------------------------- EMAIL --------------------------------- */
let formName = document.getElementById("form-name");
let formEmail = document.getElementById("form-email");
let formMessage = document.getElementById("form-message");

let form = document.querySelector("form");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // console.log(formName.value);
  // console.log(formEmail.value);
  // console.log(formMessage.value);
  let obj = {
    form_name: formName.value,
    form_email: formEmail.value,
    form_message: formMessage.value,
  };

  emailjs.send("service_0i7zsh5", "template_y8g6gr8", obj).then((res) => {
    // console.log(res);
    if (res.status === 200) {
      console.log("message sent!");
      document.getElementById("send-btn").textContent = "✔";
    } else {
      console.log("error in sending message");
      document.getElementById("send-btn").textContent = "❌";
    }
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
