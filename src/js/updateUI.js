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
    const buyBtn = clone.querySelector(".buy-button");
    
    a.href = `./about.html?id=${id}`;
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



function updateUIAboutUI(product) {
  const { title, description, price, thumbnail } = product;
  console.log(product)

  const image = document.querySelector(".about-img");
  const titleEl = document.querySelector(".about-title");
  const descriptionEl = document.querySelector(".about-description");
  const priceEl = document.querySelector(".about-price");
  const buyBtn = document.querySelector(".buy-btn");  
  const id  = document.querySelector(".product-id")
  const discountPercentage = document.querySelector(".discountPercentage");

  image.src = thumbnail;
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  priceEl.textContent = `Now only ${price}$ !`;
  id.textContent = `Mahsulot ID: #${product.id}`;
  discountPercentage.textContent = `${product.discountPercentage}% 🔥Discount`

  buyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProduct(product);
  });
}

export { updateUI, updateUIAboutUI };
