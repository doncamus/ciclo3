
//volumen del triangulo

console.group("areanTriangulo")

const base = 4;
const altura=5;

function calcularAreaTriangulo (base,altura){
    return (base*altura)/2;
}

console.log(calcularAreaTriangulo(base,altura))

function calcularAreaT(){
    const entrada_base=document.getElementById("InputBase");   //formulario input de tipo text Document sirve para capturar un valor que se digita por teclaro
    const entrada_altura=document.getElementById("InputAlura");   //formulario input de tipo text Document sirve para capturar un valor que se digita por teclaro
    const base = entrada_base.value;
    const altura = entrada_altura.value;
    const areat = calcularAreaTriangulo(base,altura);
    alert (areat);
}

console.groupEnd

//volumen del cono
console.group("Volumen  del cono")

const radio = 4;
const alturaC=5;

function calcularVolumenCono (radio,alturaC){
    return (Math.PI*Math.pow(radio,2)*alturaC)/3;
}

console.log(calcularVolumenCono(radio,alturaC))

function calcularVolumenC(){
    const entrada_radio=document.getElementById("InputRadio");   //formulario input de tipo text Document sirve para capturar un valor que se digita por teclaro
    const entrada_alturaC=document.getElementById("InputAluraC");   //formulario input de tipo text Document sirve para capturar un valor que se digita por teclaro
    const radio = entrada_radio.value;
    const alturaC = entrada_alturaC.value;
    const volumenC = calcularVolumenCono(radio,alturaC);
    alert (volumenC);
}

console.groupEnd

// colecciones

console.group("Colecciones")

    function coleccionar(){

        const coleccion = document.forms["formulario1"];  //document form saca los valores de nombre y apellido y los mete en un array y los reconoce por concepto del impuit
        let texto="";

        for (let contador=0;contador<=coleccion.length;contador++){   //el for concatena los datos y al final se muestrar en pantalla
            texto+=coleccion.elements[contador].values();
    }

    document.getElementById("demo").innerHTML=texto; // 

}

console.groupEnd