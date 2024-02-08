

class animal{
    constructor(especie,edad,color){

       this.especie = especie;
       this.edad = edad;
       this.color = color;
       this.info =`soy ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`

    }
    verInfo(){
       document.write(this.info + "<br>")
    }
}


class Perro extends animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }

    // Método estático para ladrar
    static ladrar() {
        alert("¡Woof!");
    }

    // Getter y setter para la propiedad 'raza'
    // modifica 
    setRaza(newRaza) {
        this.raza = newRaza;
    }

     // consulta
    getRaza() {
        return this.raza;
    }
}




class gato extends animal{
    constructor(especie,edad,color,tamaño){
        super(especie,edad,color);
        this.tamaño = tamaño
    }
}

class ardilla extends animal{
    constructor(especie,edad,color,comida){
        super(especie,edad,color);
        this.comida = comida
    }
}
// Crear una instancia de Perro
let perro = new Perro("Canino", 3, "Marrón", "Labrador");

// Usar el setter para cambiar la raza
perro.setRaza("Pastor Alemán");

// Obtener la raza usando el getter
document.write(perro.getRaza()); // Imprimirá "Pastor Alemán"


// perro.verInfo();

// class Humano{
//    constructor(nombre,altura,sexo)
   
//    {
//       this.nombre = nombre;
//       this.altura = altura;
//       this.sexo = sexo
//    this.ms =`mi nombre es ${nombre}, y mido ${altura} y soy un ${sexo} `  
//    }
   
//     mensajito(){
//        document.write(this.ms)
//     } 
// }

// const Pepe = new Humano("El pepe",1.60,"macho alfa")


// Pepe.mensajito();

// class carro{
//  constructor (modelo,color,motor){

//    this.modelo = modelo;
//    this.color = color;
//    this.motor = motor;

//    this.des = `es te es un modelo ${this.modelo}, de color ${this.color}, que posee un motor vercion ${motor}`
//    document.write(this.des + "<br>") 
// }
// };


// const chevere = new carro("chevere","negro","v8")



// chevere.des() ;




// class musica{
//     constructor(genero,cantate,fechap){

//         this.genero = genero;
//         this.cantate = cantate;
//         this.fechap = fechap;

//         this.msui = `la cancion pertenese al gengero ${this.genero} y es del cantaautor ${this.cantate}  y se estreno en el año ${this.fechap}`
//         document.write(this.msui);
//     }
// }


// const bachata = new musica ("bachata","juan luis guerra",2023 );


// bachata.msui()