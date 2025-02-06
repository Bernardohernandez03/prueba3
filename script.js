const btnAgregar = document.getElementById("agregar");
const btnSuma = document.getElementById("sumatoria");
const lista = document.getElementById("lista");
let suma = 0;
function agregar() {
    const inputValue = document.getElementById("inputNumero").value;
    const listaUL = document.getElementById("lista")
    const elementoLista = document.createElement("li")
    elementoLista.innerText = "El numero es " + inputValue
    listaUL.appendChild(elementoLista)

    //suma += Number(inputValue)
//prueba
}
function sumar() {
    const titulo = document.getElementById("titulo");
    titulo.innerText = "La suma es: " + suma;
}
    btnAgregar.addEventListener("click", agregar)
    btnSuma.addEventListener("click", sumar)
