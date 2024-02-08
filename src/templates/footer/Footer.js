import { footerSelect } from "../../utils/Calls";

export const footer = () => {
  //Espacio para el resultado
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  const pElement = document.createElement("p");
  pElement.className = "result--p";
  pElement.textContent = "$";
  const spanElement = document.createElement("span");
  spanElement.textContent = 0;
  spanElement.className = "spanResultPrice";
  pElement.appendChild(spanElement);
  resultDiv.appendChild(pElement);
  const buttonElement = document.createElement("button");
  buttonElement.className = "result--button";
  buttonElement.textContent = "Mostrar";
  resultDiv.appendChild(buttonElement);

  //Boton para tiquet
  const btnGenTicket = document.createElement("button");
  btnGenTicket.className = "generar generarReciboPost";
  btnGenTicket.id = "generarRecibo";
  btnGenTicket.textContent = "Generar Recibo";

  //Boton para crear json
  const btnGenJson = document.createElement("button");
  btnGenJson.className = "generar";
  btnGenJson.id = "generarReciboAlt";
  /* btnGenJson.onclick = function () {
    generateJSON();
  }; */
  btnGenJson.textContent = "Pagado";
  footerSelect.append(resultDiv);
  footerSelect.appendChild(btnGenJson);
  footerSelect.appendChild(btnGenTicket);

  //Boton para cambiar estilos
  const btnChangeStyle = document.createElement("button");
  btnChangeStyle.className = "change-style-button result--button";
  btnChangeStyle.textContent = "🌓";
  footerSelect.appendChild(btnChangeStyle);
  //elemento de fondo
  const background = document.createElement("div");
  background.className = "background-footer-aside";
  background.style.display = "none";
  footerSelect.appendChild(background);
};
