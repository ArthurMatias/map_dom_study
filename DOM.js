//esse JS puxa IDs E class do HTML

//ATRIBUTOS

let element = document.querySelector('h3');

//hasAttribute
if(element.hasAttribute('id')){ //hasAtribute pergunta se no elemente existe determinado atributo
    
    console.log('SIM'); //aqui se o element tiver id vai printar "SIM" no console
}

//getAttribute
console.log(element.getAttribute('id')); //print no console o nome do id

//setAttribute

console.log(element.setAttribute('title','nome do titulo')); //cria-se um pop-up informando oque é cada elemento 

//removeAttribute

let image = document.querySelector('img');
image.removeAttribute('src'); //remove oque foi selecionado

/*-------------------------------------------------------------------------------------------------------------------------------*/

if(true){ //criar e apagar elemento

    let k = true
    let element_created    //criou-se variaveis que pegam em todo o if
    let new_element

    function execute(){ //chamada no onclick do botão no html para ser executada 

        if(k){

            //CRIAR ELEMENTOS
            new_element = document.createElement('p');
    
            new_element.className = "alerta"; //nome do elemento
            new_element.innerText = "oque eu quero que apareça"; //oque vai aparecer no elemento no caso um p identificado com innertext
    
            //ADD O ELEMENTO CRIADO
            element_created = document.querySelector('.box');
            element_created.appendChild(new_element);

            k = false;

            console.log(k)
        }else{

            element_created.removeChild(new_element); // remove o elemento

            k = true;
        }

    
    }

}





