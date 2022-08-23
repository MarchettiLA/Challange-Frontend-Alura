
const body = document.querySelector("body");
const loginContainer = document.createElement("div");


// FUNCION con LISTENER PARA BOTON LOGIN

 const loginRequest = () => {
    const button = document.querySelector(".button-container__button");
    button.addEventListener("click", createLoginDiv)
 }

///////////////////////////////////////////////////////  FUNCION PRINCIPAL PARA CREAR PANTALLA DE LOGIN  //////////////////////////////////////////////////////

 const createLoginDiv = () =>{
    createLoginWindow();
    createLoginTitle();
    createLoginForm();
    createLoginButtons();
 }

 /////////////////////////////////////////////////////////////////  FUNCIONES ASISTENTES  ////////////////////////////////////////////////////////////////////

/////////////// FUNCION PARA CREAR VENTANA DE LOGIN

const createLoginWindow = () => {
    loginContainer.classList.add("login__flex-container");
    body.appendChild(loginContainer);
    body.classList.add("blurred");
    setTimeout(()=> loginContainer.classList.add("visible"),100)
}

/////////////// FUNCION PARA CREAR TITULO
const loginTitle = document.createElement("h3");
const createLoginTitle = () => {
    loginTitle.textContent = "Iniciar Sesión"
    loginTitle.classList.add("login__title")
    loginContainer.appendChild(loginTitle)
}

/////////////// FUNCION PARA CREAR FORMULARIO

const loginForm = document.createElement("form");
const mailInput = document.createElement("input");
const passInput = document.createElement("input");
const passLabel = document.createElement("label");
const mailLabel = document.createElement("label");
const createLoginForm = () => {
    // CREANDO FORM
    loginForm.classList.add("login__form");
    // CREANDO MAIL LABEL
    mailLabel.classList.add("form__label");
    mailLabel.textContent = "E-mail"
    mailLabel.for = "email"
    // CREANDO MAIL INPUT
    mailInput.classList.add("form__input");
    mailInput.type = "email";
    mailInput.name = "email";
    mailInput.id = "email"
    // CREANDO PASS LABEL
   
    passLabel.classList.add("form__label");
    passLabel.textContent = "Contraseña"
    passLabel.for = "pass"
    // CREANDO PASS INPUT
    passInput.classList.add("form__input");
    passInput.type = "password";
    passInput.name = "pass";
    passInput.id = "pass";
    loginForm.appendChild(mailLabel);
    loginForm.appendChild(mailInput);
    loginForm.appendChild(passLabel);
    loginForm.appendChild(passInput);
    loginContainer.appendChild(loginForm);
}

// FUNCION ASISTENTE PARA CREATE LOGIN FORM

const primaryButton = document.createElement("button");
const secondaryButton = document.createElement("button");
const closeButton = document.createElement("i");



const createLoginButtons = () => {
    //CREANDO CONTAINER
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("form__button-container");
    //CREANDO BOTON PRINCIPAL
    primaryButton.classList.add("form__button", "btn", "btn-primary");
    primaryButton.textContent = "Iniciar Sesión";
    //CREANDO BOTON SECUNDARIO
    secondaryButton.classList.add("form__button","btn", "btn-secondary");
    secondaryButton.textContent = "Registrarse";
    // CREANDO X PARA CERRAR 
    closeButton.classList.add("fa-solid", "fa-x","close-button");
    
    buttonContainer.appendChild(primaryButton);
    buttonContainer.appendChild(secondaryButton);
    loginForm.appendChild(buttonContainer);
    loginForm.appendChild(closeButton);
}

///////////////////////////////////////////////////////////// EVENTOS BOTONES  ////////////////////////////////////////////////////////////////////////////////

// PARA CERRAR LOGIN WINDOW
const deleteLoginWindow = () => {
    body.removeChild(loginContainer);
    body.classList.remove("blurred");
    setTimeout(()=> loginContainer.classList.remove("visible"),100)
}

closeButton.addEventListener("click", deleteLoginWindow)

// LLAMADA A FUNCIONES

loginRequest();