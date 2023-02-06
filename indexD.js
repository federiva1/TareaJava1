function Ingreso() {
    let nombre = "";
    while (nombre === "") {
        nombre = prompt("Bienvenido a Seguros Rivadeneira, por favor ingrese su nombre");
        if (nombre === "") {
            alert("Error, nombre no válido. Por favor, intente de nuevo.");
        }
    }
    console.log("Bienvenido", nombre);
    let opcion = "";
    while (opcion !== "cotizar" && opcion !== "salir") {
        opcion = prompt("Hola " + nombre + ", ¿qué deseas hacer? Ingresa 'cotizar' para cotizar un seguro o 'salir' para salir.");
        if (opcion !== "cotizar" && opcion !== "salir") {
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
    console.log("Bienvenido", nombre);
    let opcion2 = "cotizar tu moto";
    while (opcion2 !== "cotizar tu moto" && opcion !== "salir") {
        if (opcion2 !== "cotizar tu moto" && opcion !== "salir") {
            alert("Opción no válida. Por favor, intente de nuevo.");
        }
        opcion2 = prompt("Hola " + nombre + ", ¿qué deseas hacer? Ingresa 'cotizar tu moto' para cotizar un seguro para tu moto o 'salir' para salir.");
    }
    if (opcion2 === "cotizar tu moto") {
        let valorMoto = prompt("Ingresa el valor de tu moto");
        let costoRoboRC = valorMoto * 0.15;
        let costoSoloRC = valorMoto * 0.02;
        console.log("El costo del seguro con Robo + RC es $" + costoRoboRC + " y el costo del seguro solo con RC es $" + costoSoloRC);
        let opcionContinuar = "";
        while (opcionContinuar !== "cotizar otra moto" && opcionContinuar !== "salir") {
            opcionContinuar = prompt("¿Deseas cotizar otra moto o salir? Ingresa 'cotizar otra moto' para cotizar otra moto o 'salir' para salir.");
            if (opcionContinuar !== "cotizar otra moto" && opcionContinuar !== "salir") {
                alert("Opción no válida. Por favor, intente de nuevo.");
            }
        }
        if (opcionContinuar === "cotizar otra moto") {

        } else if (opcionContinuar === "salir") {
            console.log("Gracias por utilizar nuestros servicios, " + nombre + ". ¡Hasta pronto!");
        }
    } else if (opcion === "salir") {
        console.log("Gracias por utilizar nuestros servicios, " + nombre + ". ¡Hasta pronto!");
    }
}
Ingreso();



