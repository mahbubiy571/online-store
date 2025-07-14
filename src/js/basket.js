const productAmount = document.getElementById("products-amount");

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const changeBasket = () => {
  let amount = 0;
  products.forEach((product) => {
    amount += product.amount;
  });
  productAmount.textContent = amount;
};

if (products) {
  changeBasket();
}

export const addProduct = (p) => {
  let isAdded = products.find((product) => product.id == p.id);
  Toastify({
    text: "Mahsulot qo'shildi",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {},
  }).showToast();

  if (isAdded) {
    isAdded.amount += 1;
  } else {
    products.push({ ...p, amount: 1 });
  }
  changeBasket();

  localStorage.setItem("products", JSON.stringify(products));
};
