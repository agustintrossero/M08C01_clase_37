
let main = document.querySelector("main")
let h2 = document.querySelector("h2")
let as = document.querySelectorAll("a")
let p = document.querySelectorAll("p")
let body = document.querySelector("body")

let nombre = prompt("Ingrese su nombre")
if (nombre){ h2.innerHTML += " " + nombre}
else { h2.innerHTML += " Invitado"}

h2.style.textTransform = "uppercase"

for (let a of as){
    a.style.color = "#E51B3E"
}

let userConfirm = confirm("¿Desea colocar un fondo de pantalla?")
if (userConfirm){
    body.classList.add("fondo")
}

for (let i = 0 ; i< p.length; i++){
    if (i % 2 == 0){
        p[i].classList.add("destacadoPar")
    } else {
        p[i].classList.add("destacadoImpar")
    }
}

main.style.display = "block"

console.log(userConfirm)
console.log(nombre)
console.log(main)

