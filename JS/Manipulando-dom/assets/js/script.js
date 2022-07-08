function changeMode() {
  changeClasses();
  changeText();
}

function changeText() {
  if (btn.classList.contains(darkModeClass)) {
    h1.innerHTML = "Dark Mode ON";
    btn.innerHTML = "Light Mode";
  } else {
    h1.innerHTML = "Light Mode ON";
    btn.innerHTML = "Dark Mode";
  }
}

function changeClasses() {
  h1.classList.toggle(darkModeClass);
  btn.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

const darkModeClass = "dark-mode";
const h1 = document.getElementById("page-title");
const btn = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

btn.addEventListener("click", changeMode);
