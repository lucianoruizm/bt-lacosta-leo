class PublicacionDemanda {
    constructor(descripcion, imagen){
     this.descripcion = descripcion;
     this.imagen = imagen;
    }
}

const listaPublicacionDemanda = JSON.parse(localStorage.getItem("publicacionDemanda")) || [];

const crearPublicacionDemanda = (publicacionDemanda)=> {
    let contenedorPublicacion = document.createElement("div");
    contenedorPublicacion.className = 'ofertaP';
    contenedorPublicacion.innerHTML = `
                               
                                 <p class="text-oferta">
                                 ${publicacionDemanda.descripcion}
                                 </p>
                                 <img id="img" class="ofertaImg" alt="img">
                                 `;
    document.querySelector(".listOferta").append(contenedorPublicacion);
}

listaPublicacionDemanda.forEach((publicacionDemanda) => crearPublicacionDemanda(publicacionDemanda));




let publicar= document.querySelector("#formulario2")

// Events
publicar.addEventListener("submit", (e)=>{
    e.preventDefault();

    let descripcion = document.getElementById("descripcion").value;
    // CARGAR IMAGENES
    let imagen = document.getElementById('inputFile');
    imagen.addEventListener('change', mostrarImagen, false);
      
    function mostrarImagen(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event) {
          let img = document.getElementById('img');
          img.src= event.target.result;
        }
        reader.readAsDataURL(file);
    }

    let nuevaPublicacion = new PublicacionDemanda(descripcion, imagen);
    listaPublicacionDemanda.push(nuevaPublicacion);
    localStorage.setItem("publicacionDemanda", JSON.stringify(listaPublicacionDemanda));

    crearPublicacionDemanda(nuevaPublicacion);
    Toastify({

        text: "Publicacion realizada",
        
        duration: 5000
        
        }).showToast();
    console.log(listaPublicacionDemanda)
})

// FETCH
fetch("../publicacionesDemanda.json")
    .then(response => response.json())
    .then(result => {
        const datos = result;
        datos.forEach(dato => {
            crearPublicacionDemanda(dato)
        })
})