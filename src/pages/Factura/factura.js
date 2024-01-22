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
export const imprimirJSON = async () => {
  const scriptPrint = await import("./printPng.js")
  scriptPrint.printPng()
};
