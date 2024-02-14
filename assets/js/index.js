precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const total = document.querySelector (".valor-total")
const cantidad = document.querySelector (".cantidad")
const suma = document.querySelector (".suma")
const resta = document.querySelector (".resta")

suma.addEventListener ("click", () => {
    cantidad.innerHTML = Number (cantidad.innerHTML) + 1
    total.innerHTML = precio * Number (cantidad.innerHTML)
})

resta.addEventListener ("click", () => {
    if (Number (cantidad.innerHTML) !== 0) {
        cantidad.innerHTML = Number (cantidad.innerHTML) - 1
        total.innerHTML = precio * Number (cantidad.innerHTML)
    }
})