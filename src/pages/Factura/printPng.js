import html2canvas from "html2canvas";
import { getTime } from "../../utils/getTime";

export const printPng = () => {
  const element = document.querySelector("#factura");
  //add styles to enhance resoluction
  element.classList.toggle("toggleAsideFactura");
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `bill_${getTime()}.png`;
    link.click();
    /*  const pdf = new jsPDF(); pdf.addImage(imgData, 0, 0, 210, 310); pdf.save(`bill_${getTime}.pdf`); */
  });
  element.classList.toggle("toggleAsideFactura");
};
