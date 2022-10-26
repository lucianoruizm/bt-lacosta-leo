// GET ID DE FORMULARIO
let formCrear = document.getElementById("formCrear");

// GET DATOS DEL USUARIO DESDE LOCALSTORAGE
const userData = JSON.parse(localStorage.getItem("userData")) || [];

// EVENTO CREAR CUENTA DE USUARIO
formCrear.addEventListener("submit", (e)=>{
    e.preventDefault();

	// CREAR LA CUENTA
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("DNI").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

	let userData = {nombre, apellido, dni, email, pass};
    localStorage.setItem("userData", JSON.stringify(userData));
    
	// ALERTA
	Swal.fire(
		'Cuenta creada!',
		'Te damos la bienvenida!',
		'success'	
	)
  }
)