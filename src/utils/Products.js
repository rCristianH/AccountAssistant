const GetStock = () => {
  const dataInLs = localStorage.getItem("data");

  //Verifica si puede obtener los productos sino retorna los productos del localstorage
  try {
    GetProduts;
  } catch (error) {
    if (dataInLs === null) {
      console.log("Error al cargar los productos: ", {error});
    }
    return JSON.parse(dataInLs);
  }
  //Una vez verificado que puede obtener los productos los guarda
  localStorage.setItem("data", JSON.stringify(GetProducts.data));
  return GetProducts.data;
};

export let productos = GetStock();
