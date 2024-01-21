import { productos } from "./Products";
import { sumPrice } from "./utils";

const createProducts = (type) => {
  const nodes = [];
  productos[type].forEach((e) => {
    if (e.input == "input") {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      const productInfo = document.createElement("div");
      productInfo.className = "product-info";
      const productInput = document.createElement("input");
      productInput.type = e.inputType;
      productInput.placeholder = e.inputPlaceholder;
      productInput.className = e.inputClass;
      productInfo.appendChild(productInput);
      const addButton = document.createElement("button");
      addButton.className = "product-card--button-text"
      addButton.textContent = ">";
      addButton.onclick = function () {
        e.inputFunction();
      };
      productCard.appendChild(productInfo);
      productCard.appendChild(addButton);
      nodes.push(productCard);
    } else {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      // Crear el elemento div con la clase 'product-info' y agregar los elementos p
      const productInfo = document.createElement("div");
      productInfo.className = "product-info";
      productInfo.innerHTML = `<p class="product-info--p--name">${e.shortName}</p><p class="product-info--p--price">${e.price}</p>`;
      // Crear el botón con el evento onclick
      const addButton = document.createElement("button");
      addButton.className = "product-card--button"
      addButton.textContent = "+";
      addButton.dataset.name = e.name
      addButton.dataset.price = e.price
      // Agregar los elementos al DOM
      productCard.appendChild(productInfo);
      productCard.appendChild(addButton);

      nodes.push(productCard);
    }
  });
  return nodes;
};

export const writeProducts = (type, container) => {
  const nodes = createProducts(type);
  const cont =document.querySelector(container)
  cont.innerHTML = ""
  cont.append(...nodes);
};