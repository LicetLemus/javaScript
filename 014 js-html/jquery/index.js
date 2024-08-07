// jQuery: libreria e manipulacion del DOM (lo que vemos en pantalla)

// $("selector").accion()
// $("h1").hide() - hide ocultar 

// mejor usar document, significa que se ejecute una vez se cargue todo el documento

/*
$(document).ready(() =>  {
}) 
*/

// forma simplificada
$(() => {
    // selectores
    // id="el-1" -> "#el-1"
    // $("#el-1").hide()

    $(".btn-1").click(() => {
        console.log("Ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    }) 

    $(".btn-2").click(() => {
        //$("h1").show()
        $("h1").fadeIn()
    }) 

    $("#el-1").click(() => {
        $("h1").css({ color: "red"})
    } )

    $("#el-2").dblclick(() => {
        $("h1").css({ color: "blue"})
    } )

    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li>")
        $("ul").prepend("<li>New Element</li>")
    } )

    $("li").mouseenter((elem) => {
        elem.target.style.color = "yellow"
    } )

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    } )

})