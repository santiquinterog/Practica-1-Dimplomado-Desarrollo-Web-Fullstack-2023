/* Conceptos Básicos */

/* Variables */
const variableConstate = "constante"
var variableVar = "var"
let camaleon;

//Variable tipo entero
camaleon = 5;
console.log(typeof camaleon, camaleon);

//Variable tipo entero(flotante)
camaleon = 3.5;
console.log(typeof camaleon, camaleon);

//Variable tipo cadena o string
camaleon = "Nombre";
console.log(typeof camaleon, camaleon);

//Variable tipo boolean
camaleon = true;
console.log(typeof camaleon, camaleon);

//Variable tipo objeto
camaleon = {
  nombre: "Santiago",
  edad: 24,
  tieneTrabajo: true,
  hobbies: ["Ver películas", "Videojuegos"],
};
console.log(typeof camaleon, camaleon.nombre, camaleon.edad, camaleon.hobbies);

//Variable tipo array
camaleon = ["Santiago", "Alejandro", "Alessandra"];
console.log(typeof camaleon, camaleon);

//Variable null
let nulo = null;
console.log(typeof nulo, nulo);

//Variable tipo undefined
let indefinido = undefined;
console.log(typeof indefinido, indefinido);

/* Estructurasde control */

/* Condicionales */

//if - else y if anidados
let number1 = 0;
let string1 = "";
let boolean1 = false;

let number2 = 1;
let string2 = "Santiago";
let string3 = "1";
let objeto1 = {};
let boolean2 = true;
let objeto2 = {
  nombre: "Santiago",
  edad: 24,
  tieneTrabajo: true,
  hobbies: ["Ver películas", "Videojuegos"],
};

let objeto3 = {}
console.log("-----------valor objeto 1", objeto3);
objeto3.nombre = "Santiago"
objeto3.edad = 24
console.log("-----------valor objeto 2", objeto3);

let array1 = [];
let array2 = ["Santiago", "Alejandro", "Alessandra"];

let edad = 30;

if ((edad > 14 && edad <= 17) || number2 === 1) {
  console.log("Es adolescente");
} else if (edad >= 18 && edad < 30) {
  console.log("Es joven");
} else if (edad >= 30 && edad < 60) {
  console.log("Es adulto");
} else {
  console.log("Es un niño o adulto mayor");
}

if (number2 === 2 || number1 === 0) {
  console.log("Al menos una condición se cumplió");
}

if (!boolean1) {
  console.log("Este es un ejemplo del operador lógico negación");
}

//Operador ternario
let operadorTernario = string1 ? "Se " : "No se "

console.log(operadorTernario + "cumplió la condición del operador ternario")

// switch

switch (array2[0]) {
  
  case "Santiago":
    console.log("Es Santiago");
    break;
    
    case "Alejandro":
      console.log("Es Alejandro");
      break;
      
      case "Alessandra":
    console.log("Es Alessandra");
    break;

  default:
    console.log("No es nadie");
    break;
    
}

/* Ciclos */


// while
let suma = 0

while (suma < 0) {
  suma = suma + 1;
  console.log("While",suma);
}

// do while
let suma2 = 0

do {
  suma2 = suma2 + 1;
  console.log("Do While", suma2);
} while (suma2 < 0);

// for

//Leyendo Array
console.log("El tamaño del array2 es " + array2.length);

for (let index = 0; index < array2.length; index++) {
  console.log(array2[index]);
}

// Asignadole valores a un array
let arrayVacio = []

for (let index = 0; index < 100; index++) {
  arrayVacio[index] = index;
  /* arrayVacio.push(index) */
}
console.log(arrayVacio);

/* Funcionaes */
var variable1 = 5;
let variable2 = 15;

function Sumar(digito1 = 0, digito2 = 0) {
  let resultado1 = digito1 + digito2;
  return resultado1
}

function Imprimir(valor) {
  console.log("El resultado es ", valor);
}

function ImprimirSaludo() {
  console.log("Hola, ¿cómo estás?");
}

/* Localstorage */

// Guadar o editar una clave/valor
localStorage.setItem("numeros", arrayVacio)
localStorage.setItem("personas", array2)
console.log("Tamaño incial del localstorage", localStorage.length);

// Obtener valor de acuerdo a una clave
console.log(localStorage.getItem("personas"));

// Eliminar una clave/valor
localStorage.removeItem("numeros")

// Eliminar todo
localStorage.clear()

// Tamaño del localStorage
console.log("Tamaño final del localstorage", localStorage.length);
localStorage.setItem("Se guardó", "Elemento guardado")

let json = {
  "nombre": "Santiago",
  "edad" : 24,
  "hobbies": ["Dormir", "Comer"]
}

localStorage.setItem("json", JSON.stringify(json))
console.log(JSON.parse(localStorage.getItem("json")));

/* Diferencia entre var y let */
if(true){
  var pais = "Colombia"
  console.log("Var dentro de bloque", pais);
}

console.log("Var fuera de bloque", pais);

if(true){
  let ciudad = "Medellín"
  console.log("Let dentro de bloque", ciudad);
}

console.log("Let fuera de bloque", ciudad);