import { btnViewBill } from "../../main";
import { generateJSON, imprimirJSON } from "../../pages/Factura/factura";
import { footerSelect } from "../../utils/Calls";

export const footer = () => {
  //Espacio para el resultado
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  const pElement = document.createElement("p");
  pElement.textContent = "$";
  const spanElement = document.createElement("span");
  spanElement.textContent = 0;
  spanElement.className = "spanResultPrice";
  pElement.appendChild(spanElement);
  resultDiv.appendChild(pElement);
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Mostrar";
  buttonElement.onclick = function () {
    btnViewBill();
  };
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
};
