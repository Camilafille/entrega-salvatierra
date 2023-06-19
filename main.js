
 /*                         

*/


//Un toast de bienvenida

const bienvenidaPagina = () =>{
    Toastify({
        text: "Bienvenido a Hotel La Montagne!",
        duration: 4000,
        style: {
            background: "linear-gradient(to right, #ff802b, #be5b18e3)",
          },
        }).showToast();
};

//Alert para que me aparezca una publicidad pasados los 5 segundos de ejecutarse la funcion de bienvenida

const publicidad = () =>{
   
    Swal.fire({
      title: 'Descuento Especial!',
      text: 'Este fin de semana ofrecemos un descuento del 15% en alojamiento.',
      imageUrl: './assets/masajista-haciendo-masaje-columna-vertebral-cuerpo-hombre-salon-spa-concepto-tratamiento-belleza_186202-4757.webp',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'masaje',
    });
  };

bienvenidaPagina();
setTimeout(publicidad, 5000);

//Alerts con el precio de habitacion cuando hacemos click en el boton info

let botonInfo = document.querySelectorAll(".accion");
let divHabitaciones = document.getElementById("divHabitaciones");

botonInfo.forEach((boton) => {
    boton.addEventListener("click", () => {
const habitacionId = boton.dataset.habitacionId;
fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const habitacion = data.find(habitacion => habitacion.id === parseInt(habitacionId));
      if(habitacion){
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: `Precio de la habitación: $ ${habitacion.precio}`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch((error) =>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        text: `Hubo un error al mostrar la información`
      });
    })
  });
});
