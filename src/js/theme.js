export function initThemeToggle({ allowChange = false } = {}) {
  const html = document.documentElement;
  const themeToggle = document.querySelector(".theme-controller");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);

    if (themeToggle && savedTheme === "dark") {
      themeToggle.checked = true;
    }
  }

  if (allowChange && themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
}

