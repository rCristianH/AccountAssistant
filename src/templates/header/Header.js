/* import { headerNavList } from "../../utils/Calls";
import { displaySection } from "../../utils/utils"; */
import { navigate } from "./HeaderList";

const headerNavList = document.querySelector(".nav--header--ul")
function displaySection(section) {
  const sections = ["unidades", "paquetes", "bebidas", "huevos"];
  sections.forEach(
    (s) =>
      (document.getElementById(s).style.display =
        s === section ? "grid" : "none")
  );
}
const writeNav = () => {
  const nodes = [];
  navigate.nav.forEach((e) => {
    const listELement = document.createElement("li");
    const listSpanElement = document.createElement("a");
    listSpanElement.className = "nav--header--ul--a"
    listSpanElement.textContent = e.reference;
    listSpanElement.onclick = function () {
      displaySection(e.name);
    };
    listELement.appendChild(listSpanElement);
    nodes.push(listELement);
  });
  return nodes;
};

export const header = () => {
  const nodes = writeNav();
  headerNavList.append(...nodes);
};
