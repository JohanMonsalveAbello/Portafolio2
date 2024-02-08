let free = false;
const validarCliente = (time) =>{
    let edad = prompt("cual es tu edad ")
    if (edad > 18){
        if(time >=2 && time <7 && free == false){
            alert("pasa master sos la primera persona a las dos pasa gratis crack")
            free = true;
        }else{
            alert (`pasa rey son las ${time} hs pero pagame el cover`)

        }
    }else{
        alert("mira maquina no tenes los 18 asi q paila no lo puedo dejar pasar")

    }

}

validarCliente(23); 
validarCliente(0.6);
validarCliente(1);  
validarCliente(2);
validarCliente(3); 