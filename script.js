

let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let boton = document.getElementById("idBoton");
let resultado = document.getElementById("idResultado");

boton.addEventListener("click", () => {
    let num = parseInt(numero1.value);
    let num2 = parseInt(numero2.value);
    
    let suma = num + num2;
    
    resultado.innerText = "Suma: " + suma;
});
/*
boton.addEventListener("click", () => {
    
   const nombre = inputNombre.value;
   const apellido = inputApellido.value;
   const nombreCompleto = nombre + " " + apellido;
    let areaTriangulo = (base * altura) / 2;
    let numero1 = parseInt(inputBase.value);
    let numero2 = parseInt(inputAltura.value);
   
    let resultado = numero1 + numero2;
    
    
   resultado.innerText = "Mi nombre y apellido es : " + nombreCompleto;
   resultado.innerText = " Área del triángulo: " + areaTriangulo;
      resultado.innerText = " suma: " + resultado;
});
*/