import { headerNavList } from "../../utils/Calls";
import { displaySection } from "../../utils/utils";
import { navigate } from "./HeaderList";

const writeNav = () => {
  const nodes = [];
  console.log(navigate);
  navigate.nav.forEach((e) => {
    const listELement = document.createElement("li");
    const listSpanElement = document.createElement("a");
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
