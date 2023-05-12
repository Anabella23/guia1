let ancho = parseFloat(prompt("Ingresa el ancho del terreno"));
let largo = parseFloat(prompt("Ingresa el largo del terreno"));
let valor = parseFloat(prompt("ingresa el valor del m2"));

let metrosCuadrados = ancho * largo;
let valorFinal = metrosCuadrados * valor;
let alambre = (ancho+largo*2) * 3 ;

console.log(`El terreno vale : $ ${valorFinal}`);
console.log(`Para sacarlo en tres pasadas se necesitan ${alambre} m de alambre`); 





