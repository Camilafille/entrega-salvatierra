
//Formulario de la pagina Resto-bar
let botonRese = document.getElementById("botonRese");
let botonResto = document.getElementById("botonResto");

botonResto.addEventListener("mouseover", () => {
    botonResto.className = "enviar" });

botonResto.addEventListener("mouseout", () => {
    botonResto.className = "submit"});
        
botonRese.addEventListener("click", () => {
    localStorage.clear();
        location.reload();
} );


let formResto = document.getElementById("formResto");
 formResto.addEventListener("submit", (e) => {
   e.preventDefault();
   let inputsResto = formResto.querySelectorAll(".inputResto");
   const formR = {};
    inputsResto.forEach((input) => {
      formR[input.id] = input.value;  
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 1500
      });
      
    });
  
  // SE Guardan los valores en localStorage
    localStorage.setItem("formR", JSON.stringify(formR));
    formResto.reset();

  });


//validacion de mail

  let mailResto = document.getElementById("mailResto");
  mailResto.addEventListener("input", () => {
      if(!mailResto.value.includes("@")){
        mailResto.className = "incorrecto";
          setTimeout( () => {
            mailResto.classList.remove( "incorrecto");
            mailResto.classList.add("correcto");
                  }, 4000)
      }else{ 
        mailResto.className = "correcto";
      }
  });
  

