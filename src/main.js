import { footer } from "./templates/footer/Footer";
import { listenerBtn } from "./utils/listeners";
import { firstPrintTable } from "./utils/utils";
import { writeProducts } from "./utils/writeProducts";

footer();
export const elementMod = document.querySelector(".spanResultPrice");
export const generarRecibo = document.querySelector("#generarRecibo");
export const generarReciboAlt = document.querySelector("#generarReciboAlt");
export const backgroundFooterAside = document.querySelector(".background-footer-aside");
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
