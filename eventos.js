//Eventos exercicio

let button = document.querySelector("button").onclick = (e) => {
    
    let element = document.querySelector("h1")

    if(element.style.backgroundColor == ""){

        element.style.backgroundColor = "yellow"
        e.target.textContent = "Fundo default"

    }else{

        element.style.backgroundColor = ""
        e.target.textContent = "Fundo amarelo"
    }
}

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//MOUSE EVENTS

document.querySelector("div").addEventListener('click', () => {console.log("click")}) //identifica o click finalizado

document.querySelector("div").addEventListener('mousedown', () => {console.log("mouse down")}) //identifica o click que n foi finalizado (quando está sendo clickado)

document.querySelector("div").addEventListener('mouseup', () => {console.log("mouse up")}) //identifica quando o mouse finaliza (sobe o click)

document.querySelector("div").addEventListener("mouseenter", () => {console.log("mouse enter")}) //identifica quando o cursor entra na área

document.querySelector("div").addEventListener("mouseleave", () => {console.log("mouse leave")}) //identifica quando o cursor sai da área

document.querySelector("div").addEventListener("mousemove", () => {console.log("mouse move")}) //identifica todo o movimento do cursor dentro da área

document.querySelector("div").addEventListener("dblclick", () => {console.log("double click")}) //identifica o click duplo

document.querySelector("div").addEventListener("contextmenu", () => {console.log("menu de contexto")}) //identifica o click direito do mouse