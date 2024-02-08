
import { generateJSON, imprimirJSON } from "../../pages/Factura/factura";
import { footerSelect } from "../../utils/Calls";

export const footer = () => {
  //Espacio para el resultado
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  const pElement = document.createElement("p");
  pElement.className = "result--p"
  pElement.textContent = "$";
  const spanElement = document.createElement("span");
  spanElement.textContent = 0;
  spanElement.className = "spanResultPrice";
  pElement.appendChild(spanElement);
  resultDiv.appendChild(pElement);
  const buttonElement = document.createElement("button");
  buttonElement.className = "result--button"
  buttonElement.textContent = "Mostrar";
  resultDiv.appendChild(buttonElement);

  //Boton para tiquet
  const btnGenTicket = document.createElement("button");
  btnGenTicket.className = "generar";
  btnGenTicket.id = "generarRecibo";
  btnGenTicket.onclick = function () {
    imprimirJSON();
  };
  btnGenTicket.textContent = "Generar Recibo";

  //Boton para crear json
  const btnGenJson = document.createElement("button");
  btnGenJson.className = "generar";
  btnGenJson.id = "generarReciboAlt";
  btnGenJson.onclick = function () {
    generateJSON();
  };
  btnGenJson.textContent = "Pagado";

  footerSelect.append(resultDiv);
  footerSelect.appendChild(btnGenJson)
  footerSelect.appendChild(btnGenTicket)

  //Boton para cambiar estilos
  const btnChangeStyle = document.createElement("button");
  btnChangeStyle.className = "result--button change-style-button";
  btnChangeStyle.textContent = "🌓";
  btnChangeStyle.onclick = function () {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };
  footerSelect.appendChild(btnChangeStyle);
  //elemento de fondo
  const background = document.createElement("div");
  background.className = "background-footer-aside";
  background.style.display = "none";
  footerSelect.appendChild(background);

};
