import { getData } from "./requst.js";
import { updateUI } from "./updateUI.js";
import { initThemeToggle } from './theme.js';


getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((eror) => console.log(eror));

