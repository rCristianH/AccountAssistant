import { footer } from "./templates/footer/Footer";
import { listenerBtn } from "./utils/listeners";
import { darkMode, firstPrintTable, getOrdersLS, nameClient } from "./utils/utils";
import { writeProducts } from "./utils/writeProducts";
//Comprueba si el usuario tiene un tema guardado en el local storage
getOrdersLS();
darkMode();
//Agrega el footer al final de la pagina
footer();
export const elementMod = document.querySelector(".spanResultPrice");
export const generarRecibo = document.querySelector("#generarRecibo");
export const generarReciboAlt = document.querySelector("#generarReciboAlt");
export const backgroundFooterAside = document.querySelector(
  ".background-footer-aside"
);
writeProducts("arepas", "#unidades");
writeProducts("paquetes", "#paquetes");
writeProducts("bebidas", "#bebidas");
writeProducts("huevos", "#huevos");

listenerBtn();

firstPrintTable();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("../sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}