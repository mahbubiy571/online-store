import { getData } from "./request.js";
import { updateUI } from "./updateUI.js";

let skip = 30;
const limit = 30;

export function initShowMore(buttonSelector = ".btnEl") {
    const btnEl = document.querySelector(buttonSelector);
  
    if (!btnEl) return;
  
    btnEl.addEventListener("click", async () => {
      const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
      const data = await getData(url);
      
      updateUI(data);
      skip += limit;
  
      if (skip >= data.total) {
        btnEl.style.display = "none";
      }
    });
  }
  