dineroCofla = prompt("cuando dinero tienes");
// dineroroberto = prompt("cuando dinero tienes");
// dineropedro = prompt("cuando dinero tienes");
dineroCofla = parseInt(dineroCofla);


if(dineroCofla >=0.6 && dineroCofla < 1) {
    alert ("comprate el helado de agua")
   
}
else if(dineroCofla >=1 && dineroCofla < 1.6) {
    alert ("comprate el helado de crema");
    alert("las bueltas son " + (dineroCofla - 1));
}
else if(dineroCofla >=1.6 && dineroCofla < 1.7) {
    alert ("comprate el helado de heldiocarrion")
}
else if(dineroCofla >=1.7 && dineroCofla < 1.8) {
    alert ("comprate el helado de putin")
}
else if(dineroCofla >=1.8 && dineroCofla < 2.9) {
    alert ("comprate el helado de cacaguate")
}
else if(dineroCofla >=1.8 && dineroCofla < 2.9) {
    alert ("comprate el helado de rex")
}
else if(dineroCofla >=2.9 ) {
    alert ("comprate el helado de feid")
}
else {
    alert("paila mi rey no tiene luca")
} 