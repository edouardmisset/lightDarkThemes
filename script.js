// DOM Elements
const lightButton = document.getElementById("light"),
  darkButton = document.getElementById("dark"),
  solarizeButton = document.getElementById("solar"),
  body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem("theme"),
  isSolar = localStorage.getItem("isSolar");

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add("solar");
}

// Button Event Handlers
lightButton.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};

darkButton.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

solarizeButton.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
    // solarizeButton.style.cssText = `--bg-solar: var(--yellow0);`;
  } else {
    body.classList.add("solar");
    // solarizeButton.style.cssText = `--bg-solar: var(--yellow2);`;
  }
};
