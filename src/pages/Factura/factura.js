import { orders } from "../../utils/Calls";
import { addClientName, resetFactura } from "../../utils/utils";
import { sendBack } from "./postFactura.js";

export const generateJSON = async () => {
  const factura = {
    fecha: new Date().toString(),
    nombreCliente: addClientName(),
    pedido: orders,
  };
  try{
    const response = await sendBack(factura)
    console.log(response);
    if (response == 200){
      resetFactura()
    }
  }catch(error){}
  return factura;
};

export const imprimirJSON = async () => {
  const scriptPrint = await import("./printPng.js");
  scriptPrint.printPng();
};
