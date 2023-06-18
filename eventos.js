//Eventos para el formulario

let botonR = document.getElementById("botonR");
let boton = document.getElementById("boton");

boton.addEventListener("mouseover", () => {
    boton.className = "enviar" });

boton.addEventListener("mouseout", () => {
boton.className = "submit"});

botonR.addEventListener("click" , () => {
    localStorage.clear();
    location.reload();
} );

let botonRese = document.getElementById("botonRese");
botonRese.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
} );






let seccion = document.getElementById("")
/*
Validacion del formulario
*/

let pasajeros = document.getElementById("pasajeros")
pasajeros.addEventListener("input", () => {
    let cantidadPasajeros = parseInt(pasajeros.value);
    if(cantidadPasajeros > 5) {
        
        Swal.fire({
            title: 'Error',
            text: 'No se puede agregar más de 5 pasajeros',
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




