
/*function Ingreso() {

    let nombre = "";
    while (nombre === "") {
        nombre = prompt("Bienvenido a Seguros Rivadeneira, por favor ingrese su nombre");
        if (nombre === "") {
            alert("Error, nombre no válido. Por favor, intente de nuevo.");
        }
    }
    console.log("Bienvenido a Seguros Rivadeneira", nombre);
}
entrada del usuario

const RC = ["Daños a terceros", "Daños a cosas de terceros"]
const Robo = ["Daños a terceros", "Daños a cosas de terceros", "Incendio total", "Robo total"]



function Planes() {
    console.log("tenemos para ofrecerte los siguientes planes de motos:")
    console.log("Plan 1- El seguro de Responsabilidad civil te cubre:")
    for (const cobertura of RC) {
        console.log(cobertura)
    }
    console.log("Plan 2- El seguro de Robo te cubre:")
    for (const cobertura of Robo) {
        console.log(cobertura)
    }
}


function Eleccion() {
    let cobertura = prompt("Que plan elegis para cotizar: 1 o 2?")
      

            if (cobertura === "1") {
                let valorMoto = prompt("Ingresa el valor de tu moto")
                const costoSoloRC = valorMoto * 0.02;
                console.log("El valor de tu seguro va a ser de $" + costoSoloRC + " por mes")
              
            }
     
           else if (cobertura === "2") {
                let valorMoto = prompt("Ingresa el valor de tu moto")
                const costoRoboRC = valorMoto * 0.15;
                console.log("El valor de tu seguro va a ser de $" + costoRoboRC + " por mes")
            
            }
    else{
            console.log("No se ingresó un valor válido. Por favor, intenta nuevamente.")
           
    }
}
  


Ingreso()
Planes()
Eleccion()
console.log("Muchas gracias por tu visita!!");*/