import getElement from "../getElement.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  //Setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  //Rounding up the number
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.max = maxPrice;
  priceInput.value = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value: ${maxPrice} €`;

  priceInput.addEventListener("input", () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: ${value} €`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement(".products-container"));

    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">
        No products match the search
      </h3>`;
    }
  });
};

export default setupPrice;
