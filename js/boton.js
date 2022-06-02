btnN1 = document.getElementById("btn-n1");
btnN2 = document.getElementById("btn-n2");
btnN3 = document.getElementById("btn-n3");
btnN4 = document.getElementById("btn-n4");
btnN5 = document.getElementById("btn-n5");
btnN6 = document.getElementById("btn-n6");
btnN7 = document.getElementById("btn-n7");
nombre = document.getElementById("nombre");

btnN1.addEventListener("click", function(){
    alert("Maria");
})
btnN2.addEventListener("click", imprimir);
function imprimir(){
    alert("Pedro");
}
btnN3.addEventListener("click",mostrarTexto);
function mostrarTexto(){
    alert(nombre.value);
}
btnN4.addEventListener("click", function(){
    alert("Margarita");
})
btnN5.addEventListener("click", function(){
    alert("Francia");
})
btnN6.addEventListener("click", function(){
    alert("Ximena");
})
nombre.addEventListener("keydown",mostrarTexto);
function mostrarTexto(){
    alert(nombre.value);
}
nombre.addEventListener("mousemove",mostrarTexto);
function mostrarTexto(){
    alert(nombre.value);
}
