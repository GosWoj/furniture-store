import getElement from "../getElement.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");

  form.addEventListener("keyup", () => {
    const value = nameInput.value;

    if (value) {
      const filteredStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();

        if (name.includes(value)) {
          return product;
        }
      });
      display(filteredStore, getElement(".products-container"));

      if (filteredStore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">
            No products match the search
          </h3>`;
      }
    } else {
      //When input is empty, show all products
      display(store, getElement(".products-container"));
    }
  });
};

export default setupSearch;
