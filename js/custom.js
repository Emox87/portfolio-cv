// Get the root element
const r = document.querySelector(":root");

// Get the button element
const btn = document.getElementById("btn-change-theme");

const themesArr = [
  {
    "--body-background-color": "lightblue",
    "--container-background-color": "#fff",
    "--left-side-background-color": "#003147",
    "--right-side-position-color": "#2a7da2",
    "--left-side-icon-color": "#03a9f4",
    "--left-side-progressbar-color": "#0475fa",
    "--right-side-paragraph-color": "#333",
  },
  {
    "--body-background-color": "#F8BBD0",
    "--container-background-color": "#fff",
    "--left-side-background-color": "#E91E63",
    "--right-side-position-color": "#757575",
    "--left-side-icon-color": "#212121",
    "--left-side-progressbar-color": "#C2185B",
    "--right-side-paragraph-color": "#BDBDBD",
  },
  {
    "--body-background-color": "#FFCCBC",
    "--container-background-color": "#fff",
    "--left-side-background-color": "#FF5722",
    "--right-side-position-color": "#FFCCBC",
    "--left-side-icon-color": "#212121",
    "--left-side-progressbar-color": "#757575",
    "--right-side-paragraph-color": "#333",
  },
];

// Random Number fom 0 to max
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Changing random themes
function changeRandomTheme(themeIndex) {
  const currentThemeIndex = themesArr.indexOf(themesArr[themeIndex]);
  let randThemeIndex;

  do {
    randThemeIndex = randomNumber(themesArr.length);
  } while (currentThemeIndex === randThemeIndex);

  if (currentThemeIndex != randThemeIndex) {
    localStorage.setItem("currentThemeIndex", randThemeIndex);
    const themesObj = themesArr[randThemeIndex];
    for (let property in themesObj) {
      r.style.setProperty(property, themesObj[property]);
    }
  }
}

window.onload = () => {
  localStorage.setItem("currentThemeIndex", 0);
};

btn.addEventListener("click", () =>
  changeRandomTheme(localStorage["currentThemeIndex"])
);
