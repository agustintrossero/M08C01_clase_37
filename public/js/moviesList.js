
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


