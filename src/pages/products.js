//Global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
//Filter imports
import setupSearch from "../filters/search.js";
import setupDesigners from "../filters/designers.js";
import setupPrice from "../filters/price.js";
//Specific imports
import { store } from "../store.js";
import display from "../displayProducts.js";
import getElement from "../getElement.js";

const loading = getElement(".page-loading");

display(store, getElement(".products-container"));

setupSearch(store);
setupDesigners(store);
setupPrice(store);

loading.style.display = "none";
