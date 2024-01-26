// Get the root element
const r = document.querySelector(":root");

const themesButtons = document.getElementById("themesContainer");

// Get the button element
// const btn = document.getElementById("btn-change-theme");

function setLevels() {
  const levelElements = document.querySelectorAll(
    "div.left-side__languages-language-level"
  );
  for (let index = 0; index < levelElements.length; index++) {
    levelElements[index].style.width = `${Number(
      levelElements[index].dataset.level
    )}%`;
  }
}

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
    "--right-side-position-color": "#E91E63",
    "--left-side-icon-color": "#212121",
    "--left-side-progressbar-color": "#C2185B",
    "--right-side-paragraph-color": "#333",
  },
  {
    "--body-background-color": "#FFCCBC",
    "--container-background-color": "#fff",
    "--left-side-background-color": "#FF5722",
    "--right-side-position-color": "#FF5722",
    "--left-side-icon-color": "#212121",
    "--left-side-progressbar-color": "#757575",
    "--right-side-paragraph-color": "#333",
  },
  {
    "--body-background-color": "#4CAF50",
    "--container-background-color": "#fff",
    "--left-side-background-color": "#212121",
    "--right-side-position-color": "#8BC34A",
    "--left-side-icon-color": "#8BC34A",
    "--left-side-progressbar-color": "#4CAF50",
    "--right-side-paragraph-color": "#333",
  },
  {
    "--body-background-color": "#E040FB",
    "--container-background-color": "#fff",
    "--left-side-background-color": "#7B1FA2",
    "--right-side-position-color": "#7B1FA2",
    "--left-side-icon-color": "#E1BEE7",
    "--left-side-progressbar-color": "#E040FB",
    "--right-side-paragraph-color": "#333",
  },
];

function changeTheme(themeIndex = 0) {
  const themesObj = themesArr[themeIndex];
  for (let property in themesObj) {
    r.style.setProperty(property, themesObj[property]);
  }
  localStorage.setItem("activeTheme", themeIndex);
}

// On Page Load
window.onload = () => {
  if (localStorage.getItem("activeTheme") !== null) {
    changeTheme(localStorage.getItem("activeTheme"));
  }
  setLevels();
  AOS.init();
};

for (const btn of themesButtons.children) {
  btn.addEventListener("click", () => {
    console.log(btn.dataset.colorIndex);
    changeTheme(btn.dataset.colorIndex);
  });
}
