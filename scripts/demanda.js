class PublicacionDemanda {
    constructor(descripcion){
     this.descripcion = descripcion;
    }
}
const listaPublicacionDemanda = JSON.parse(localStorage.getItem("publicacionDemanda")) || [];

// getUserAsync()

const crearPublicacionDemanda = (publicacionDemanda)=> {

    let contenedorPublicacion = document.createElement("div");
    contenedorPublicacion.className = 'ofertaP';
    contenedorPublicacion.innerHTML = `
                                 <p class="text-oferta">
                                 ${publicacionDemanda.descripcion}
                                 </p>
                                 `;
    document.querySelector(".listOferta").append(contenedorPublicacion);

}

const clearInput = () => {
    //Select all the inputs
    const inputs = document.querySelectorAll('.input-text');
    // Clear the content of each input
    inputs.forEach((input) => input.value = '');
}

listaPublicacionDemanda.forEach((publicacionDemanda) => crearPublicacionDemanda(publicacionDemanda));

let publicar= document.querySelector("#formulario2")

// Events
publicar.addEventListener("submit", (e)=>{
    e.preventDefault();

    let descripcion = document.getElementById("descripcion").value;

    let nuevaPublicacion = new PublicacionDemanda(descripcion);
    listaPublicacionDemanda.push(nuevaPublicacion);
    localStorage.setItem("publicacionDemanda", JSON.stringify(listaPublicacionDemanda));
    clearInput();

    crearPublicacionDemanda(nuevaPublicacion);

    Toastify({

        text: "Publicacion realizada",
        
        duration: 5000
        
        }).showToast();

    console.log(listaPublicacionDemanda)
})

const pedirPosts =
async () => {
    const resp = await 
    fetch("../publicacionesDemanda.json")
    const data = await resp.json()
    
    data.forEach(post => {
        crearPublicacionDemanda(post)
    })
}

pedirPosts();