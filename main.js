


    /*                         Entrega final:
                                [Objetos y Arrays] [Metodos de arrays]
                                [funciones y condicionales e iteraciones]
                                [generacion de Dom de forma dinamica]. [Eventos]
                                Sintaxis avanzada
                                [Al menos una libreria de uso relevante]
                                Manejo de promesas con FETCH
                                [Carga de datos desde un JSON local o desde una API externa.]
                          

Otra seccion:
va a haber cards que permitan ver el precio de las habitaciones por noche asi uno puede
calcular con mas o con menos la cuanto sale la cantidad de dias.
y debajo un boton que diga reservar que te lleve a la reserva.

Asegurarse de usar una sintaxis mas compleja. sugar syntax


(Otra idea es que cuando llegue a un numero de noches, aparezca un mensaje diciendo que a partir de la 7 ma noche 
hay un descuento de 10% de alojamiento. 
Pago con transferencia bancaria tiene un 5% de descuento (Esto lo podemos agregar como texto ya hecho)
) 

        

domingo: - agregar sugar syntax y mejorar el codigo para  entregarlo
        - agregar mouseover al formulario del resto tambirn
////////////////////////////////7



*Una idea es que usemos el operador spread para aumentar el precio :
Otro uso del operator SPREAD:

Otro uso es el de sobreescribir o agregar propiedades dentro de objetos:

let objeto1 = {nombre: "juan", edad: 45 };
let objeto2 = {
    ...objeto1, 
    edad: 10, // COMO LA EDAD YA LA TENIAMOS LO QUE VA A HACER ES SOBREESCRIBIRLA
    curso: "javascript" // como no habia antes, se va a AGREGAR 
}

console.log(objeto2);



podemos preguntar si lo incluido en el formulario esta bien, si lo esta darle el de success
si no, volver a recargar el formulario

///////////////////////////////////////7



const desestructurar = ({ nombre, edad }) => {
    console.log(nombre, edad);
};

const usuario = {
    nombre:"juans" ,
    edad: 18 ,
    direccion: "AV" ,
    FAMILIA: "Gomez",
};

desestructurar(usuario); //MANDAMOS SOLO EL OBJETO Y DESESTRUCTURAMOS DIRECTAMENTE EN LA CONSTANTE DESESTRUCTURAR.

-------
Hacemos lo de arriba para no tener que hacer lo siguiente:

const desestructurar = (usuario) => {
    let {nombre, edad} = usuario;
    console.log(nombre, edad);
};


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
}

bienvenidaPagina();


//Alert para que me aparezca una publicidad pasados los 7 segundos de abrir la pagina

const publicidad = () =>{
  setTimeout(() => { 
    Swal.fire({
      title: 'Descuento Especial!',
      text: 'Este fin de semana ofrecemos un descuento del 15% en alojamiento.',
      imageUrl: './assets/masajista-haciendo-masaje-columna-vertebral-cuerpo-hombre-salon-spa-concepto-tratamiento-belleza_186202-4757.webp',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'masaje',
    });
  }, 7000);
};

publicidad();


//Alerts con el precio de habitacion cuando hacemos click en el boton info

let botonInfo = document.querySelectorAll(".accion");
let divHabitaciones = document.getElementById("divHabitaciones");

botonInfo.forEach((boton) => {
    boton.addEventListener("click", () => {
const habitacionId = boton.dataset.habitacionId;
fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const habitacion = data.find((habitacion) => habitacion.id === parseInt(habitacionId));
      if(habitacion){
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: `Precio de la habitación: $ ${habitacion.precio}`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  });
});
