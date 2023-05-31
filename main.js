//Eventos para el formulario:

let boton = document.getElementById("boton");
boton.addEventListener("mouseover", () => {
    boton.className = "enviar" });

boton.addEventListener("mouseout", () => {
boton.className = "submit"});

let botonR = document.getElementById("botonR") 
botonR.addEventListener("click" , () => {
    localStorage.clear();
    location.reload();
} )

let mail = document.getElementById("mail");
mail.addEventListener("input", () => {
    if(!mail.value.includes("@")){
        mail.className = "incorrecto"}
});

//Almacen en localStorage de los valores del input

let formulario = document.getElementById('formulario');

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
    // Aca vamos a obtener ños valores del los input
    let inputs = formulario.querySelectorAll(".input");
    let formDatos = {};
    inputs.forEach(input => {
        formDatos[input.id] = input.value;
    });
    // SE Guarda los valores en localStorage
    localStorage.setItem("formDatos", JSON.stringify(formDatos));
    formulario.reset();
    });















