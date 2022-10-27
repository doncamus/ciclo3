//Sintaxis JavaScript

//Tipos de Datos

//todo esto se puede ver en la pagina
console.log(2+3);
console.log("Welcome to the Jungle");
//primitivos
var numero1=6;                 //varialbles con var pero se usa let
console.log(numero1);
let numero2=2;                  //tipo de dato nuevo necesario  optimiza mejor el manejo de memoria es mas rapido
console.log(numero2);
console.log(typeof numero2);

let palabra="CamiloGG";
console.log(palabra);
console.log(typeof palabra);

var nombre;
console.log(typeof nombre);    //resultado tipo de dato indefinido

let persona={};   // llaves es de tiopo objeto y los corchetes son arrays
console.log(persona);
console.log(typeof persona);

//operadores

let num1 = 25;
let num2 = 15;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);   //modulo
console.log(num1^num2);     //exponente

//operadores comparacion
let compara =3=="3";   // da true porque son iguales
console.log(compara);    

let compara2 =3==="3";   // con el triple igual compara el valor de la variable y el tipo de la variable
console.log(compara2);   // 3 es numero y el otro es string


//operadores logicos

//A
let a  =5<6;   //verdadero
let b  =5>6;    //falso 

console.log(a && b);    //falso
console.log(a || b);    //verdadero or

let result = a && b;
console.log(result);
console.log(typeof result);


//operaciones de incremento y decremento