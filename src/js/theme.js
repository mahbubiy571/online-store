const themeToggle = document.querySelector(".theme-controller");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");

export function initThemeToggle() {
  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
      themeToggle.checked = true;
    }
  }

  themeToggle.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

initThemeToggle();
