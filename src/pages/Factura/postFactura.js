import { generateErrorModal } from '../../utils/utils';

export const sendBack = async (factura) => {
  let url;
  const ipurl = localStorage.getItem('IpURL');

  if (!ipurl || ipurl === 'null') {
    const error = new Error('No se encontró la IP en el localStorage');
    generateErrorModal('404 Error', error, 'Ingrese la IP del backend');
    return;
  }
  url = ipurl;
  try {
    const response = await fetch(`https://${url}/guardar-json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(factura),
    });

    const data = await response.status;
    return data;
  } catch (error) {
    generateErrorModal(
      '404 Error',
      error,
      'La URL ingresada es incorrecta  0.0.0.0:0',
    );
  }
};
