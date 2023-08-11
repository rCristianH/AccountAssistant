const productos = {
  arepas: [
    { nombre: "Delgada", precio: 1400 },
    { nombre: "Delgada Queso", precio: 4000 },
    { nombre: "Delgada Huevo", precio: 3900 },
    { nombre: "Gratinada", precio: 5000 },
    { nombre: "Gorda", precio: 1100 },
    { nombre: "Gorda Queso", precio: 3000 },
    { nombre: "Sin sal", precio: 600 },
    { nombre: "Sin sal Queso", precio: 2500 },
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
    { nombre: "Pericos", precio: 3500 },
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

const pedidos = [];

function sumar(nombre, precio) {
  elementMod.textContent = precio + toNumber();
  pedidos.push({ nombre: nombre, precio: precio });
  updatePage();
}

function otroPrecio() {
  let value = Number(document.getElementsByClassName("number-input")[0].value);
  elementMod.textContent = value + toNumber();
  pedidos.push({ nombre: "Otro valor", precio: value });
  updatePage();
}
function agregaNombre() {
  let value = String(document.getElementsByClassName("name-input")[0].value);
  return value
}


// Funcion que muestra u oculta la factura
function botonPagar() {
  if (facturaElement.style.display === "none") {
    facturaElement.style.display = "flex";
    updatePage();
  } else {
    facturaElement.style.display = "none";
  }
}


// Función para actualizar el contenido en la página
function updatePage() {
  facturaElement.innerHTML = generateHTML(pedidos) + '<button id="generarRecibo" onclick="imprimirJSON()">Generar Recibo</button>';
}

// Función para generar el JSON a partir de los elementos del array
function generateJSON() {
  const factura = {
    fecha: new Date().toString(),
    nombreCliente: agregaNombre(),
    pedido: pedidos
  };
  generateAndDownloadJSON(factura);
  return factura;
}

// Función para generar el HTML a partir de los elementos del array
function generateHTML(pedidos) {
  return pedidos.map(item => `<div>${item.precio} ${item.nombre}</div>`).join("");
}

// Función para imprimir el JSON en la consola
function imprimirJSON() {
  const factura = generateJSON();
  console.log(JSON.stringify([factura], null, 2)); // Imprimir JSON en la consola
}

function generateAndDownloadJSON(data) {
  const jsonBlob = new Blob([JSON.stringify([data], null, 2)], { type: 'application/json' });
  const jsonUrl = URL.createObjectURL(jsonBlob);

  const downloadLink = document.createElement('a');
  downloadLink.href = jsonUrl;
  downloadLink.download = 'recibo.json';

  // Agrega el enlace al documento y haz clic en él para descargar el archivo
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Elimina el enlace después de la descarga
  document.body.removeChild(downloadLink);
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
