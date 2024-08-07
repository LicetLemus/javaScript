// evento customizados, personalizados

const hText = document.getElementById("h-text")
console.log(hText)

hText.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    hText.innerText = evento.detail.texto
    hText.style.color = evento.detail.color
} )

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color: color
        }
    } )
    hText.dispatchEvent(evento) // sobre htexto quiero lanzar un evento
}