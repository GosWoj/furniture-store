import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((error) => {
    throw new Error(`${error}`);
  });

  if (response) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
