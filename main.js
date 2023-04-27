


//Variables

let reserva = "si";
let bienvenida = prompt("Bienvenido a nuestro Hotel, desea realizar una reserva?");

//funcion
function bienvenidaPagina(){
    let bienvenida = "Bienvenido/a a nuestra pagina web";
    alert(bienvenida)
}

function cantidadPersonas(){
    let cantidadAdultos = parseInt(prompt("Ingrese cantidad de adultos"));
        let cantidadMenores = parseInt(prompt("Ingrese cantidad de menores"));       
        let personas = cantidadAdultos + cantidadMenores;
        alert(`La cantidad de personas ingresadas son ${personas}.`);
    }

function checking(){
    let fechaCheckIn = prompt("Ingresa fecha estimada de check in");
    let fechaCheckOut = prompt("Ingresa fecha estimada de check out");
    alert(`Check in: ${fechaCheckIn}, Check out: ${fechaCheckOut}`);   
}



//Loop

while(bienvenida.toLowerCase() === "si"){
        usuario = prompt("Ingrese su nombre y apellido");
        let mensaje = `Hola ${usuario}`;
        alert(mensaje);        
        cantidadPersonas()
        checking()
        let mail = prompt("Ingrese mail para ser contactado por nuestro staff");
        let respuesta = prompt(`Estimado/a ${usuario}, usted ingreso el siguiente mail ${mail} para reservar el día ${fechaCheckIn} hasta el dia ${fechaCheckOut}. Es esta informacion correcta?`);  
//Condicional
        if(respuesta.toLowerCase() === "si"){
            alert("Gracias por contactarnos! Nos comunicaremos a la brevedad via mail.");
            break;
        } 
        

}

bienvenidaPagina();









