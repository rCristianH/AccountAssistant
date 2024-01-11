import { orders } from "../../utils/Calls";
import { addClientName } from "../../utils/utils";

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
    console.log("Error to fix");
    /* El archivo de salida si son muchos productos no se muestra completo en el pdf */
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
};
/* html2canvas
jsPDF */