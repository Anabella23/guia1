let a = parseInt(prompt("Ingrese un valor para A"));
let b = parseInt(prompt("Ingrese un valor para B"));
let aux ;

console.log("El valor de A es : " + a);
console.log("El valor de B es : " + b);

aux = a;
a = b;
b = aux;


console.log("Valores intercambiados");
console.log(`El valor de A es :  ${a}`);
console.log(`El valor de B es :  ${b}`);



