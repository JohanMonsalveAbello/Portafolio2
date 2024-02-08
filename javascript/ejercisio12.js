let alumnos = [];  // Declarar un arreglo para almacenar los nombres de los alumnos

// Pedir al usuario que ingrese los nombres de los alumnos
for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese el nombre del alumno " + (i + 1));
    alumnos.push(nombre);  // Agregar el nombre al arreglo
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += parseInt(notas[i]);
    }
    return suma / notas.length;
}

function nota() {
    let notas = [];

    // Pedir al usuario que ingrese las notas
    for (let i = 0; i < 6; i++) {
        let nota = parseInt(prompt("Ingrese la nota " + (i + 1) + " para el alumno " + alumnos[0]));
        notas.push(nota);
    }

    let notaf = calcularPromedio(notas);
    let ntf = "La nota final es: " + notaf.toFixed(2);
    document.write(ntf);
}

// Llamar a la función para el primer alumno
nota();
