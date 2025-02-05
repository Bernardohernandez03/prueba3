const btnAgregar = document.getElementById("agregar");
const btnSuma = document.getElementById("sumatoria");
const lista = document.getElementById("lista");

function agregar() {
    const inputValue = document.getElementById("inputNumero").value;
    const listaUL = document.getElementById("lista")
    const elementoLista = document.createElement("li")
    elementoLista.innerText = "El numero es " + inputValue
    listaUL.appendChild(elementoLista)

    suma += Number(inputValue)
//prueba
}
function suma() {
    
}
    btnAgregar.addEventListener("click", agregar)
    btnSuma.addEventListener("click", suma)
