var numeroDocumento = prompt("Ingrese el número de documento:");
var nombre = prompt("Ingrese el nombre:");
var sueldoMensual = parseFloat(prompt("Ingrese el sueldo mensual:"));
var diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados:"));

var tieneHorasExtras = parseInt(prompt("¿Tiene horas extras?\nIngrese 1 para Sí o 2 para No:"));

if (tieneHorasExtras === 1) {
    var horasExtrasDiurnas = parseInt(prompt("Ingrese la cantidad de horas extras diurnas trabajadas:"));
    var horasExtrasNocturnas = parseInt(prompt("Ingrese la cantidad de horas extras nocturnas trabajadas:"));

    var costoHoraExtraDiurna = 6915;
    var costoHoraExtraNocturna = 9681;
    var totalHorasExtrasDiurnas = horasExtrasDiurnas * costoHoraExtraDiurna;
    var totalHorasExtrasNocturnas = horasExtrasNocturnas * costoHoraExtraNocturna;
} else {
    var horasExtrasDiurnas = 0;
    var horasExtrasNocturnas = 0;
    var totalHorasExtrasDiurnas = 0;
    var totalHorasExtrasNocturnas = 0;
}

var descuentoSalud = 52000;
var descuentoPensional = 52000;

var totalPagar = sueldoMensual + totalHorasExtrasDiurnas + totalHorasExtrasNocturnas - descuentoSalud - descuentoPensional;

document.write("<p>Número de documento: " + numeroDocumento + "</p>");
document.write("<p>Nombre: " + nombre + "</p>");
document.write("<p>Sueldo mensual: $" + sueldoMensual + "</p>");
document.write("<p>Días trabajados: " + diasTrabajados + "</p>");
document.write("<p>Horas extras diurnas: " + horasExtrasDiurnas + "</p>");
document.write("<p>Horas extras nocturnas: " + horasExtrasNocturnas + "</p>");
document.write("<p>Total a pagar: $" + totalPagar + "</p>");

