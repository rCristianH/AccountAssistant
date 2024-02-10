//agrega la varibale data al localsotrage para que no se pierda al recargar la pagina

const GetStock = () => {
  const getDATALS = localStorage.getItem("data");
  const dataLsParse = JSON.parse(localStorage.getItem("data"));
  const data = GetProducts.data;
  if (!getDATALS || getDATALS == 'null') {
    localStorage.setItem("data", JSON.stringify(data));
    return JSON.parse(localStorage.getItem("data"));
  } else if (getDATALS.length > 4) {
    if (getDATALS != JSON.stringify(data)) {
      localStorage.setItem("data", JSON.stringify(data));
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return dataLsParse;
    }
  }
};

export let productos = GetStock();
