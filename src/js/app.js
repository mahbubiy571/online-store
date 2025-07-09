AOS.init();

const template = document.querySelector("template");
const ProductsList = document.getElementById("products-list");
const btnEl = document.querySelector(".btnEl");

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
    const li = clone.querySelector("li");

    image.src = thumbnail;
    cardTitle.textContent = title;
    descraption.textContent = _descraption;
    price.textContent = _price + `$`;
    li.setAttribute("data-aos-delay", `${index * 10 + 50}`);

    ProductsList.appendChild(clone);
  });
}

async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

btnEl.addEventListener("click", async () => {
  const data = await getData("https://dummyjson.com/products?limit=30");
  updateUI(data);
});

getData("https://dummyjson.com/products")
  .then((data) => updateUI(data))
  .catch((eror) => console.log(eror));
