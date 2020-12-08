const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`${selection} doesn't exists`);
};

export default getElement;
