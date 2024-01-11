import { productos } from "./Products";
import { sumPrice } from "./utils";

const createProducts = (type) => {
  const nodes = [];
  productos[type].forEach((e) => {

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    // Crear el elemento div con la clase 'product-info' y agregar los elementos p
    const productInfo = document.createElement("div");
    productInfo.className = "product-info";
    productInfo.innerHTML = `<p>${e.shortName}</p><p>${e.price}</p>`;
    // Crear el botón con el evento onclick
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.onclick = function () {
      sumPrice(e.name, e.price);
    };
    // Agregar los elementos al DOM
    productCard.appendChild(productInfo);
    productCard.appendChild(addButton);

    nodes.push(productCard)
  });
  return nodes
};

export const writeProducts = (type, container) => {
  const nodes = createProducts(type);
  document.querySelector(container).append(...nodes);
};