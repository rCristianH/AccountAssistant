import { addClientName, sumOtherPrice } from "./utils";

export const productos = {
  arepas: [
    { shortName: "Delgada", name: "Delgada", price: 1400 },
    { shortName: "Delgada Q", name: "Delgada Queso", price: 4500 },
    { shortName: "Delgada H", name: "Delgada Huevo", price: 3900 },
    { shortName: "Gratinada", name: "Gratinada", price: 6000 },
    { shortName: "Gorda", name: "Gorda", price: 1100 },
    { shortName: "Gorda Q", name: "Gorda Queso", price: 3800 },
    { shortName: "Sin sal", name: "Sin sal", price: 600 },
    { shortName: "Sin sal Q", name: "Sin sal Queso", price: 3000 },
    { shortName: "Loncha", name: "Queso Loncha", price: 1500 },
  ],
  paquetes: [
    { shortName: "Delgada", name: "Delgada", price: 13000 },
    { shortName: "Gorda", name: "Gorda", price: 10000 },
    { shortName: "Sin sal", name: "Sin sal", price: 6000 },
  ],
  bebidas: [
    { shortName: "Cafe", name: "Cafe", price: 1000 },
    { shortName: "Cafe Leche", name: "Cafe Leche", price: 1300 },
    { shortName: "Chocolate", name: "Chocolate", price: 2500 },
    { shortName: "Vaso", name: "Vaso", price: 300 },
  ],
  huevos: [
    { shortName: "Huevos", name: "Huevos", price: 2500 },
    { shortName: "Huevo", name: "Huevo", price: 1300 },
    { shortName: "Pericos", name: "Pericos", price: 3500 },
    {
      input: "input",
      inputType: "number",
      inputPlaceholder: "Otro Precio",
      inputFunction: sumOtherPrice,
      inputClass: "number-input",
    },
    {
      input: "input",
      inputType: "text",
      inputPlaceholder: "Nombre",
      inputFunction: addClientName,
      inputClass: "name-input",
    },
  ],
};
