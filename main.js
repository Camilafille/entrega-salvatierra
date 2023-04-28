/* Simulacion de toma de datos para comenzar una reserva en un hotel: 
    Se pregunta si quiere hacer una reserva, en caso de que la respuesta sea si,
    se realiza una serie de preguntas. En caso de que la respuesta sea otra, se le da la bienvenida a la página.
    La información requerida en caso de querer comunicarse para realizar una reserva es: 
-Nombre Completo
-Cantidad de adultos y menores que desean hospedarse.
-Fecha de ingreso.
-Fecha de egreso.
-Consultar precio de la habitacion por noche.
-Mail.
En caso de haber completado correctamente la informacion, se le da bienvenida a la página.
En caso contrario, comienza el ciclo preguntando su nombre.</p>



Lo que podemos mejporar es : 
calcular el precio de habitacion a corde a los dias que la persona plantea quedarse. 
teniendo en cuenta el (precio base + (iva x precio base)) x dia.

por ejemplo:
precio base: 300 pesos.
iva: 0,21
dias: 3
entonces: (300 + (iva x precio base)) x 3

*/



//Variables

let reserva = "si";
const bienvenida = prompt("Bienvenido a nuestro Hotel, ¿Desea realizar una reserva?. Si su prespuesta es afirmativa ingrese SI.");


//funciones
function bienvenidaPagina(){
    let bienvenida = "Bienvenido/a a nuestra pagina web";
    return alert(bienvenida);
}

function cantidadPersonas(){
    let cantidadAdultos = parseInt(prompt("Ingrese cantidad de adultos a hospedarse."));
        let cantidadMenores = parseInt(prompt("Ingrese cantidad de menores a hospedarse."));       
        let personas = cantidadAdultos + cantidadMenores;
        return alert(`La cantidad de personas ingresadas son ${personas}.`);
    }

function checking(){
    let fechaCheckIn = prompt("Ingresa fecha estimada de check in");
    let fechaCheckOut = prompt("Ingresa fecha estimada de check out");
    return alert(`Check in: ${fechaCheckIn}, Check out: ${fechaCheckOut}`);   
}

//Loop: vamos a pedir cierta informacion al cliente para luego enviar un mail e iniciar la reserva:
while(bienvenida.toLowerCase() === "si"){
        usuario = prompt("Ingrese su nombre y apellido");
        let mensaje = `Hola ${usuario} bienvenido a nuestro sistema de información. Ingrese los datos requeridos y nos contactaremos a la brevedad.`;
        alert(mensaje);        
        cantidadPersonas();
        checking();


//Le ofrecemos precios por noche de las habitaciones standar, superior y suite.
        let habitacion = prompt("Para consultar el precio por noche de las habitaciones: Standar, Superior o Suite. Ingrese nombre de la habitación");
        while (habitacion.toLowerCase() === "standar" || habitacion.toLowerCase() === "superior" || habitacion.toLowerCase() === "suite" ) {
            let precioStandar = 30000;
            let precioSuperior = 40000;
            let precioSuite = 48000;
            const iva = x => x * 0.21;
            const descuento = x => x * 0.15;

            if(habitacion.toLowerCase() === "standar"){
                precio = (precioStandar + iva(precioStandar)) - descuento(precioStandar);
                alert(`El precio por noche de una habitación Standar es ${precio} `);
                break;
            }else if (habitacion.toLowerCase() === "superior"){
                precio2 = (precioSuperior + iva(precioSuperior)) - descuento(precioSuperior);
                alert(`El precio por noche de una habitación Superior es ${precio2}`);
                break;
            }else if (habitacion.toLowerCase() === "suite"){
                precio3 = (precioSuite + iva(precioSuite)) - descuento(precioSuite);
                alert(`El precio por noche de una habitación Suite es ${precio3}`);
                break;
                }
            }
        let mail = prompt("Ingrese mail para ser contactado por nuestro staff"); 
        alert(`El mail ingresado es ${mail}` );
        let respuesta = prompt("¿La información ingresada es correcta?. De ser afirmativo ingrese SI. ");

//Condicional: Si su informacion esta correcta, entonces le damos las gracias y si no lo esta, el ciclo vuelve a empezar.
        if(respuesta.toLowerCase() === "si"){
        alert("Gracias por contactarnos! Nos comunicaremos a la brevedad via mail.");
        break;
        } 
    }


bienvenidaPagina();






