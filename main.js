


    /*                         Entrega final:
                                Objetos y Arrays. Metodos de arrays
                                [funciones y condicionales e iteraciones]
                                generacion de Dom de forma dinamica. [Eventos]
                                Sintaxis avanzada
                                [Al menos una libreria de uso relevante]
                                Manejo de promesas con FETCH
                                Carga de datos desde un JSON local o desde una API externa.
                          *Cuando llegues a la parte del AJAX, fijate el chat del grupo
                            para solucionar que te tome el json



    Esta pagina se trata sobre reservar en un hotel, va a tener lo siguiente:

un formulario que cuenta con nombre y apellido
cantidad de huespedes(podemos agregar que no debe pasar las 5 personas)
tambien cuenta con fecha de llegada y fecha de salida. 
a lo ultimo se pide el mail
con validacion en el mail, debe llevar arroba.
A esto le agregamos que cuando termines de completar todo se mande
a la localstorage y se pueda ver en un alert. 
cuando pongas aceptar a los cinco segundos debe aparecer un toast diciendo que 
se envio la solicitud de reserva.

Otra seccion:
va a haber cards que permitan ver el precio de las habitaciones por noche asi uno puede
calcular con mas o con menos la cuanto sale la cantidad de dias.
y debajo un boton que diga reservar que te lleve a la reserva.

Otra seccion:

va a haber una seccion con las actividades que se ofrece en el hotel,
estas son cards que tendran un boton que al hacerle click uno podra 
ingresar un mail para suscribirse a la newsletter.


Asegurarse de usar una sintaxis mas compleja. sugar syntax


(Otra idea es que cuando llegue a un numero de noches, aparezca un mensaje diciendo que a partir de la 7 ma noche 
hay un descuento de 10% de alojamiento. 
Pago con transferencia bancaria tiene un 5% de descuento (Esto lo podemos agregar como texto ya hecho)
) 

    *Otra opcion es agregar para ver dispoibilidad: pedis dia de llegaada, de ida y cantidad de personas y numero de habitaciones y 
    que tenga un boton para buscar

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



HOY JUEVES: [-Agregar una seccion con cards que tengan actividades.]
            [- Agregar las  cards de las habitaciones.]
            -Enforcarnos en el formulario.


VIERNES:    [-Ver video final]
            -va a haber cards que permitan ver el precio de las habitaciones por noche asi uno puede
calcular con mas o con menos la cuanto sale la cantidad de dias.
y debajo un boton que diga reservar que te lleve a la reserva.
            
            -[va a haber una seccion con las actividades que se ofrece en el hotel,
estas son cards que tendran un boton que al hacerle click uno podra 
ingresar un mail para suscribirse a la newsletter.]

Sabado: -Otra idea es que cuando llegue a un numero de noches, aparezca un mensaje diciendo que a partir de la 7 ma noche 
hay un descuento de 10% de alojamiento. 
Pago con transferencia bancaria tiene un 5% de descuento (Esto lo podemos agregar como texto ya hecho
        -Agregar fetch*
        -Promesa y async


domingo: - agregar sugar syntax y mejorar el codigo para  entregarlo


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

¨podriamos agregar un box de sugerencias en algun lado?

Podemos agregar un alert de descuento para el fin de semana para que reserven y lleve al formulario.

Podemos agregar el resto de las paginas.

Podemos hacer que aparezca primero un alert que aparece a los 5 segundos de abierta la pagina y luego
aparece el de bienvenido. 

podemos preguntar si lo incluido en el formulario esta bien, si lo esta darle el de success
si no, volver a recargar el formulario

///////////////////////////////////////7






    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    
    h2.textContent = Object.values(formDatos).join("  ");
    
    div.appendChild(h2);
    document.body.appendChild(div);


boton.addEventListener("click", () => {

fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    data.forEach( () =>{
        const li = document.createElement("li");
        li.innerHTML = `

        <h2> ID: ${usuario.id}</h2>
        <p>ID: ${usuario.nombre}</p>
        <b>ID: ${usuario.precio}</b>
        <hr/> `;
        lista.appen(li);
    })
})
});

//Podrias filtrar el arreglo

<div id="container"></div>

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


//lo uno con el apend a un id cuando quiera crear dom, ver  main.js parte dos

let botonInfo = document.getElementById("botonInfo");
let divHabitaciones = document.getElementById("divHabitaciones")
botonInfo.addEventListener("click", async () => {
  
fetch("./data.json")
.then((response) => response.json())
.then((data) => {
  data.forEach((habitacion) => {
    const div= document.createElement("div");
    div.innerHTML = `
    <h2> Precio: ${habitacion.precio}</h2>
    <hr />`;
  divHabitaciones.append(div);
  })


})

  

}

)
