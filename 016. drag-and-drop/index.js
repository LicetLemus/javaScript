// para darle comportamiento a los arrastres 

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

// trabajar con eventos: situaciones que se dan como un click - parrafos

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event=>{
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging") // agregue una nueva clase
        event.dataTransfer.setData("id", parrafo.id)
        // utilizar una imagen fantasma
        const elemento_fantasma = document.querySelector(".imagen_fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", ()=>{
        // console.log("He terminado el arrastre")
        parrafo.classList.remove("dragging")
    })

})

////////// secciones 

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        // quiero que cambie el logo de + que aparece al arrastrar
        event.dataTransfer.dropEffect = "copy"
        // console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id") // transferiir informacion
        // console.log("parrafo id: ", id_parrafo)
        // arrastrar a otro lugar
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        
    })


})

