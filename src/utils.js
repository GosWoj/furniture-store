const allProductsUrl = "https://apimocha.com/furny-products/furniture";
const singleProductUrl = "https://apimocha.com/furny-products/furniture/id=";

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);

  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
