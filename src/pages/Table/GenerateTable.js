import { addClientName } from "../../utils/utils";

export function generateTable(orders) {
  const productos = {}; // Objeto para acumular cantidades y totales por producto
  let totalGeneral = 0; // Variable para acumular el total general

  // Procesar los orders y acumular información en el objeto 'productos'
  orders.forEach((item) => {
    if (!productos[item.nombre]) {
      productos[item.nombre] = { cantidad: 0, precio: item.precio };
    }
    productos[item.nombre].cantidad++;
    totalGeneral += item.precio;
  });

  // Crear el encabezado de la tabla
  let optClient = addClientName() == "" ? "Cliente General" : addClientName();
  let html = `
  <div class="client-name">Cliente: <span class="client-name--span">${optClient}</span></div>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>P/Unidad</th>
          <th>P/Total</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Agregar filas para cada producto acumulado
  for (const nombreProducto in productos) {
    const producto = productos[nombreProducto];
    const subtotal = producto.cantidad * producto.precio;
    html += `
      <tr>
        <td>${nombreProducto} X${producto.cantidad}</td>
        <td>${producto.precio}</td>
        <td>${subtotal}</td>
      </tr>
    `;
  }

  // Agregar fila para el total general
  html += `
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>${totalGeneral}</td>
        </tr>
      </tfoot>
    </table>
  `;

  return html;
}

