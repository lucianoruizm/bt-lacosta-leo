class Publicacion {
    constructor(puesto, localidad, nombreDelLugar, direccion, descripcion){
     this.puesto = puesto;
     this.localidad = localidad;
     this.nombreDelLugar = nombreDelLugar;
     this.direccion = direccion;
     this.descripcion = descripcion;
    }
}
const listaPublicacion = JSON.parse(localStorage.getItem("publicacion")) || [];

// const listaPublicacion = [ 
//     {id:1,
//      localidad: 'San Bernardo', 
//      nombreDelLugar:'Barbaros ',
//      direccion: 'Av.San Bernardo 200',
//      descripcion:'Se busca ayudante de cocina y camarera',
//     },
//     {
//     id:2, 
//     localidad: 'Mar de ajo', 
//     nombreDelLugar:'Pimenton',
//     direccion: 'Hipolito Yrigoyen 51',
//     descripcion:'Se necesito mozo/camarera con experiencia',   
//     }
// ];


const crearPublicacion = (publicacion) => {

    let contenedorPublicacion = document.createElement("div");
    contenedorPublicacion.className = 'ofertaP';
    contenedorPublicacion.innerHTML = `
                                 <p class="text-oferta">
                                  <span>${publicacion.puesto}</span>
                                  -${publicacion.descripcion}.
                                  -${publicacion.nombreDelLugar}.
                                  <span>${publicacion.direccion}</span>
                                  - <span>${publicacion.localidad}</span>
                                 </p>
                                 `;
    document.querySelector(".listOferta").append(contenedorPublicacion);
}

// Display publicaciones en el documento
listaPublicacion.forEach((publicacion) => crearPublicacion(publicacion));


// Add event 
let publicar= document.querySelector("#formulario")

publicar.addEventListener("submit", (e)=>{
    e.preventDefault();

    let puesto = document.getElementById("puesto").value;
    let localidad = document.getElementById("localidad").value;
    let nombreDelLugar = document.getElementById("nombreDelLugar").value;
    let direccion = document.getElementById("direccion").value;
    let descripcion = document.getElementById("descripcion").value;

    let nuevaPublicacion = new Publicacion(puesto, localidad, nombreDelLugar, direccion, descripcion);
    listaPublicacion.push(nuevaPublicacion);
    localStorage.setItem("publicacion", JSON.stringify(listaPublicacion));

    crearPublicacion(nuevaPublicacion);
    Toastify({

        text: "Publicacion realizada",
        
        duration: 5000
        
        }).showToast();
    console.log(listaPublicacion)
})

// Buscador

document.querySelector('#botonBuscador').addEventListener('click', 
function searchPost(e){
    e.preventDefault();
    
    //Get value of the input
    const searchValue = document.querySelector('#buscarPalabra').value.toUpperCase();
    const searchValue2 = document.querySelector('#buscarLocalidad').value.toUpperCase();
    //Get all posts from the post container
    const allPosts = (document.querySelector('.listOferta')).querySelectorAll('div');
    //for loop #1 (used to pass all the posts)
    for(let i = 0; i < allPosts.length; i++){
        let count = 0;
        //Get all element of each line
        const postValues = allPosts[i].querySelectorAll('span,p');
        for(let j = 0; j < postValues.length; j++){
            //Check if any word of the post starts with the input search string
            if((postValues[j].innerHTML.toUpperCase()).includes(searchValue) && (postValues[j].innerHTML.toUpperCase()).includes(searchValue2)  ) {
                count++;
            } 
        }
        if(count > 0){
            //If any element contains the search value then display block
            allPosts[i].style.display = '';
        }else{
            //Else display none
            allPosts[i].style.display = 'none';
        }
    }
    
})


fetch("../publicacionesOferta.json")
    .then(response => response.json())
    .then(result => {
        const datos = result;
        datos.forEach(dato => {
            crearPublicacion(dato)
        })
    })



fetch("../localidades.json")
.then(response => response.json())
.then(result => {
    const datos = result;
    datos.forEach(dato => {
        crearLocalidad(dato)
    })
})

{/* <option value="Costa Esmeralda">Costa Esmeralda</option> */}

const crearLocalidad = (localidad) => {

    let option = document.createElement("option");
        option.innerHTML = `
                              ${localidad.localidad}
                                     `;
        document.querySelector("#localidad").append(option);
}