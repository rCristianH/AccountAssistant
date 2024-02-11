import {
  backgroundFooterAside,
  elementMod,
  generarRecibo,
  generarReciboAlt,
} from "../main";
import { generateTable } from "../pages/Table/GenerateTable";
import { facturaElement, orders } from "./Calls";
export let nameClient;

export const getLocalStorage = (key) => {
  let value = localStorage.getItem(key);
  if (value) {
    return value;
  }
  return null;
};

export const sumPrice = (nombre, precio) => {
  elementMod.textContent = precio + toNumber();
  console.log(elementMod.textContent);
  localStorage.setItem("ActualPrice", elementMod.textContent);
  orders.push({ nombre: nombre, precio: precio });
  localStorage.setItem("Orders", JSON.stringify(orders));
  updatePage();
};
export const sumOtherPrice = () => {
  let value = Number(document.getElementsByClassName("number-input")[0].value);
  elementMod.textContent = value + toNumber();
  orders.push({ nombre: "Otro valor", precio: value });
  localStorage.setItem("Orders", JSON.stringify(orders));
  updatePage();
};
export const addClientName = () => {
  let value = String(document.getElementsByClassName("name-input")[0].value);
  nameClient = value;
  localStorage.setItem("NameClient", nameClient);
  updatePage();
};
export const updatePage = () => {
  facturaElement.innerHTML = generateTable(orders);
};
export const toNumber = () => {
  let valor = Number(elementMod.innerHTML);
  return valor;
};
export function displaySection(section) {
  const sections = ["unidades", "paquetes", "bebidas", "huevos"];
  sections.forEach(
    (s) =>
      (document.getElementById(s).style.display =
        s === section ? "grid" : "none")
  );
}
export const firstPrintTable = () => {
  //inserta los datos del header de la tabla
  getOrdersLS();
  facturaElement.innerHTML = generateTable(orders);
  let windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (windowWidth <= 1000) {
    document.getElementById("factura").style.display = "none";
    generarRecibo.style.display = "none";
    generarReciboAlt.style.display = "none";
  }
};
export const btnViewBill = () => {
  if (facturaElement.style.display === "none") {
    facturaElement.style.display = "flex";
    generarRecibo.style.display = "block";
    generarReciboAlt.style.display = "block";
    if (window.innerWidth < 1000) {
      backgroundFooterAside.style.display = "block";
    }
    updatePage();
  } else {
    if (window.innerWidth < 1000) {
      facturaElement.style.display = "none";
      generarRecibo.style.display = "none";
      generarReciboAlt.style.display = "none";
      backgroundFooterAside.style.display = "none";
    }
  }
};
export const darkMode = () => {
  if (localStorage.getItem("ThemeMode") == "dark") {
    document.body.classList.add("dark");
  }
};
export const getOrdersLS = () => {
  const consulta = localStorage.getItem("Orders");
  const consultaName = localStorage.getItem("NameClient");
  if (consulta !== "null" && consulta !== null) {
    const parsedOrders = JSON.parse(consulta);
    orders.length = 0; // Vacía el array
    parsedOrders.forEach((item) => orders.push(item));
  }
  if (consultaName !== "null" && consultaName !== null) {
    nameClient = consultaName;
  }
  updatePage();
};
export const generateErrorModal = (type,error,res) => {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error--container");
  const errorContainerType = document.createElement("h2");
  errorContainerType.classList.add("error--type");
  errorContainerType.textContent = type;
  const errorContainerMsg = document.createElement("p");
  errorContainerMsg.classList.add("error--msg");
  errorContainerMsg.textContent = error.stack;
  const errorContainerRes = document.createElement("p");
  errorContainerRes.classList.add("error--res");
  errorContainerRes.textContent = res;
  
  errorContainer.appendChild(errorContainerType);
  errorContainer.appendChild(errorContainerMsg);
  errorContainer.appendChild(errorContainerRes);
  document.body.appendChild(errorContainer);
}
export const getTotalPrice = () => {
  const consulta = localStorage.getItem("ActualPrice");
  if (consulta !== "null" && consulta !== null) {
    elementMod.textContent = consulta;
  }
};
