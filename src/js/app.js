import { getData } from "./request.js";
import { updateUI } from "./updateUI.js";
import { initThemeToggle } from "./theme.js";

const btnEl = document.querySelector(".btnEl");

getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((eror) => console.log(eror));

btnEl.addEventListener("click", async () => {
  const data = await getData("https://dummyjson.com/products?limit=30");
  updateUI(data);
});

initThemeToggle({ allowChange: true });

