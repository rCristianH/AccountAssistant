import { header } from '/src/templates/header/Header';
header();

const image = document.querySelector('.nav--header--img');

const boolFunction = async (url) => {
  try {
    const response = await fetch(url, {
      cache: 'force-cache'
    });

    if (response.ok) {
      // Obtenemos la URL del objeto Blob de la imagen
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);

      // Asignamos la URL al atributo src del elemento img
      const imgElement = document.querySelector('.nav--header--img');
      imgElement.src = objectURL;

      return true; // Indicamos que la operación fue exitosa
    } else {
      console.error('Error al obtener la imagen:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error durante la solicitud:', error);
    return false;
  }
};
image.src = boolFunction('https://i.imgur.com/Sew8Tlq.png');
