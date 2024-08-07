const form = document.getElementById("formulario")

console.log(form)

// si quiero que no se ejecute el comportamiento por defecto onsubmit, entonces

form.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()
} )


