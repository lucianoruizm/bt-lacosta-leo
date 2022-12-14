// GET ID DE FORMULARIO
let formLogin = document.getElementById("formLogin");

// GET DATOS DEL USUARIO DESDE LOCALSTORAGE
const userData = JSON.parse(localStorage.getItem("userData")) || [];

// VARIABLE QUE ALMACENA LOS INTENTOS DE INICIO DE SESIÓN
let intentos = 3;

// FUNCION VALIDACIÓN DE DATOS PARA EL INICIO DE SESIÓN
function validateLogin() {

    // GET INPUT VALUES DEL FORMULARIO DE INICIO DE SESIÓN
    let ingresePass = document.getElementById("passLogin").value;
	let ingreseEmail = document.getElementById("emailLogin").value;

	// ACCESO A LAS PROPIEDADES DEL OBJETO USUARIO
	const email = userData.email;
    const pass = userData.pass;

	// COMPARACIÓN ENTRE LOS DATOS DEL USUARIO Y LOS VALORES DE LOS INPUTS DE LOGIN
	const hayDatosInvalidos = (password, emailUser) => password != pass || emailUser != email;

    if (!hayDatosInvalidos(ingresePass, ingreseEmail)) {
        Swal.fire('Any fool can use a computer');
    	console.log('Inicio de sesión exitoso');
    } else {

        Swal.fire(
            'The Internet?',
            `Te quedan: ${intentos-1} ${intentos === 2 ?  'intento' : 'intentos'}`,
            'question'
        )
        console.log('Email o password erroneos');
    	
        if(intentos === 1){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            console.log('Se acabaron los intentos');
            // GET POR ID DEL BUTTON 'LOGIN' DEL FORMULARIO DE INICIO DE SESIÓN, QUE SE DESHABILITA
            // UNA VEZ QUE EL USUARIO AGOTA LOS INTENTOS DE INICIO DE SESIÓN.
            document.getElementById('btnInputLogin').disabled = 'true';
        }
        intentos--;
    }
}

// EVENTO INICIO DE SESIÓN DE USUARIO
formLogin.addEventListener("submit", (e)=>{
	e.preventDefault();

    // LLAMADA A LA FUNCIÓN PARA VALIDAR DATOS
	validateLogin();
  }
)