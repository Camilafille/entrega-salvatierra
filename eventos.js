//Eventos para el formulario

let boton = document.getElementById("boton");
boton.addEventListener("mouseover", () => {
    boton.className = "enviar" });

boton.addEventListener("mouseout", () => {
boton.className = "submit"});

botonR.addEventListener("click" , () => {
    localStorage.clear();
    location.reload();
} )

/*
Validacion del formulario
*/

let pasajeros = document.getElementById("pasajeros")

pasajeros.addEventListener("input", () => {
    let cantidadPasajeros = parseInt(pasajeros.value);
    if(cantidadPasajeros > 5) {
        
        Swal.fire('No se puede agregar mas de 5 pasajeros')
    }
})

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




