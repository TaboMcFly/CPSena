let cedula = document.getElementById("Cedula");  //document.GetElementById Para capturar objetos
let nombre = document.getElementById("Nombre");
let btnValida = document.getElementById("btn-valida");
let mensaje = document.getElementById("mnsj");
let prueba = document.getElementById("prueba");
let borrar = document.getElementById("borrar");

borrar.addEventListener("click",borre);
btnValida.addEventListener("click",validar); //addEventListener para usar los eventos (al dar click, enfocar mouse, etc...)

function borre(){
    prueba.classList.remove("fondo");
}

function validar(){
    if(cedula.value == ""){
        console.log("esta en blanco");
        cedula.style.borderColor="red"; //"Style" para agregar estilos desde JS
        mensaje.classList.add("fondo");
        prueba.classList.add("fondo");
        mensaje.innerHTML = "Cedula Vacia";
        mensaje.style.borderRadius="5px";
    }
}