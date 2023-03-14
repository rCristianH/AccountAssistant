//unidad
const delgada = 1400;
const delgadaQ = 3500;
const delgadaH = 3900;
const gratinada = 4800;
const gorda = 1100;
const gordaQ = 2700;
const sinSal = 600;
const sinSalQ = 2300;
//paquete
const delgadaP = 13000;
const gordaP = 10000;
const sinSalP = 5500;
//bebida
const cafe = 1000;
const cafeLeche = 1300;
const chocolate = 2500;
//huevos
const eggs = 2500;
const egg = 1300;

//cuenta final
const elementMod = document.querySelector(".result > p > span");
let factura = "";

//apoyo
function toNumber() {
  let valor = Number(elementMod.textContent);
  return valor;
}
//operations +
function Sumdelgada() {
  elementMod.innerHTML = delgada + toNumber();
  factura += `<div>${delgada} Delgada</div>`;
}
function SumdelgadaQ() {
  elementMod.innerHTML = delgadaQ + toNumber();
  factura += `<div>${delgadaQ} Delgada Queso</div>`;
}
function SumdelgadaH() {
  elementMod.innerHTML = delgadaH + toNumber();
  factura += `<div>${delgadaH} Delgada Huevo</div>`;
}
function Sumgratinada() {
  elementMod.innerHTML = gratinada + toNumber();
  factura += `<div>${gratinada} Gratinada</div>`;
}
function Sumgorda() {
  elementMod.innerHTML = gorda + toNumber();
  factura += `<div>${gorda} Gorda</div>`;
}
function SumgordaQ() {
  elementMod.innerHTML = gordaQ + toNumber();
  factura += `<div>${gordaQ} Gorda Queso</div>`;
}
function SumsinSal() {
  elementMod.innerHTML = sinSal + toNumber();
  factura += `<div>${sinSal} Sin sal</div>`;
}
function SumsinSalQ() {
  elementMod.innerHTML = sinSalQ + toNumber();
  factura += `<div>${sinSalQ} Sin sal Queso</div>`;
}

function SumdelgadaP() {
  elementMod.innerHTML = delgadaP + toNumber();
  factura += `<div>${delgadaP} Delgada Paquete</div>`;
}
function SumgordaP() {
  elementMod.innerHTML = gordaP + toNumber();
  factura += `<div>${gordaP} Gorda Paquete</div>`;
}
function SumsinSalP() {
  elementMod.innerHTML = sinSalP + toNumber();
  factura += `<div>${sinSalP} Sin sal Paquete</div>`;
}

function Sumcafe() {
  elementMod.innerHTML = cafe + toNumber();
  factura += `<div>${cafe} Cafe</div>`;
}
function SumcafeLeche() {
  elementMod.innerHTML = cafeLeche + toNumber();
  factura += `<div>${cafeLeche} Cafe Leche</div>`;
}
function Sumchocolate() {
  elementMod.innerHTML = chocolate + toNumber();
  factura += `<div>${chocolate} Chocolate</div>`;
}

function Sumhuevos() {
  elementMod.innerHTML = eggs + toNumber();
  factura += `<div>${eggs} Huevos</div>`;
}
function Sumhuevosunidad() {
  elementMod.innerHTML = egg + toNumber();
  factura += `<div>${egg} Huevo</div>`;
}
function otroPrecio() {
  let value = Number(document.getElementsByClassName("number-input")[0].value);
  elementMod.innerHTML = value + toNumber();
  factura += `<div>${value} Otro valor</div>`;
}

//operations -

function Resdelgada() {
  elementMod.innerHTML = toNumber() - delgada;
}
function ResdelgadaQ() {
  elementMod.innerHTML = toNumber() - delgadaQ;
}
function ResdelgadaH() {
  elementMod.innerHTML = toNumber() - delgadaH;
}
function Resgratinada() {
  elementMod.innerHTML = toNumber() - gratinada;
}
function Resgorda() {
  elementMod.innerHTML = toNumber() - gorda;
}
function ResgordaQ() {
  elementMod.innerHTML = toNumber() - gordaQ;
}
function RessinSal() {
  elementMod.innerHTML = toNumber() - sinSal;
}
function RessinSalQ() {
  elementMod.innerHTML = toNumber() - sinSalQ;
}

function ResdelgadaP() {
  elementMod.innerHTML = toNumber() - delgadaP;
}
function ResgordaP() {
  elementMod.innerHTML = toNumber() - gordaP;
}
function RessinSalP() {
  elementMod.innerHTML = toNumber() - sinSalP;
}

function Rescafe() {
  elementMod.innerHTML = toNumber() - cafe;
}
function RescafeLeche() {
  elementMod.innerHTML = toNumber() - cafeLeche;
}
function Reschocolate() {
  elementMod.innerHTML = toNumber() - chocolate;
}

function Reshuevos() {
  elementMod.innerHTML = toNumber() - eggs;
}
function Reshuevosunidad() {
  elementMod.innerHTML = toNumber() - egg;
}

function botonPagar() {
  const out = document.getElementById("factura");
  out.style.display = "flex";
  out.innerHTML = factura
}

function displayArepas() {
  document.getElementById("unidades").style.display = "grid";
  document.getElementById("paquetes").style.display = "none";
  document.getElementById("bebidas").style.display = "none";
  document.getElementById("huevos").style.display = "none";
}
function displayPaquetes(){
  document.getElementById("unidades").style.display = "none";
  document.getElementById("paquetes").style.display = "grid";
  document.getElementById("bebidas").style.display = "none";
  document.getElementById("huevos").style.display = "none";
}
function displayBebidas(){
  document.getElementById("unidades").style.display = "none";
  document.getElementById("paquetes").style.display = "none";
  document.getElementById("bebidas").style.display = "grid";
  document.getElementById("huevos").style.display = "none";
}
function displayHuevos(){
  document.getElementById("unidades").style.display = "none";
  document.getElementById("paquetes").style.display = "none";
  document.getElementById("bebidas").style.display = "none";
  document.getElementById("huevos").style.display = "grid";
}
