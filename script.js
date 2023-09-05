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

const jsPDFScript = document.createElement("script");
jsPDFScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
jsPDFScript.type = "text/javascript";
const elementMod = document.querySelector(".result > p > span");
const facturaElement = document.getElementById("factura");
const generarRecibo = document.querySelector("#generarRecibo");
const generarReciboAlt = document.querySelector("#generarReciboAlt");
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
  return value;
}

// Funcion que muestra u oculta la factura
function botonPagar() {
  if (facturaElement.style.display === "none") {
    facturaElement.style.display = "flex";
    generarRecibo.style.display = "block";
    generarReciboAlt.style.display = "block";
    updatePage();
  } else {
    facturaElement.style.display = "none";
    generarRecibo.style.display = "none";
    generarReciboAlt.style.display = "none";
  }
}

// Función para actualizar el contenido en la página
function updatePage() {
  facturaElement.innerHTML = generateHTML(pedidos);
}

// Función para generar el JSON a partir de los elementos del array
function generateJSON() {
  const factura = {
    fecha: new Date().toString(),
    nombreCliente: agregaNombre(),
    pedido: pedidos,
  };
  /* generateAndDownloadJSON(factura); */
  sendBack(factura);
  return factura;
}

// Función para generar el HTML a partir de los elementos del array
function generateHTML(pedidos) {
  const productos = {}; // Objeto para acumular cantidades y totales por producto
  let totalGeneral = 0; // Variable para acumular el total general

  // Procesar los pedidos y acumular información en el objeto 'productos'
  pedidos.forEach((item) => {
    if (!productos[item.nombre]) {
      productos[item.nombre] = { cantidad: 0, precio: item.precio };
    }
    productos[item.nombre].cantidad++;
    totalGeneral += item.precio;
  });

  // Crear el encabezado de la tabla
  let optClient = agregaNombre() == "" ? "Cliente General" : agregaNombre();
  let html = `
  <div class="client-name">Cliente: <span class="client-name--span">${optClient}</span></div>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>P/Unidad</th>
          <th>P/Total</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Agregar filas para cada producto acumulado
  for (const nombreProducto in productos) {
    const producto = productos[nombreProducto];
    const subtotal = producto.cantidad * producto.precio;
    html += `
      <tr>
        <td>${nombreProducto} X${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td>${subtotal}</td>
      </tr>
    `;
  }

  // Agregar fila para el total general
  html += `
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>${totalGeneral}</td>
        </tr>
      </tfoot>
    </table>
  `;

  return html;
}

// Función para imprimir el JSON en la consola
/* function imprimirJSON() {
  const factura = generateJSON();
  console.log(JSON.stringify([factura], null, 2)); // Imprimir JSON en la consola
} */
function imprimirJSON() {
  const element = document.querySelector("#factura");
  element.style.width = "810px";
  element.style.maxHeight = "auto";
  element.style.fontSize = "28px";
  element.style.backgroundColor = "white";
  element.style.position = "static";
  element.style.borderRadius = "0";
  element.style.border = "none";

  html2canvas(element).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    console.log(pdf);
    const pdfWidth = pdf.internal.pageSize.height;
    console.log(pdfWidth);
    pdf.addImage(imgData, "PNG", 0, 0);

    // Descargar el PDF
    pdf.save("mi-documento.pdf");
  });
  element.style.width = "300px";
  element.style.maxHeight = "600";
  element.style.fontSize = "14px";
  element.style.backgroundColor = "var(--very-light-pink)";
  element.style.position = "absolute";
  element.style.borderRadius = "10px";
  element.style.border = "1px solid black";
}

/* function generateAndDownloadJSON(data) {
  const jsonBlob = new Blob([JSON.stringify([data], null, 2)], {
    type: "application/json",
  });
  const jsonUrl = URL.createObjectURL(jsonBlob);

  const downloadLink = document.createElement("a");
  downloadLink.href = jsonUrl;
  downloadLink.download = "recibo.json";

  // Agrega el enlace al documento y haz clic en él para descargar el archivo
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Elimina el enlace después de la descarga
  document.body.removeChild(downloadLink);
} */

const sendBack = async (factura) => {
  try {
    const response = await fetch("url/guardar-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factura),
    });

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

//Funcion que oculta o muestra los tipos de productos
function displaySection(section) {
  const sections = ["unidades", "paquetes", "bebidas", "huevos"];
  sections.forEach(
    (s) =>
      (document.getElementById(s).style.display =
        s === section ? "grid" : "none")
  );
}
