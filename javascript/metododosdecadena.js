//startsWith // mira si las cadenas empiezan igual muestra true sino muestra falso 
// endsWith termina 

let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);

document.write(resultado);

//includes  busca q la info este en otra cadena 


let cadena22 = "pepe";
let cadena21 = "pepe";

resultado = cadena22.includes(cadena21);

document.write(resultado);


///indexOf Busca la posicion donde empieza la frase q busca
// let cadena32 = "pepe tiene novia y la tiene en el corral";
// let cadena1 = "";

resultado = cadena22.indexOf("corral");

document.write(resultado);


//para mostrar la letra de la posicion seria algo como
let cadena32 = "pepe tiene novia y la tiene en el corral";
let cadena1 = "";

resultado = cadena22.indexOf("corral[8]");

document.write(resultado);


// lastIndexOf lo mismo que el anteriro pero empieza  desde la ultima frase




//padStart rellena la cadena con los datos que solicitemos al principio
let cad1 = "pepe tiene novia y la tiene en el corral";
let cad2 = "";

resultado = cad1.padStart(50, "el dj puso bachata");

document.write(resultado);


//padEnd lo mismo pero al final


//repeat repite la cadena 


resultado = cad1.padStart();