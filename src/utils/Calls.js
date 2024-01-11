export const jsPDFScript = document.createElement("script");
jsPDFScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
jsPDFScript.type = "text/javascript";
export const facturaElement = document.getElementById("factura");
export const orders = [];
export const headerNavList = document.querySelector(".nav--header--ul")
export const footerSelect = document.querySelector(".footer")
