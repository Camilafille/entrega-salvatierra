//Boton de forumalrio de solicitud de reserva
let formulario = document.getElementById("formulario");
let botonR = document.getElementById("botonR")


//Evento que al enviar la informacion, evita que se recargue la pagina y obtiene los valores de cada input


//Agregar para que si apreta una cosa pase eso y si apreta otra pase otra cosa

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = formulario.querySelectorAll(".input");
    let formDatos = {};

  inputs.forEach( (input) => {
    formDatos[input.id] = input.value;
// Aparecera un alert cuando se envie la solicitud
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Solicitud de reserva enviada',
      showConfirmButton: false,
      timer: 1500
    })
    
  });
// SE Guardan los valores en localStorage y cuando se hace click en el boton reset se vacia.
  localStorage.setItem("formDatos", JSON.stringify(formDatos));
  formulario.reset();
});
  // Crear el nuevo div y agregar la información del formulario
  

/*
let nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = JSON.stringify(formDatos);
  document.body.append(nuevoDiv)



   */
   //Boton de suscripcion en las cards de actividades
  let botonSus = document.querySelectorAll(".subscribe-btn");

  //Agregue un iterador para que en cada boton de las cards
  //aparezca el alert para suscribirse a la newsletter




  


//Podemos agregar el mail a la local storage






  botonSus.forEach((boton) => {
  boton.addEventListener("click", async () => {
  const { value: email } = await Swal.fire({
    title: 'Suscribite a nuestra Newsletter!',
    input: 'email',
    inputLabel: 'Tu email',
    inputPlaceholder: 'Ingresa tu email'
  })
  
  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }

});
  
});