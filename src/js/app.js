import { getData } from "./request.js";
import { updateUI } from "./updateUI.js";
import { initThemeToggle } from "./theme.js";
import { initShowMore } from "./showMore.js";

getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((eror) => console.log(eror));

document.addEventListener("DOMContentLoaded", () => {
  initShowMore();
  initThemeToggle({ allowChange: true });
});
