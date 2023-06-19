
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

//Alerts con el precio de habitacion cuando hacemos click en el boton info con FETCH

let botonInfo = document.querySelectorAll(".accion");
let divHabitaciones = document.getElementById("divHabitaciones");

//funcion 1 para que se muestre el precio en caso de no haber error

const infoHabitacion = (habitacion) => {
  Swal.fire({
    position: 'top-end',
    icon: 'info',
    title: `Precio de la habitación por noche es: $ ${habitacion.precio}`,
    showConfirmButton: false,
    timer: 3000
  });
}

//funcion 2 para que se muestre el mensaje de error

const habitacionError = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: `Error`,
    text: `Hubo un error al mostrar la información`
  });
}

//obtenemos la informacion de la habitacion desde un servidor local
botonInfo.forEach((boton) => { 
  boton.addEventListener("click", async () => {
  const habitacionId = boton.dataset.habitacionId;
  try{
  const response = await fetch("./data.json")
  const data = await response.json();
  const habitacion = data.find(({id}) => id === parseInt(habitacionId));

  //uso de operador ternario para definir cual mensaje mostrar
  habitacion ? infoHabitacion(habitacion) : habitacionError();

    } catch {
      habitacionError();
    }
  });
});
