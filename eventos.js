//Eventos para el formulario

let botonR = document.getElementById("botonR");
let boton = document.getElementById("boton");

boton.addEventListener("mouseover", () => {
    boton.className = "enviar"; });

boton.addEventListener("mouseout", () => {
    boton.className = "submit";});

botonR.addEventListener("click" , () => {
    localStorage.clear();
        location.reload();
} );


let mail = document.getElementById("email");
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




