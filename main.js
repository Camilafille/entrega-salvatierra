/* 



*/


let reserva = "si";
const bienvenida = prompt("Bienvenido a nuestro Hotel, ¿Desea realizar una reserva?. Si su prespuesta es afirmativa ingrese SI.");

const bienvenidaPagina = () => {
    let bienvenida = "Bienvenido/a a nuestra pagina web";
    return alert(bienvenida);
}

const cantidadPersonas = () => {
    let cantidadAdultos = parseInt(prompt("Ingrese cantidad de adultos a hospedarse."));
        let cantidadMenores = parseInt(prompt("Ingrese cantidad de menores a hospedarse."));       
        let personas = cantidadAdultos + cantidadMenores;
        return alert(`La cantidad de personas ingresadas son ${personas}.`);
    }

    const calcularDiasHospedaje = (checkIn, checkOut) =>  {
        const diferencia = new Date(checkOut) - new Date(checkIn);
        return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
        }
        

        const habitaciones = [
            {id: 1 , nombre: "standar", precio: 30000},
            {id: 2 , nombre: "superior", precio: 40000},
            {id: 3 , nombre: "suite", precio: 48000},
            ];
        

while(bienvenida.toLowerCase() === "si"){
        usuario = prompt("Ingrese su nombre y apellido");
        let mensaje = `Hola ${usuario} bienvenido a nuestro sistema de información. Ingrese los datos requeridos y nos contactaremos a la brevedad.`;
        alert(mensaje);        
        cantidadPersonas();
        const checkIn = prompt("Ingrese la fecha de check-in (yyyy-mm-dd):");
        const checkOut = prompt("Ingrese la fecha de check-out (yyyy-mm-dd):");
        alert(`Check in: ${checkIn}, Check out: ${checkOut}`);
        const numDias = calcularDiasHospedaje(checkIn, checkOut);
    
const seleccionHabitacion = prompt("Para consultar el precio por noche de las habitaciones: Standar, Superior o Suite. Ingrese nombre de la habitación");
const habitacionSeleccionada = habitaciones.find((habitacion) => habitacion.nombre.includes(seleccionHabitacion));
            const iva = x => x * 0.21;
            const precioPorDia = habitacionSeleccionada.precio + iva(habitacionSeleccionada.precio);
            const precioTotal = precioPorDia * numDias;
            alert(`El precio total por ${numDias} día(s) en la habitación ${seleccionHabitacion} es: $${precioTotal}`);
        
            let mail = prompt("Ingrese mail para ser contactado por nuestro staff"); 
            alert(`El mail ingresado es ${mail}` );
            let respuesta = prompt("¿La información ingresada es correcta?. De ser afirmativo ingrese SI. ");

//Condicional: Si su informacion esta correcta, entonces le damos las gracias y si no lo esta, el ciclo vuelve a empezar.
        if(respuesta.toLowerCase() === "si"){
        alert("Gracias por contactarnos! Nos comunicaremos a la brevedad via mail.");
        } 
        break;
    }


bienvenidaPagina();


// Tenemos que: 

/*  ELIMINAR COMENTARIOS DE CODIGO ACA. |v|
    Cambiar funciones a funciones ARROw |v|
    HTML
    Agregar:
    Funciones de orden superior,
    Declarar variables
    y objetos necesarios
    Arrays
    Metodos de busqueda y filtrado necesario 
    
    
    


. Funciones que devuelvan funciones. En un hotel que puedo hacer? 
- Puede ser que vos pongas la cantidad de dias y que habitacion queres usar, te devuleve el precio 
qaca debes hacer una funcion que te calcule los dias 
otra que te pregunte la habitacion que queres que debe tener un precio en su objeto
y otra que multiplique los dias por el precio y que te devuelva el precio.




*/






