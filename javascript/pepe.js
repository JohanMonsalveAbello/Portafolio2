class Celular {
    constructor(color, peso, resoluciondepantalla, camara, memoraiaram, prender, reiniciar, tomarfotos, grabar) {
        this.color = color;
        this.peso = peso;
        this.resoluciondepantalla = resoluciondepantalla;
        this.camara = camara;
        this.memoraiaram = memoraiaram;
        this.prender = prender;
        this.reiniciar = reiniciar;
        this.tomarfotos = tomarfotos;
        this.grabar = grabar;

        this.sms = `el celular es de color ${this.color} el celular pesa ${this.peso} la resolucion de la pantalla se mueve en una frecuencia de ${this.resoluciondepantalla} tiene una cámara de ${this.camara} megapíxeles tiene una memoria RAM de ${this.memoraiaram} y el celular prende ${this.prender} y tiene las funciones de reiniciar ${this.reiniciar}, tomar fotos ${this.tomarfotos} y grabar ${this.grabar}`;

        document.write(this.sms + "<br>");
    }
}

const samsung = new Celular("rojo", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si");
const huawei = new Celular("negro", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si");
const lg = new Celular("verde", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si");
const motorola = new Celular("azul", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si");

// Accede a la propiedad sin paréntesis
document.write(samsung.sms + "<br>");
document.write(huawei.sms + "<br>");
document.write(lg.sms + "<br>");
document.write(motorola.sms + "<br>");

class AltaGama extends Celular {
    constructor(color, peso, resoluciondepantalla, camara, memoraiaram, prender, reiniciar, tomarfotos, grabar, grabarlento, reconocimientofacial, camaraextra) {
        super(color, peso, resoluciondepantalla, camara, memoraiaram, prender, reiniciar, tomarfotos, grabar);
        this.grabarlento = grabarlento;
        this.reconocimientofacial = reconocimientofacial;
        this.camaraextra = camaraextra;

        this.smc = `el celular de alta gama es de color ${this.color} el celular pesa ${this.peso} la resolución de la pantalla se mueve en una frecuencia de ${this.resoluciondepantalla} tiene una cámara de ${this.camara} megapíxeles tiene una memoria RAM de ${this.memoraiaram} y el celular prende ${this.prender} y tiene las funciones de reiniciar ${this.reiniciar}, tomar fotos ${this.tomarfotos} y grabar ${this.grabar}, y posee funciones extras como ${this.grabarlento}, ${this.camaraextra} y ${this.reconocimientofacial}`;

        document.write(this.smc + "<br>");
    }
}

const iphone = new AltaGama("rojo", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si", "super cámara lenta", "reconocimiento facial", "cámara extra");
const realme = new AltaGama("negro", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si", "super cámara lenta", "reconocimiento facial", "cámara extra");
const asus = new AltaGama("verde", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si", "super cámara lenta", "reconocimiento facial", "cámara extra");
const pepe = new AltaGama("azul", 12, "60 hz", "24mp", "4gb", "si", "si", "si", "si", "super cámara lenta", "reconocimiento facial", "cámara extra");

// Accede a la propiedad sin paréntesis
document.write(iphone.smc + "<br>");
document.write(realme.smc + "<br>");
document.write(asus.smc + "<br>");
document.write(pepe.smc + "<br>");
