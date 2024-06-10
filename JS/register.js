
const formRegister = document.querySelector("#register-form");

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


const errFirstName = document.querySelector('#err-firstName');
const errLastName = document.querySelector('#err-lastName');
const errEmail = document.querySelector('#err-email');
const errPassword = document.querySelector('#err-password');


if(firstName && lastName && email && password && errFirstName ){
  formRegister.addEventListener('submit', validarForm)
}else{
  console.log("No se pudo enviar formulario")
}


function validarForm(event){
  event.preventDefault();
  
  let isValid = true;

  if(firstName.value === ""){
    errFirstName.classList.add( "errorMessage");
    errFirstName.textContent="El Nombre no puede estar vacio";
    isValid = false;
  }else{    
    errFirstName.classList.remove("errorMessage");
    errFirstName.classList.add("hide");
    errFirstName.textContent="";    
  }

  if(lastName.value === ""){
    lastName.classList.add("errorMessage");
    errLastName.textContent="El Apellido no puede estar vacio";
    isValid = false;
  }else{
    lastName.classList.remove("errorMessage");
    errLastName.textContent="";
  }

  if(email.value === ""){
    errEmail.classList.add("errorMessage");
    errEmail.textContent="El Email no puede estar vacio";
    isValid = false;
  }else{
    errEmail.classList.remove("errorMessage");
    errEmail.textContent="";
  }

  if(password.value === ""){
    errPassword.classList.add("errorMessage");
    errPassword.textContent="La Contraseña no puede estar vacia";  
    isValid = false;
  } else {
    errPassword.classList.remove("errorMessage");
    errPassword.textContent="";
    }

    // Remueve los mensajes de error si los inputs no estan vacios.
  firstName.addEventListener('input', ()=>{
    if(firstName.value !==""){
      errFirstName.classList.remove("errorMessage");
      errFirstName.textContent="";  
    }
  })

  lastName.addEventListener('input', ()=>{
    if(lastName.value !==""){
      errLastName.classList.remove("errorMessage");
      errLastName.textContent="";  
    }        
  })
 
  email.addEventListener('input', ()=>{
    if(lastName.value !==""){
      errEmail.classList.remove("errorMessage");
      errEmail.textContent="";  
    }        
  })

  password.addEventListener('input', ()=>{
    if(password.value !==""){
      errPassword.classList.remove("errorMessage");
      errPassword.textContent="";
    }
           
  })

  if(isValid){
    const userEmail =formRegister.email.value.trim().toLowerCase();
    const username =  formRegister.firstName.value.trim().toLowerCase();
    const password = formRegister.password.value.trim().toLowerCase();
    
    if (password.length < 6) {
      errPassword.classList.add("errorMessage");
      errPassword.textContent = "La Contraseña debe tener al menos seis digitos";
      return;
    }else{
          console.log("Formulario enviado!!!");

       // guardar el usuario en la "base de datos" (localstorage)
       const users = JSON.parse(localStorage.getItem("users")) || [];
       const existingUser = users.find((user) => user.username === username);
  
      if (existingUser) {
        alert("El nombre de usuario ya se encuentra registrado");
        // errorMessage.textContent = "El nombre de usuario ya se encuentra registrado";
         return;
       }
  
       const newUser = {
         username,
         password,
         userEmail,
       };
  
       users.push(newUser);
  
       localStorage.setItem("users", JSON.stringify(users));
       alert(`Registro Exitoso! ${newUser.username.toUpperCase()}`)
 
       window.location.href = "login.html";
   
       console.log(username)
    }
  

  }else{
    console.log("No se pudo enviar el formulario")
  }
  

}

