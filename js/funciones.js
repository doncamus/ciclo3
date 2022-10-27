//funciones matematicas
console.group("Cuadrado");   //esto para organizar en la consola del inspeccionar de la pagina
let lado = 4;

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}


console.log(perimetroCuadrado(lado))
console.log(areaCuadrado(lado))

console.groupEnd ();


console.group("Cubo");   //esto para organizar en la consola del inspeccionar de la pagina

function volumenCubo (lado){
    return lado*lado*lado;
}

console.log(volumenCubo(lado))

console.groupEnd ();


console.group("Esfera");   //esto para organizar en la consola del inspeccionar de la pagina

let radio = 2;
function volumenEsfera (lado){
    return (4/3)*Math.PI*Math.pow(radio,3);
}

console.log(volumenEsfera(radio))

console.groupEnd ();       // aca cierra el grupo

// declar variables y constantes
console.group("Variables Y constantes");   //esto para organizar en la consola del inspeccionar de la pagina

var nombre = "Camilo Lopez";
console.log(nombre);
nombre = "Andres Lopez";    //el var en cualquier comento permite el intercambio
console.log(nombre);

const nombre1 = "Andres Cepeda";
console.log(nombre1);
//nombre1 = "Felipe perez";   //la constante no permite cambiar el valor de nuevo
console.log(nombre1);

let edad = 50;
console.log(edad);
console.log(typeof edad)

console.groupEnd ();       // aca cierra el grupo


// Metodos Numericos
console.group("Metodos Numericos");   //esto para organizar en la consola del inspeccionar de la pagina

let Numero = "10KG"
let entero = parseInt(Numero)
console.log(entero);
console.log(typeof entero)
let flotante = parseFloat(Numero)  // convertir a flotante
console.log(flotante);
console.log(typeof flotante)

console.groupEnd ();       // aca cierra el grupo


console.group("Metodos String");   //esto para organizar en la consola del inspeccionar de la pagina

let cadena = "Incremento de la Gasolina";
let posicion = cadena.indexOf("Gasolina");  // buscar la posicion de la palabra buscada
console.log (posicion);

let mayusculas = cadena.toUpperCase();  //convertir texto a mayusculas
console.log (mayusculas);
let minusculas = cadena.toLowerCase();  //convertir texto a mayusculas
console.log (minusculas);

let cortar = cadena.slice(5,9);  
console.log (cortar);

console.groupEnd ();       // aca cierra el grupo

//"Metodos Array"
console.group("Metodos Array");   //esto para organizar en la consola del inspeccionar de la pagina

let Cantantes = ["Abel","Karol G","Bon Jovi", "Carlos Vives", "Joe Arroyo", "Shakira", "Marc Antony"]
console.log(Cantantes);
console.log(Cantantes.sort());  //metodo sort Metodo de ordenamiento
delete Cantantes [0]   //elimina la posiscion 1 del array y queda vacio el elemento
console.log(Cantantes);

console.log(Cantantes.splice(2,2));  // genera un nuevo array con esos dos
console.log(Cantantes);

console.log(Cantantes.splice(2,0,"gilberto", "alex campos"));  // agregar dos nuevos elementos
console.log(Cantantes);

console.groupEnd ();       // aca cierra el grupo