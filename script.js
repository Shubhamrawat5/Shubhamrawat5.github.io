/* -------------------------------- DARK-MODE ------------------------------- */
let themeMode = document.querySelector(".theme-mode-container");
themeMode.addEventListener("click", changeTheme);

function changeTheme() {
  document.querySelector("body").classList.toggle("dark");
  let currentThemeMode = document.querySelector(".theme-mode-img");

  if (currentThemeMode.getAttribute("src") === "images/moon.svg")
    currentThemeMode.setAttribute("src", "images/light.svg");
  else currentThemeMode.setAttribute("src", "images/moon.svg");
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
