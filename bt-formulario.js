
let divAbajo = document.getElementById("divAbajo"); // Aca voy a adjuntarle los datos que el usuario ingrese en el formulario de solicitud de reserva

//Boton de forumalrio de solicitud de reserva
let formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = formulario.querySelectorAll(".input");
    const formDatos = {};
  inputs.forEach((input) => {
    formDatos[input.id] = input.value;
  });
  const cantidadPasajeros = parseInt(formDatos.pasajeros);
//condicional: no se permite hacer una reservacion para mas de 7 personas
  if (isNaN(cantidadPasajeros) || cantidadPasajeros > 7) {
    Swal.fire({
      title: 'Error',
      text: 'La cantidad de pasajeros debe ser un número válido y no puede ser mayor a 7.',
      icon: 'error'
    });
    return;
  }
// Aparecera un alert cuando se envie la solicitud
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Solicitud de reserva enviada',
      showConfirmButton: false,
      timer: 2000
    });
// SE Guardan los valores en localStorage
  localStorage.setItem("formDatos", JSON.stringify(formDatos));
  formulario.reset();
 // Se cre el nuevo div de  la información del formulario
  let nuevoDiv = document.createElement("div");
  nuevoDiv.innerHTML = `<p>Nombre completo: ${formDatos.nombre}<br>
  Cantidad de pasajeros: ${formDatos.pasajeros} <br>
  Check-in: ${formDatos.checkin}<br>
  Check-out: ${formDatos.checkout}<br>
  Email: ${formDatos.mail}</p>
    `;
    divAbajo.append(nuevoDiv);
});



// Boton para suscribirse a la newsletter sobre actividades que se pueden hacer en el area del hotel, haciendo click en el boton de suscribirse 
let botonSus = document.querySelectorAll(".subscribe-btn");

botonSus.forEach((boton) => { 
  boton.addEventListener("click", async () => {
    const { value: email } = await Swal.fire({
      title: 'Suscribite a nuestra Newsletter!',
      input: 'email',
      inputLabel: 'Tu email',
      inputPlaceholder: 'Ingresa tu email'
    });
    if (email) {
      Swal.fire(`Email: ${email}`);
    }
  });
    
});







