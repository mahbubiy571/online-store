import { addProduct } from "./basket.js";

const template = document.querySelector("template");
const ProductsList = document.getElementById("products-list");

function updateUI({ products }) {
  products.forEach((product, index) => {
    const {
      id,
      title,
      price: _price,
      thumbnail,
      description: _descraption,
    } = product;
    const clone = template.content.cloneNode(true);

    const image = clone.querySelector(".product-image");
    const cardTitle = clone.querySelector(".card-title");
    const descraption = clone.querySelector(".descraption");
    const price = clone.querySelector(".price");
    const a = clone.querySelector("a");
    const button = clone.querySelector(".buy-button");
    const btnEl = document.querySelector(".btnEl");

    a.href = `./about.html?id=${id}`;
    image.src = thumbnail;
    cardTitle.textContent = title;
    descraption.textContent = _descraption;
    price.textContent = _price + `$`;

    button.addEventListener("click", (e) => {
      e.preventDefault();
      addProduct(product);
    });

    ProductsList.appendChild(clone);
  });
}

function updateUIAboutUI(product) {
  console.log(product);
}

export { updateUI, updateUIAboutUI };
