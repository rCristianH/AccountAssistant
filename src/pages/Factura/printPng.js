import html2canvas from "html2canvas";
import { getTime } from "../../utils/getTime";

export const printPng = () => {
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
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `bill_${getTime()}.png`;
    link.click();
    /*  const pdf = new jsPDF();
    pdf.addImage(imgData, 0, 0, 210, 310);

    // Descargar el PDF
    pdf.save(`bill_${getTime}.pdf`); */
  });
  element.style.width = "300px";
  element.style.height = "78%";
  element.style.fontSize = "14px";
  element.style.backgroundColor = "var(--very-light-pink)";
  element.style.position = "absolute";
  element.style.borderRadius = "10px";
  element.style.border = "1px solid black";
};
