import { imprimirJSON } from '../pages/Factura/factura';
import {
  addClientName,
  addIpUrl,
  btnViewBill,
  ip_url,
  resetFactura,
  sumOtherPrice,
  sumPrice,
} from './utils';

//evento para escuchar el click de los botones de agregar un producto
export const listenerBtn = () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('product-card--button--1')) {
      const objective = event.target;
      const nameProduct = objective.dataset.name;
      const priceProduct = Number(objective.dataset.price);

      //function
      sumPrice(nameProduct, priceProduct);
    } else if (event.target.classList.contains('product-card--button--2')) {
      const objective = event.target;
      const nameProduct = objective.dataset.name;
      const priceProduct = Number(objective.dataset.price);
      //function
      sumPrice(nameProduct, priceProduct);
      sumPrice(nameProduct, priceProduct);
    } else if (event.target.classList.contains('product-card--button--5')) {
      const objective = event.target;
      const nameProduct = objective.dataset.name;
      const priceProduct = Number(objective.dataset.price);
      //function
      sumPrice(nameProduct, priceProduct);
      sumPrice(nameProduct, priceProduct);
      sumPrice(nameProduct, priceProduct);
      sumPrice(nameProduct, priceProduct);
      sumPrice(nameProduct, priceProduct);
    }

    if (
      event.target.classList.contains('product-card--button-textname-input')
    ) {
      addClientName();
      document.querySelector('.name-input').value = '';
    }
    if (
      event.target.classList.contains('product-card--button-textnumber-input')
    ) {
      sumOtherPrice();
    }
    if (event.target.className == 'nav--header--img') {
      resetFactura();
    }
    if (event.target.className == 'result--button') {
      btnViewBill();
    }
    if (event.target.className == 'background-footer-aside') {
      btnViewBill();
    }
    if (event.target.classList.contains('generarReciboPost')) {
      imprimirJSON();
    }
    if (event.target.classList.contains('change-style-button')) {
      const nameLS = 'ThemeMode';
      const getLS = localStorage.getItem(nameLS);
      const callbody = document.body.classList;

      if (getLS == 'null' || getLS == null) {
        callbody.add('dark');
        localStorage.setItem(nameLS, 'dark');
      } else if (getLS == 'dark') {
        callbody.remove('dark');
        localStorage.setItem(nameLS, null);
      }
    }
    if (event.target.classList.contains('product-card--button-textip-input')) {
      addIpUrl();
    }
  });
};
