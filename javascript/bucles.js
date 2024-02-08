let numero = 0;

// while (numero < 6){
//     numero ++;
//     document.write(numero)
// }

// do{
    
//     document.write(numero);
//     numero ++;
// }
// while (numero < 6)

// break finaliza la sentencia

// while (numero < 100){
//     numero ++;
//     document.write(numero);
//     if (numero == 20){
//         break;
//     };

//  }


// for (let i = 6; i >=0; i--){
//     document.write(i + "<br>")
// }

//continue se salta el dato
// for (let i = 0; i <=20; i++){
//     if(i== 16){
//         continue;
//     }
//     document.write(i + "<br>")
// }


// for in for of

// in muestra la posicion of muestra lo que esta dentro de la posicion

// let animales  = ["garo","perro","trex"];

// for(animal in animales){
//     document.write(animal  + "<br>")
// }


// document.write("<br>")

// for(animal of animales){
//     document.write(animal  + "<br>")
// }

array1 = ["marria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];


forPepe:
for(let array in array2){
    if(array == 2){
        for (let array of array1){
            break forPepe;
            document.write(array + "<br>");
            
        }
    } else{
        document.write(array2[array]+"<br>")
    } 
}


let motos = ["pulsar","discover","AKT","asd"];

for(moto in motos){
    document.write(moto+"<br>")
}


Elpepe:
for( moto of motos){
    document.write(moto+"<br>")
   if(moto == "AKT"){
      ;
}

}

let comidas =["pizza","manzana","pera"]

for(comida in comidas){

    document.write(comida+"<br>")
}
for(comida of comidas){

     document.write(comida+"<br>")
}



let muebles =["mesa","cama","armario"];


for(mueble in muebles){
    document.write(mueble+"<br>")
    for(mueble of muebles){
        document.write(mueble+  "<br>")
    }
}


