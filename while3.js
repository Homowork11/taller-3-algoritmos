let usuario = 3; // Variable para solicitar usuario
let limitedelibros= 1; // variable Limite de libros 
let prestamodelibros= 0; // Variable prestamo de libros

do {
    usuario = prompt("resgistre los datos del usuario. (estudiante,docente,visistante:"); // comprobar el tipo de usuario
    switch (usuario) { // es el limite de libros de cada usuario
        case "estudiante":
            limitedelibros = 4; // limite del estudiante
        case "docente":
            limitedelibros = 5; // limite del docente 
            break;
        case "visitantes":
            limitedelibros = 0; // limite del visitante 
            break;
        default:
            alert("este usuario no se encuentra") // alerta que no reconoce el usuario
    }
    prestamodelibros = parseInt(prompt("cuantos libros desea que le presten:"), 3); // numero principal
    if (prestamodelibros > limitedelibros) { // compara si permite el usuario
        alert("paso el limite") // advertencia si se pasa el limite
    } else {
        alert("acceso al prestamo") // es el prestamo aprobado
    }
    alert("finalizo el prestamo, actualiza otros datos") // finaliza el prestamo
} while (true); // repite todo el sistema
{ 

} 