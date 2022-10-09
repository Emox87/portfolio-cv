// Get the root element
const r = document.querySelector(':root');

// Get the button element
const btn = document.getElementById('btn-change-theme');

// Define some themes
const themes = [
    {
        "--body-background-color": "lightblue",
        "--container-background-color": "#fff",
        "--left-side-background-color": "#003147",
        "--right-side-position-color": "#2a7da2",
        "--left-side-icon-color": "#03a9f4",
        "--left-side-progressbar-color": "#0475fa",
        "--right-side-paragraph-color": "#333"
    },
    {
        "--body-background-color": "#F8BBD0",
        "--container-background-color": "#fff",
        "--left-side-background-color": "#E91E63",
        "--right-side-position-color": "#757575",
        "--left-side-icon-color": "#212121",
        "--left-side-progressbar-color": "#C2185B",
        "--right-side-paragraph-color": "#BDBDBD"
    },
    {
        "--body-background-color": "#FFCCBC",
        "--container-background-color": "#fff",
        "--left-side-background-color": "#FF5722",
        "--right-side-position-color": "#FFCCBC",
        "--left-side-icon-color": "#212121",
        "--left-side-progressbar-color": "#757575",
        "--right-side-paragraph-color": "#333"
    }
];

const initialTheme = 0;

// Changing random themes
function changeTheme() {

}

function test() {
    for (let i = 1; i < themes.length; i++) {
        for (const key in themes) {
            r.style.setProperty(key, themes[key]);
        }
    }
}

// Adding event handler to the button
// For changing the theme
btn.addEventListener('click', changeTheme);
