import getElement from "../getElement.js";
import display from "../displayProducts.js";

const setupDesigners = (store) => {
  //Using Set to get unique values
  //Array with all unique values and 'all'
  let designers = ["all", ...new Set(store.map((product) => product.designer))];

  const designersDOM = getElement(".designers");
  designersDOM.innerHTML = designers
    .map((designer) => {
      return `<button class="designer-btn">${designer}</button>`;
    })
    .join("");

  designersDOM.addEventListener("click", (e) => {
    const element = e.target;

    if (element.classList.contains("designer-btn")) {
      let newStore = [];

      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.designer === e.target.textContent
        );
      }
      display(newStore, getElement(".products-container"));
    }
  });
};

export default setupDesigners;
