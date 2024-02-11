import { generateErrorModal } from "./utils";

const GetStock = () => {
  const dataInLs = localStorage.getItem("data");

  //Verifica si puede obtener los productos sino retorna los productos del localstorage
  try {
    GetProducts;
  } catch (error) {
    if (dataInLs === null) {
      generateErrorModal(
        "Error 404",
        error,
        "Verifique su conexión a internet o revise su archivo de productos."
      );
    }
    return JSON.parse(dataInLs);
  }
  //Una vez verificado que puede obtener los productos los guarda
  localStorage.setItem("data", JSON.stringify(GetProducts.data));
  return GetProducts.data;
};

export let productos = GetStock();
