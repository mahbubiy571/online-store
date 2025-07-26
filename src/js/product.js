import { getData } from "./request.js";
import { updateUIProductUI } from "./updateUI.js";
import { initThemeToggle } from "./theme.js";

let id = new URLSearchParams(document.location.search).get("id");

getData("https://dummyjson.com/products/" + id)
  .then((data) => updateUIProductUI(data))
  .catch((error) => console.log(error));

initThemeToggle({ allowChange: true });
