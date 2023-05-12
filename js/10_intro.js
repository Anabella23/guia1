let primerAportante = prompt("Ingresa el nombre del primer aportante");
let primerMonto = parseFloat(prompt("Ingresa el monto del primer aportante"));
let segundoAportante = prompt("Ingresa el nombre del segundo aportante");
let segundoMonto = parseFloat(prompt("Ingresa el monto del segundo aportante"));
let tercerAportante =prompt("Ingresa el nombre del tercer aportante");
let tercerMonto = parseFloat(prompt("Ingresa el monto del tercer aportante"));

let capitalTotal = primerMonto + segundoMonto + tercerMonto

let primerPorcentaje = primerMonto * 100 / capitalTotal ;
let segundoPorcentaje = segundoMonto * 100 / capitalTotal;
let tercerPorcentaje = tercerMonto * 100 / capitalTotal;

console.log("El capital total es de $ " + capitalTotal);

console.log(`${primerAportante} aportó el ${primerPorcentaje} % del capital total`);

console.log(`${segundoAportante} aportó el ${segundoPorcentaje}  % del capital total`);

console.log(`${tercerAportante} aportó el  ${tercerPorcentaje} % del capital total`);
