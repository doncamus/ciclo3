//condicionales


//if anidado
let nota =5;
    if (nota == 5)
    {
        console.log("Excelente");
    }
    else if (nota >=4 && nota<=4.9){
        console.log("Bien");
    }
    else if (nota >=3 && nota<=3.9){
        console.log("Aceptable");
    }
    else{
        console.log("Insuficiente");
    }

//switch

let opcion=2;
switch (opcion) {
    case 1: console.log("Mafdonals");
    break;
    case 2: console.log("Criolla");
    break;
    case 3: console.log("La bichota");
    break;
    default: console.log("Espere el siguiente Burger Master");
}

// estructuras de datos

let palabra ="Activo";
console.log(palabra);
console.log(palabra[3])

//array

let consesionario = ["maserati", "jeep", "ferrari", "alfarome", "dicati", "tesla"];
console.log (consesionario)
console.log (consesionario[3]);
console.log (consesionario[-2]);   //no se puede sacar ducati solo funciona en python
console.log (consesionario.length);


//ciclos

//while 

let contador=0;

while (contador < consesionario.length){
    console.log(consesionario[contador]);
    contador++;
}

//do while
let contador2=0;

do{
    console.log(consesionario[contador2]);
    contador2++;
} while (contador2 < consesionario.length);

//for

let nombres = ["casa", "perrito", "gato", "perro", "carlos", "jose"]

for (let contador3=0; contador3<nombres.length; contador3++){
    console.log(nombres[contador3]);
}

let nombres2 = nombres;
nombres2.push("natalia"); // agregar nuevo elmento al array
console.log(nombres2);

nombres2.pop();
console.log(nombres2); // quitar ultimo elemento

nombres2.shift();
console.log(nombres2); // quitar primer elemento

nombres2.splice(1,2);  //posicion inicial 1 y elimina el segundo la cantidad de elementos despues de la incial
console.log(nombres2);

nombres2.indexOf("carlos");  //buscar la posisicion de un elemento
console.log(nombres2); 

console.log(nombres2.indexOf("gato"));   // saca -1 cuado no se encuetra lo buscado


//for-each

for (let nombre of nombres){   // para recorrer el array
    console.log(nombre);
}

let arreglo = ["hola",154,true,[1,2,3],3.1416]

for (let arre of arreglo){   // para recorrer el array
    console.log(arre);
}


//recorrer el objeto
let persona = {
    "propiedad":"valor",
    "nombre" : "Camilo",
    "apellido" : "lopez" 
}                // objeto persona  en python es un diccionario

console.log(persona);

for (let clave in persona){   // para recorrer el array   en lugar de off va in
    let valor = persona [clave];   //
    console.log("clave " + clave + " : " + valor);
}