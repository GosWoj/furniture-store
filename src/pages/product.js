//Global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
//Specific imports
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, formatPrice } from "../utils.js";
import getElement from "../getElement.js";

const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const designerDOM = getElement(".single-product-designer");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

//Cart product
let productID;

//Show product when page loads
window.addEventListener("DOMContentLoaded", async () => {
  //Grabbing id of the product from url
  const windowID = window.location.search;
  const urlID = windowID.substring(1);

  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);

    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      //Grab data
      const { id, fields } = product;
      productID = id;
      const { name, designer, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;
      titleDOM.textContent = name;
      designerDOM.textContent = `by ${designer}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });

      //Set values
      document.title = `${name.toUpperCase()} | furny`;
      pageTitleDOM.textContent = `${name}`;
      imgDOM.src = image;
    } else {
      centerDOM.innerHTML = `<div>
        <h3 class="error">Something went wrong</h3>
        <a href="index.html" class="btn">Back to Home</a>
        </div>`;
      throw new Error(response.status, response.statusText);
    }
  } catch (error) {}
  //Hiding loading
  loading.style.display = "none";
});

cartBtn.addEventListener("click", () => {
  addToCart(productID);
});
