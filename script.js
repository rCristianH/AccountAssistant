const productos = {
  arepas: [
    { nombre: "Delgada", precio: 1400 },
    { nombre: "Delgada Queso", precio: 3500 },
    { nombre: "Delgada Huevo", precio: 3900 },
    { nombre: "Gratinada", precio: 4800 },
    { nombre: "Gorda", precio: 1100 },
    { nombre: "Gorda Queso", precio: 2700 },
    { nombre: "Sin sal", precio: 600 },
    { nombre: "Sin sal Queso", precio: 2300 },
  ],
  paquetes: [
    { nombre: "Delgada", precio: 13000 },
    { nombre: "Gorda", precio: 10000 },
    { nombre: "Sin sal", precio: 5500 },
  ],
  bebidas: [
    { nombre: "Cafe", precio: 1000 },
    { nombre: "Cafe Leche", precio: 1300 },
    { nombre: "Chocolate", precio: 2500 },
    { nombre: "Vaso", precio: 300 },
  ],
  huevos: [
    { nombre: "Huevos", precio: 2500 },
    { nombre: "Huevo", precio: 1300 },
  ],
};

const elementMod = document.querySelector(".result > p > span");
const facturaElement = document.getElementById("factura");
const unidadesElement = document.getElementById("unidades");
const paquetesElement = document.getElementById("paquetes");
const bebidasElement = document.getElementById("bebidas");
const huevosElement = document.getElementById("huevos");
const numeroElement = document.getElementsByClassName("number-input")[0];

//Funcion de apoyo
function toNumber() {
  let valor = Number(elementMod.textContent);
  return valor;
}

const items = [];

function sumar(nombre, precio) {
  elementMod.textContent = precio + toNumber();
  items.push(`<div>${precio} ${nombre}</div>`);
}
function otroPrecio() {
  let value = Number(document.getElementsByClassName("number-input")[0].value);
  elementMod.textContent = value + toNumber();
  items.push(`<div>${value} Otro valor</div>`);
}
//Funcion que muestra u oculta la factura
function botonPagar() {
  const facturaElement = document.getElementById("factura");
  if (facturaElement.style.display === "none") {
    facturaElement.style.display = "flex";
    facturaElement.innerHTML = items.join("");
  } else {
    facturaElement.style.display = "none";
  }
}

//Funcion que oculta o muestra los tipos de productos
function displaySection(section) {
  const sections = ["unidades", "paquetes", "bebidas", "huevos"];
  sections.forEach(
    (s) =>
      (document.getElementById(s).style.display =
        s === section ? "grid" : "none")
  );
}
