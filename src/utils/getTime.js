export const getTime = () => {
  const fechaActual = new Date();

  // Obtener las partes de la fecha
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Se suma 1 porque los meses comienzan desde 0
  const dia = fechaActual.getDate().toString().padStart(2, "0");
  const anio = fechaActual.getFullYear().toString();
  const hora = fechaActual.getHours().toString().padStart(2, "0");

  // Formatear la fecha en el orden deseado
  const fechaFormateada = dia + mes + anio + hora;
  const fechaCr = enCrypt(fechaFormateada);
  console.log(`Fecha Formateada${fechaFormateada}`);
  console.log(`Fecha Encri${fechaCr}`);
  console.log(`Fecha desifrada${deCrypt(fechaCr)}`);
  return fechaFormateada;
};
const enCrypt = (entrada) => {
  // Convierte la cadena en un array de caracteres
  let caracteres = entrada.split("");

  // Mezcla los caracteres (cambio de posición aleatorio)
  for (let i = caracteres.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [caracteres[i], caracteres[j]] = [caracteres[j], caracteres[i]];
  }

  // Une los caracteres mezclados en una cadena y la devuelve
  return caracteres.join("");
};
const deCrypt = (entrada) => {
  // Convierte la cadena en un array de caracteres
  let caracteres = entrada.split("");

  // Revierte el proceso de mezcla (restablece el orden original)
  for (let i = 0; i < Math.floor(caracteres.length / 2); i++) {
    const j = caracteres.length - 1 - i;
    [caracteres[i], caracteres[j]] = [caracteres[j], caracteres[i]];
  }

  // Une los caracteres revertidos en una cadena y la devuelve
  return caracteres.join("");
};
