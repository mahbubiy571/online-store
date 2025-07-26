import { addProduct } from "./basket.js";

const template = document.querySelector("template");
const ProductsList = document.getElementById("products-list");
const cartList = document.getElementById("card-list");
const CartTemplate = document.getElementById("cart-template");

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
    const buyBtn = clone.querySelector(".buy-button");

    a.href = `./product.html?id=${id}`; 
    image.src = thumbnail;
    cardTitle.textContent = title;
    descraption.textContent = _descraption;
    price.textContent = _price + `$`;

    buyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addProduct(product);
    });

    ProductsList.appendChild(clone);
  });
}

function updateUIProductUI(product) {
  const { title, description, price, thumbnail } = product;

  const image = document.querySelector(".product-img");
  const titleEl = document.querySelector(".product-title");
  const descriptionEl = document.querySelector(".product-description");
  const priceEl = document.querySelector(".product-price");
  const buyBtn = document.querySelector(".buy-btn");
  const id = document.querySelector(".product-id");
  const discountPercentage = document.querySelector(".discountPercentage");

  image.src = thumbnail;
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  priceEl.textContent = `Now only ${price}$ !`;
  id.textContent = `Mahsulot ID: #${product.id}`;
  discountPercentage.textContent = `${product.discountPercentage}% 🔥Discount`;

  buyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProduct(product);
  });
}

function updateCartUI(products) {
  products.forEach((product) => {
    const clone = CartTemplate.content.cloneNode(true);

    const priceEL = clone.querySelector(".price");
    const productImage = clone.querySelector(".product-image");

    productImage.src = product.thumbnail;
    priceEL.textContent = `${product.price}$`;

    cartList.appendChild(clone);
  });
}

export { updateUI, updateUIProductUI, updateCartUI };
