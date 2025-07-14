import { changeBasket } from "./basket.js";
import { initThemeToggle } from "./theme.js";
import { updateCartUI  } from "./updateUI.js";

const localProducts = JSON.parse(localStorage.getItem("products"));

if(localProducts) {
    changeBasket(localProducts);
    updateCartUI(localProducts);
}

initThemeToggle({ allowChange: true });
changeBasket();