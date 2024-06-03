
const formLogin = document.querySelector("#login-form");

const firstName = document.querySelector('#firstName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


 // errores
const emailError = document.querySelector('#err-email');
const passwordError = document.querySelector('#err-password');
const errorMessage = document.querySelector("#error-message");

if(email && password){
   formLogin.addEventListener('submit', validarLogin)
}else{
   console.log("Login Error")
}
 
function validarLogin(event){
   event.preventDefault();
        
     let isValid = true;

     if (email.value === "") {
          emailError.classList.add("errorMessage");
          emailError.textContent = "El Email no puede estar vacio";
          isValid = false;
     } else {
          emailError.classList.remove("errorMessage");
          emailError.textContent = "";          
     }
      
    if(password.value === ""){
        passwordError.classList.add("errorMessage");
        passwordError.textContent="La Contraseña no puede estar vacia";  
          isValid = false;
    } else {
        passwordError.classList.remove("errorMessage");
        passwordError.textContent="";
    }
      
    // Remueve los mensajes de error si los inputs no estan vacios.
    email.addEventListener('input', ()=>{
      if(email.value !==""){
        emailError.classList.remove("errorMessage");
        emailError.textContent="";  
      }        
    })
      
    password.addEventListener('input', ()=>{
      if(password.value !==""){
        passwordError.classList.remove("errorMessage");
        passwordError.textContent="";
        }
                 
     })

     if(isValid){
        const inputEmail = formLogin.email.value.trim();        
        const inputPass = formLogin.password.value.trim();

        // Obtener el array de usuarios del localStorage
        const users = JSON.parse(localStorage.getItem("users"));
        console.log(users)

        if(users && users.length > 0){
            let usuarioEncontrado = users.find(function(usuario){
                return usuario.userEmail === inputEmail && usuario.password === inputPass;              
                })      
            if(usuarioEncontrado){
                
                console.log(usuarioEncontrado);
                alert(`Login Exitoso  ${usuarioEncontrado.username}`)
                console.log("Login exitoso " + usuarioEncontrado.userEmail)

                var userLogin = usuarioEncontrado.username;
                window.location.href = "../index.html";
            }
        } 
    
      }else{
        console.log("No se pudo enviar el formulario")
      }

 }
