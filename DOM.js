//esse JS puxa IDs E class do HTML

//ATRIBUTOS

let element = document.querySelector('h3')

//hasAttribute
if(element.hasAttribute('id')){ //hasAtribute pergunta se no elemente existe determinado atributo
    
    console.log('SIM') //aqui se o element tiver id vai printar "SIM" no console
}

//getAttribute
console.log(element.getAttribute('id')) //print no console o nome do id

//setAttribute
console.log(element.setAttribute('title','nome do titulo')) //cria-se um pop-up informando oque é cada elemento 

//removeAttribute
let image = document.querySelector('img')
image.removeAttribute('src') //remove oque foi selecionado

/*-------------------------------------------------------------------------------------------------------------------------------*/

if(true){ //criar e apagar elemento

    let k = true
    let element_created    //criou-se variaveis que pegam em todo o if
    let new_element

    function execute(){ //chamada no onclick do botão no html para ser executada 

        if(k == true){

            //CRIAR ELEMENTOS
            new_element = document.createElement('p')
    
            new_element.className = "alerta"; //nome do elemento
            new_element.innerText = "oque eu quero que apareça" //oque vai aparecer no elemento no caso um p identificado com innertext
    
            //ADD O ELEMENTO CRIADO
            element_created = document.querySelector('.box')
            element_created.appendChild(new_element)

            k = false;

            console.log(k)
        }else{

            element_created.removeChild(new_element) // remove o elemento

            k = true;
        }
    }
/*-------------------------------------------------------------------------------------------------------------------------------*/

//MÉTODOS PARA ADICIONAR ELEMENTOS

//before para adicionar texto ou elementos antes da div selecionada
//prepend para adicionar texto ou elementos no inicio da div selelcionada
//append para adiconar texto ou elementos no final da div selecionada
//after para adicionar texto ou elementos depois da div selecionada

//CLONE
let div = document.querySelector('#container').cloneNode(true) //clona a div selecionada, mas somente com true clona com os os elementos html
document.querySelector('#container').after(div)

//REMOVER ELEMENTOS
document.querySelector('#container').remove() //remove oque foi selecionados

//ALTERAR ESTILOS COM STYLE
let p = document.querySelector('p')
p.style.borderWidth = '2px' //variavavel.style.propriedade = modificação
p.style.cssText = 'background-color: blue; color: white' //variavavel.style.propriedade = modificação

/*-------------------------------------------------------------------------------------------------------------------------------*/
}