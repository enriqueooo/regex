const palabras = ["uno", "dos", "tres", "cuatro", "osa", "cinco", "azul", "oso", "elefante","aro","ola"];

const palabrasFiltradas = palabras.filter(palabra => /^[aeiou]/i.test(palabra) && palabra.length === 3);

alert(palabrasFiltradas);