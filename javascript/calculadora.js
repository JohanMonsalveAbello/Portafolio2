const suma =(num1,num2)=>{

    return parseInt(num1) + parseInt(num2);


};
const multiplicacion =(num1,num2)=>{

    return parseInt(num1) * parseInt(num2);


};
const resta =(num1,num2)=>{

    return parseInt(num1) - parseInt(num2);


};

const divicion =(num1,num2)=>{
    return parseInt(num1) / parseInt(num2)
};

let prueba = prompt("dijite la operacion 1 +, 2 * , 3 -, 4 /")

if(prueba == 1){

    num1= prompt("dijite el numero 1")
    num2= prompt("dijite el numero 2")

    resultado=suma(num1,num2)
    alert(`la suma da ${resultado}` )
}
else if(prueba == 2){
    num1= prompt("dijite el numero 1")
    num2= prompt("dijite el numero 2")

    resultado=multiplicacion(num1,num2)
    alert(`la multiplicacion da ${resultado}` )
}
else if(prueba == 3){
    num1= prompt("dijite el numero 1")
    num2= prompt("dijite el numero 2")

    resultado=resta(num1,num2)

}
else if(prueba == 4){
    num1= prompt("dijite el numero 1")
    num2= prompt("dijite el numero 2")

    resultado=divicion(num1,num2)


}else{
    alert("eso no existe")
}
document.write(resultado)