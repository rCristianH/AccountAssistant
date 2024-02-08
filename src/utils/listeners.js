import { imprimirJSON } from "../pages/Factura/factura";
import { btnViewBill, sumPrice } from "./utils";

//evento para escuchar el click de los botones de agregar un producto
export const listenerBtn = () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.className == "product-card--button") {
      const objective = event.target;
      const nameProduct = objective.dataset.name;
      const priceProduct = Number(objective.dataset.price);
      //function
      sumPrice(nameProduct, priceProduct);
    }
    if (event.target.className == "result--button") {
      btnViewBill();
    }
    if (event.target.className == "background-footer-aside") {
      btnViewBill();
    }
    if (event.target.classList.contains("change-style-button")) {
      if (localStorage.getItem("ThemeMode") == "null") {
        document.body.classList.add("dark");
        localStorage.setItem("ThemeMode", "dark");
      } else if (localStorage.getItem("ThemeMode") == "dark") {
        document.body.classList.remove("dark");
        localStorage.setItem("ThemeMode", "null");
      }
    }
    if (event.target.classList.contains("generarReciboPost")) {
      imprimirJSON();
    }
  });
};
