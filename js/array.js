// const num = 4;
// num = 4;
// TODO ES TO SON ARRAYS
let edad = [18, 14, 15, 92, 78];
let nombre = ["Juliana", "Marbel", "Zuluaga", "Velez", "Santos"];
let correo = [
    "juliana@misena.edu.co",
    "marbel@misena.edu.co",
    "zuluaga@misena.edu.co",
    "velez@misena.edu.co",
    "santos@misena.edu.co"
];
let telefono = [
    "5974923",
    "2812735",
    "2634457",
    "4261807",
    "1872529",
];
let direccion = [
    "cra 58a #65-16",
    "cra 58b #61-15",
    "cra 88 #43-12",
    "cra 33a #23-12",
    "cra 62 #31-10",
];

console.log(edad);
console.log(nombre); 
console.log(correo);
console.log(telefono);
console.log(direccion);

console.log(edad[0],nombre[0],correo[0],telefono[0],direccion[0]);
console.log(edad[1],nombre[1],correo[1],telefono[1],direccion[1]);
console.log(edad[2],nombre[2],correo[2],telefono[2],direccion[2]);
console.log(edad[3],nombre[3],correo[3],telefono[3],direccion[3]);
console.log(edad[4],nombre[4],correo[4],telefono[4],direccion[4]);

/* for (let i = 0; i < nombre.length; i++){
    console.log(edad[i] + " " 
    + nombre[i] + " " 
    + correo[i] + " " 
    + telefono[i] + " " 
    + direccion[i] + " "); 
    console.log(`${edad[i]} 
    ${nombre[i]} 
    ${correo[i]} 
    ${telefono[i]} 
    ${direccion[i]}`) //otra nueva forma de trabajar arrays
} */ 

nombre.forEach(element => {
    console.log(`el nombre es ${element}`);
});  //para mostrar lo que está dentro del ()

let persona = {"nombre":"Juan","apellido":"Taborda","gustos":["futbol","basquet","natacion"]}
/* objeto puede tener propiedad y valor.... el valor que tiene una propiedad puede ser un vector u otro objeto */
console.log(persona);

let cursos = [{
    "nombre":"ADSI",
    "id":"1",
    "fecha":"20220202",
    "duracion":10
},{
    "nombre":"ADSO",
    "id":"2",
    "fecha":"20230202",
    "duracion":110,
    "valor":"gratis"
},{
    "nombre":"RECURSOS HUMANOS",
    "id":"3",
    "fecha":"20230103",
    "duracion":5
},{
    "nombre":"CARPINTERIA",
    "id":"4",
    "fecha":"20211230",
    "duracion":10
}];

console.log(cursos);