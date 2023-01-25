//unidad
const delgada = 1400;
const delgadaQ = 3500;
const delgadaH = 3800;
const gratinada = 4500;
const gorda = 1100;
const gordaQ = 2700;
const sinSal = 600;
const sinSalQ = 2200;
//paquete
const delgadaP = 13000;
const gordaP = 10000;
const sinSalP = 5500;
//bebida
const cafe = 1000;
const cafeLeche = 1300;
const chocolate = 2500;
//huevos
const eggs = 2500;

//cuenta final
const elementMod = document.querySelector(".result > p > span");

//apoyo
function toNumber() {
  let valor = Number(elementMod.textContent);
  return valor;
}
//operations +
function Sumdelgada() {
  elementMod.innerHTML = delgada + toNumber();
}
function SumdelgadaQ() {
  elementMod.innerHTML = delgadaQ + toNumber();
}
function SumdelgadaH() {
  elementMod.innerHTML = delgadaH + toNumber();
}
function Sumgratinada() {
  elementMod.innerHTML = gratinada + toNumber();
}
function Sumgorda() {
  elementMod.innerHTML = gorda + toNumber();
}
function SumgordaQ() {
  elementMod.innerHTML = gordaQ + toNumber();
}
function SumsinSal() {
  elementMod.innerHTML = sinSal + toNumber();
}
function SumsinSalQ() {
  elementMod.innerHTML = sinSalQ + toNumber();
}

function SumdelgadaP() {
  elementMod.innerHTML = delgadaP + toNumber();
}
function SumgordaP() {
  elementMod.innerHTML = gordaP + toNumber();
}
function SumsinSalP() {
  elementMod.innerHTML = sinSalP + toNumber();
}

function Sumcafe() {
  elementMod.innerHTML = cafe + toNumber();
}
function SumcafeLeche() {
  elementMod.innerHTML = cafeLeche + toNumber();
}
function Sumchocolate() {
  elementMod.innerHTML = chocolate + toNumber();
}

function Sumhuevos() {
  elementMod.innerHTML = eggs + toNumber();
}
function otroPrecio() {
    let value = Number(document.getElementsByClassName("number-input")[0].value)
    elementMod.innerHTML = value + toNumber();
}

//operations -

function Resdelgada() {
    elementMod.innerHTML = toNumber() - delgada;
  }
  function ResdelgadaQ() {
    elementMod.innerHTML = toNumber() - delgadaQ;
  }
  function ResdelgadaH() {
    elementMod.innerHTML = toNumber() - delgadaH;
  }
  function Resgratinada() {
    elementMod.innerHTML = toNumber() - gratinada;
  }
  function Resgorda() {
    elementMod.innerHTML = toNumber() - gorda;
  }
  function ResgordaQ() {
    elementMod.innerHTML = toNumber() - gordaQ;
  }
  function RessinSal() {
    elementMod.innerHTML = toNumber() - sinSal;
  }
  function RessinSalQ() {
    elementMod.innerHTML = toNumber() - sinSalQ;
  }
  
  function ResdelgadaP() {
    elementMod.innerHTML = toNumber() - delgadaP;
  }
  function ResgordaP() {
    elementMod.innerHTML = toNumber() - gordaP;
  }
  function RessinSalP() {
    elementMod.innerHTML = toNumber() - sinSalP;
  }
  
  function Rescafe() {
    elementMod.innerHTML = toNumber() - cafe;
  }
  function RescafeLeche() {
    elementMod.innerHTML = toNumber() - cafeLeche;
  }
  function Reschocolate() {
    elementMod.innerHTML = toNumber() - chocolate;
  }
  
  function Reshuevos() {
    elementMod.innerHTML = toNumber() - eggs;
  }