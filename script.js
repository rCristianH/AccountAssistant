let containerArepas = document.getElementById("containerArepas");
let containerArepasPack = document.getElementById("containerArepasPack");
let containerEggs = document.getElementById("containerEggs");
let containerDrinks = document.getElementById("containerDrinks");

let arepas = [];
let optionArepas;
let arepasPacks = [];
let optionArepasPacks;
let drinks = [];
let optionDrinks;
let eggs = [];
let optionEggs;

class Arepa {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class ArepaPack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Egg {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Drink {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//Arepas
let arepaSlim = new Arepa("Arepa Flaca", 1200);
let arepaSlimCheese = new Arepa("Arepa Flaca Queso", 3200);
let arepaSlimGratin = new Arepa("Arepa Gratinada", 4200);
let arepaFat = new Arepa("Arepa Gorda", 1000);
let arepaFatCheese = new Arepa("Arepa Gorda Queso", 2500);
let arepaSalt = new Arepa("Arepa Normal", 500);
let arepaSaltCheese = new Arepa("Arepa Normal Queso", 1800);

//Paquetes
let arepaFatPackage = new ArepaPack("Gordas", 9000);
let arepaSlimPackage = new ArepaPack("Flacas", 11000);
let arepaSaltPackage = new ArepaPack("Normal", 4500);

//Huevos
let eggsPan = new Egg("Huevos", 2200);

//Cafe
let coffeeBlack = new Drink("Cafe Negro", 800);
let coffeeMilk = new Drink("Cafe con Leche", 800);
let chocolate = new Drink("Chocolate", 800);
let glassCarry = new Drink("Vaso Llevar", 300);

arepas.push(
  arepaSlim,
  arepaSlimCheese,
  arepaSlimGratin,
  arepaFat,
  arepaFatCheese,
  arepaSalt,
  arepaSaltCheese
);
arepasPacks.push(arepaFatPackage, arepaSlimPackage, arepaSaltPackage);
eggs.push(eggsPan);
drinks.push(coffeeBlack, coffeeMilk, chocolate, glassCarry);

const startAccount = () => {
  arepas.forEach((arepa) => {
    optionArepas = `
        <li id=${arepa.name}>${arepa.name} ${arepa.price}
        <br>
        <button>-</button><span>0</span><button>+</button>
        </li>
    `;
    containerArepas.innerHTML += optionArepas;
  });

  arepasPacks.forEach((arepaPack) => {
    optionArepasPacks = `
    <li id=${arepaPack.name}>${arepaPack.name} ${arepaPack.price}
    <br>
    <button>-</button><span>0</span><button>+</button>
    </li>
    `;
    containerArepasPack.innerHTML += optionArepasPacks;
  });
  drinks.forEach((drink) => {
    optionDrinks = `
    <li id=${drink.name}>${drink.name} ${drink.price}
    <br>
    <button>-</button><span>0</span><button>+</button>
    </li>
    `;
    containerDrinks.innerHTML += optionDrinks;
  });
  eggs.forEach((egg) => {
    optionEggs = `
    <li id=${egg.name}>${egg.name} ${egg.price}
    <br>
    <button>-</button><span>0</span><button>+</button>
    </li>
    <li>Otro precio
    <br>
    <input type="number" placeholder="Ingrese la cantidad">
    </li>
    `;
    containerEggs.innerHTML += optionEggs;
  });
};

window.addEventListener("load", startAccount);
