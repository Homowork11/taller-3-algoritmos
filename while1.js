let x = 1; //es una declaracion que crea una variable 
let total = 0; //para acumular valores
let pares = 0; // declara una variable para pares
let impares = 1;// declara una variable para impares

do { //se utiliza para crear bucles
total += x; //significa añadir un valor x a la variable
if (x % 2 === 0) { //se utiliza para comprobar si el numero x es par
total -= 1; //sirve para restar el numero de la variable
pares++;// incrememnta el valor de pares
} 
else{
    impares++;//incrementa el valor de impares
}
if (total > 15){ //verifica si el total es mayor que 15
console.log("superaste el limite"); //imprime en la consola como un mensaje de registro
} 
break;//destino del ciclo
x++;//aumenta xen 1
} 
while (x <= 6); //evalua la condicion antes de ejecutar el codigo 