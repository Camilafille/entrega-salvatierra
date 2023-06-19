//Eventos para el formulario

let botonR = document.getElementById("botonR");
let boton = document.getElementById("boton");
let botonRese = document.getElementById("botonRese");
let botonResto = document.getElementById("botonResto");

boton.addEventListener("mouseover", () => {
    boton.className = "enviar"; });

boton.addEventListener("mouseout", () => {
    boton.className = "submit";});

botonR.addEventListener("click" , () => {
    localStorage.clear();
        location.reload();
} );


botonResto.addEventListener("mouseover", () => {
    botonResto.className = "enviar" });

botonResto.addEventListener("mouseout", () => {
    botonResto.className = "submit"});
        
botonRese.addEventListener("click", () => {
    localStorage.clear();
        location.reload();
} );


/*
Validacion del formulario

*/

let pasajeros = document.getElementById("pasajeros");
pasajeros.addEventListener("input", () => {
    let cantidadPasajeros = parseInt(pasajeros.value);
    if(isNaN(cantidadPasajeros) ||cantidadPasajeros > 5) {   
        Swal.fire({
            title: 'Error',
            text: 'Ingresar un número válido de pasajeros y no puede ser mayor a 5 pasajeros',
            icon: 'error'
          });
        }
    });

let mail = document.getElementById("mail");
mail.addEventListener("input", () => {
    if(!mail.value.includes("@")){
        mail.className = "incorrecto";
        setTimeout( () => {
            mail.classList.remove( "incorrecto");
            mail.classList.add("correcto");
                }, 4000)
    }else{ 
        mail.className = "correcto";
    }
});




