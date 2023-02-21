function Ingreso() {

    let nombre = "";
    while (nombre === "") {
        nombre = prompt("Bienvenido a Seguros Rivadeneira, por favor ingrese su nombre");
        if (nombre === "") {
            alert("Error, nombre no válido. Por favor, intente de nuevo.");
        }
    }
    console.log("Bienvenido a Seguros Rivadeneira", nombre);
}
//entrada del usuario//

const Basico = []
const Premium = []


const RC ={
    Cobertura1:"Daños a terceros",
    Cobertura2:"Daños a cosas de terceros"
}

const Robo ={
    Cobertura3:"Incendio total",
    Cobertura4:"Robo total"
}

Basico.push(RC);
Premium.push(RC,Robo);



function Planes() {
    console.log("Tenemos para ofrecerte los siguientes planes de motos:")
    
    console.log("Plan 1- El seguro de Responsabilidad civil te cubre:")
    Basico.forEach(cobertura => {
        console.log(cobertura);
    });
    
    console.log("Plan 2- El seguro de Premium te cubre:")
    Premium.forEach(cobertura => {
        console.log(cobertura);
    });
}



function Eleccion() {
    let cobertura = prompt("Que plan elegis para cotizar: 1 o 2?")
      

            if (cobertura === "1") {
                let valorMoto = prompt("Ingresa el valor de tu moto")
                const costoBasico = valorMoto * 0.02;
                console.log("El valor de tu seguro va a ser de $" + costoBasico + " por mes")
              
            }
     
           else if (cobertura === "2") {
                let valorMoto = prompt("Ingresa el valor de tu moto")
                const costoPremium = valorMoto * 0.15;
                console.log("El valor de tu seguro va a ser de $" + costoPremium + " por mes")
            
            }
    else{
            console.log("No se ingresó un valor válido. Por favor, intenta nuevamente.")
           
    }
}
  


Ingreso()
Planes()
Eleccion()
console.log("Muchas gracias por tu visita!!");