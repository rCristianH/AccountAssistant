import { orders } from "../../utils/Calls";
import { addClientName } from "../../utils/utils";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateJSON = () => {
  const factura = {
    fecha: new Date().toString(),
    nombreCliente: addClientName(),
    pedido: orders,
  };
  /* generateAndDownloadJSON(factura); */
  sendBack(factura);
  return factura;
};
export const imprimirJSON = () => {
  const element = document.querySelector("#factura");
  element.style.width = "400px";
  element.style.height = "800px";
  element.style.fontSize = "20px";
  element.style.backgroundColor = "white";
  element.style.position = "static";
  element.style.borderRadius = "0";
  element.style.border = "none";

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, 0, 0, 210, 310);

    // Descargar el PDF
    pdf.save("mi-documento.pdf");
  });
  element.style.width = "300px";
  element.style.maxHeight = "600px";
  element.style.fontSize = "14px";
  element.style.backgroundColor = "var(--very-light-pink)";
  element.style.position = "absolute";
  element.style.borderRadius = "10px";
  element.style.border = "1px solid black";
};
