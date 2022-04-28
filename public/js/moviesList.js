
let body = document.querySelector("body")
let h1 = document.querySelector("h1")

let modoOscuro = prompt("¿Desea modo oscuro?")
if (modoOscuro == "SI"){
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add("fondoMoviesList")
}

h1.innerText = "LISTADO DE PELÍCULAS"
h1.style.color = "White"
h1.style.backgroundColor = "Teal"
h1.style.padding  = "20px"


/*
Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo; 
/views//moviesAdd.ejs. 
●        Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>, 
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.  
●        Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.  
●        Agregar a la etiqueta <h1> la clase: “titulo”. 
●        Agregar al artículo la clase: “fondoTransparente”. 
●        Agregar a la sección la clase: “fondoCRUD”. 
*/