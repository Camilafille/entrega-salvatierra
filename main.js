


    /*                         Entrega final:
                                [Objetos y Arrays] Metodos de arrays
                                [funciones y condicionales e iteraciones]
                                [generacion de Dom de forma dinamica]. [Eventos]
                                Sintaxis avanzada
                                [Al menos una libreria de uso relevante]
                                Manejo de promesas con FETCH
                                Carga de datos desde un JSON local o desde una API externa.
                          *Cuando llegues a la parte del AJAX, fijate el chat del grupo
                            para solucionar que te tome el json



    Esta pagina se trata sobre reservar en un hotel, va a tener lo siguiente:


Otra seccion:
va a haber cards que permitan ver el precio de las habitaciones por noche asi uno puede
calcular con mas o con menos la cuanto sale la cantidad de dias.
y debajo un boton que diga reservar que te lleve a la reserva.

Otra seccion:



Asegurarse de usar una sintaxis mas compleja. sugar syntax


(Otra idea es que cuando llegue a un numero de noches, aparezca un mensaje diciendo que a partir de la 7 ma noche 
hay un descuento de 10% de alojamiento. 
Pago con transferencia bancaria tiene un 5% de descuento (Esto lo podemos agregar como texto ya hecho)
) 


En cuanto al AJAX, podriamos hacer que guarde los precios de las habitaciones con id y nombre, y cuando hagamos click en 
un boton, lo traiga en forma de alert. Para esto tenemos que filtrar el array ??????
BOTON INFORMACIOn-----> crear un div???

Creamos en JSON unos productos,
Luego lo traigo a js de esta manera:


*Le digo que se haga una peticion con fetch al archivo

fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    data.forEach(element =>{
        const li = document.createElement("li");
        li.innerHTML = `

        <h2> ID: ${usuario.id}</h2>
        <p>ID: ${usuario.nombre}</p>
        <b>ID: ${usuario.edad}</b>
        <hr/> `;
        lista.appen(li);
    })
})

//Podrias filtrar el arreglo

-------------------////////////////////---------------


            -va a haber cards que permitan ver el precio de las habitaciones por noche asi uno puede
calcular con mas o con menos la cuanto sale la cantidad de dias.
y debajo un boton que diga reservar que te lleve a la reserva.
            


Sabado: -Otra idea es que cuando llegue a un numero de noches, aparezca un mensaje diciendo que a partir de la 7 ma noche 
hay un descuento de 10% de alojamiento. 
Pago con transferencia bancaria tiene un 5% de descuento (Esto lo podemos agregar como texto ya hecho
        -Agregar fetch*
        -Promesa y async
        

domingo: - agregar sugar syntax y mejorar el codigo para  entregarlo

        - agregar un div en la pagina de resto para explicar que es un formulario de contacto
        -agregar una seccion en la pagina de habitaciones con un boton de reserva.
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

-------------------------

*OTra idea es usar el algoritmo del profesor para que encuentre
los datos que quiero con un boton y colocarlos en un alert:
Podriamos intentar hacer un link con un css para que no quede mal



const usuarios = [
  { id: 1, nombre: "Angeles", edad: 20 },
  { id: 2, nombre: "Enzo", edad: 20 },
  { id: 3, nombre: "Andres", edad: 20 },
];

let container = document.getElementById("container");

const agregar = (id) => {
  let encontrado = usuarios.find((usuario) => usuario.id === id);
  console.log(encontrado);
};

usuarios.forEach((usuario) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${usuario.id}</h2>
    <p>Nombre: ${usuario.nombre}</p>
    <b>Edad: ${usuario.edad}</b>
    <button id="boton${usuario.id}">Agregar</button>
    <hr />
  `;

  container.append(div);

  let boton = document.getElementById(`boton${usuario.id}`);

  boton.addEventListener("click", () => agregar(usuario.id));
});


--------------------------------



Podemos agregar un alert de descuento para el fin de semana para que reserven y lleve al formulario.


Podemos hacer que aparezca primero un alert que aparece a los 5 segundos de abierta la pagina y luego
aparece el de bienvenido. 

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



// Podemos hacer que aparezca primero un alert que aparece a los 5 segundos de abierta la pagina y luego
// aparece el de bienvenido 

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


let fetch = document.getElementById("fetch");

let botonInfo = document.getElementById("botonInfo");
let divHabitaciones = document.getElementById("divHabitaciones");
fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((usuario) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h2>ID: ${usuario.id}</h2>
          <p>Nombre: ${usuario.nombre}</p>
          <b>Edad: ${usuario.edad}</p>
          <hr />
        `;

        fetch.append(li);
      });
    });


