//Global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
//Specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import getElement from "./src/getElement.js";

const init = async () => {
  const products = await fetchProducts();

  if (products) {
    setupStore(products);
    const featured = store
      .filter((product) => {
        return product.featured === true;
      })
      .slice(0, 3);
    display(featured, getElement(".featured-center"));
  }
};

window.addEventListener("DOMContentLoaded", init);
