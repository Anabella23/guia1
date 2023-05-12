let valorUnitario = parseFloat(prompt("¿Cuanto vale cada articulo?"));
let cantidadVendido = parseFloat(prompt("¿Cuantos articulos se vendieron en el mes?"));;
let sueldoFijo = 14000;
let porcentaje = (valorUnitario * cantidadVendido) * 16 / 100;
let sueldoMensual = sueldoFijo + porcentaje ;

console.log(`El sueldo mensual es de $ ${sueldoMensual}`);







