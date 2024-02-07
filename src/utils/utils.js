import { elementMod, generarRecibo, generarReciboAlt } from "../main";
import { generateTable } from "../pages/Table/GenerateTable";

import { facturaElement, orders } from "./Calls";


export const sumPrice = (nombre, precio) => {
  elementMod.textContent = precio + toNumber();
  orders.push({ nombre: nombre, precio: precio });
  updatePage();
}
export const sumOtherPrice = () => {
  let value = Number(document.getElementsByClassName("number-input")[0].value);
  elementMod.textContent = value + toNumber();
  orders.push({ nombre: "Otro valor", precio: value });
  updatePage();
}
export const addClientName = () => {
  let value = String(document.getElementsByClassName("name-input")[0].value);
  return value;
}
export const updatePage = () => {
  facturaElement.innerHTML = generateTable(orders);
}
export const toNumber = () => {
  let valor = Number(elementMod.innerHTML);
  return valor;
}
export function displaySection(section) {
  const sections = ["unidades", "paquetes", "bebidas", "huevos"];
  sections.forEach(
    (s) =>
      (document.getElementById(s).style.display =
        s === section ? "grid" : "none")
  );
}
export const firstPrintTable = ()=> {
  //inserta los datos del header de la tabla
  facturaElement.innerHTML = generateTable(orders)
  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if(windowWidth <= 1000) {
    document.getElementById("factura").style.display = "none"
    generarRecibo.style.display = "none"
    generarReciboAlt.style.display = "none"
  }
}