// GET ID DE FORMULARIO
let formLogin = document.getElementById("formLogin");

// GET DATOS DEL USUARIO DESDE LOCALSTORAGE
const userData = JSON.parse(localStorage.getItem("userData")) || [];

// FUNCION VALIDACIÓN DE DATOS PARA EL INICIO DE SESIÓN
function validateLogin(passRecibido, emailRecibido) {

	// ACCESO A LAS PROPIEDADES DEL OBJETO USUARIO
	const email = userData.email;
    const pass = userData.pass;


	// COMPARACIÓN ENTRE LOS DATOS DEL USUARIO Y LOS VALORES DE LOS INPUTS DE LOGIN
	const hayDatosInvalidos = (password, emailUser) => password != pass || emailUser != email;

    if (!hayDatosInvalidos(passRecibido, emailRecibido)) {
    	console.log('Inicio de sesión exitoso');
    } else {
    	console.log('Email o password erroneos');
		// Intentos
	    // let intentos = 3;
	    
        // while (intentos > 0) {
	    //   intentos--;
        //   console.log(`TE QUEDAN ${intentos} INTENTOS`);
        //   if (intentos == 0) {
        //   	console.log('Se han acabado los intentos de inicio de sesión, vuelva mas tarde');
        //   	break;
        //   }
        // }
    }
}

// EVENTO INICIO DE SESIÓN DE USUARIO
formLogin.addEventListener("submit", (e)=>{
	e.preventDefault();

	// GET INPUT VALUES DEL FORMULARIO DE INICIO DE SESIÓN
    let ingresePass = document.getElementById("passLogin").value;
	let ingreseEmail = document.getElementById("emailLogin").value;

    // LLAMADA A LA FUNCIÓN PARA VALIDAR DATOS
	validateLogin(ingresePass, ingreseEmail);
	
  }
)