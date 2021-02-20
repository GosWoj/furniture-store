import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((product) => {
    const { id, featured, name, price, designer, colors, image: img } = product;

    const image = img[0].url;
    return { id, featured, name, price, designer, colors, image };
  });
  //Setting store, so products can be easily grabbed
  //from any page
  setStorageItem("store", store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);

  return product;
};

export { store, setupStore, findProduct };
