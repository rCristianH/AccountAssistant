import { productos } from "./Products";

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
      addButton.className = `product-card--button-text product-card--button-text${e.inputClass}`;
      addButton.textContent = ">";
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

      const divButtons = document.createElement("div")
      divButtons.className = "product-card--buttons-container"

      const addButton = document.createElement("button");
      addButton.className = "product-card--button product-card--button--1";
      addButton.textContent = "+";
      addButton.dataset.name = e.name;
      addButton.dataset.price = e.price;

      const addButton2 = document.createElement("button");
      addButton2.className = "product-card--button product-card--button--2";
      addButton2.textContent = "+2";
      addButton2.dataset.name = e.name;
      addButton2.dataset.price = e.price;

      const addButton5 = document.createElement("button");
      addButton5.className = "product-card--button product-card--button--5";
      addButton5.textContent = "+5";
      addButton5.dataset.name = e.name;
      addButton5.dataset.price = e.price;

      // Agregar los elementos al DOM
      productCard.appendChild(productInfo);
      divButtons.appendChild(addButton);
      divButtons.appendChild(addButton2);
      divButtons.appendChild(addButton5);
      productCard.appendChild(divButtons)

      nodes.push(productCard);
    }
  });
  return nodes;
};

export const writeProducts = (type, container) => {
  const nodes = createProducts(type);
  const cont = document.querySelector(container);
  cont.innerHTML = "";
  cont.append(...nodes);
};
