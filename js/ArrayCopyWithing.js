//copyWithing(Número a ser substituido (alvo), inicio da leitura de substituição, pausa da leitura)

//primeiro card

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.querySelector("#firstL").innerHTML = `<b>Lista original:</b> ${listaNumeros}`;
document.querySelector("#secondL").innerHTML = `<b>Método: array.copyWithin(0,4,7) </b>`;
document.querySelector("#resultL").innerHTML = `<b>Lista após a utilização do método: </b>`;

function modLista(){
    let resultado = listaNumeros.copyWithin(0,4,7);
    document.querySelector("#resultL").innerHTML = `<b>Lista após a utilização do método: </b> ${resultado}.`;
    //output = [5,6,7,4,5,6,7,8,9,10]
}

function modLista2(){
    document.querySelector("#resultL").innerHTML = `<b>Lista após a utilização do método: </b>`;
}

//segundo card

const listaNomes = ["João", " Pedro", " Maria", " Arthur", " Bianca", " Gabriela", " José", " Patricia"];

document.querySelector("#firstLis").innerHTML = `<b>Lista original: </b> ${listaNomes}`;
document.querySelector("#secondLis").innerHTML = `<b>Método: array.copyWithin(0,2,4) </b>`;
document.querySelector("#resultLis").innerHTML = `<b>Lista após a utilização do método: </b>`;

function modifLista(){
    let resultad2 = listaNomes.copyWithin(1,2,4);
    document.querySelector("#resultLis").innerHTML = `<b>Lista após a utilização do método: </b> ${resultad2}.`;  
    //output = João, Maria, Arthur, Arthur, Bianca, Gabriela, José, Patricia
}

function modifLista2(){
    document.querySelector("#resultLis").innerHTML = `<b>Lista após a utilização do método: </b>`;
}

//terceiro card

//se removermos o último argumento a contagem vai até o último índice
const listaNumeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

document.querySelector("#firstList").innerHTML = `<b>Lista original: </b> ${listaNumeros2}`;
document.querySelector("#secondList").innerHTML = `<b>Método: array.copyWithin(3,6) </b>`;
document.querySelector("#resultList").innerHTML = `<b>Lista após a utilização do método: </b>`;


function modList(){

    let resultado2 = listaNumeros2.copyWithin(3,6);

    document.querySelector("#resultList").innerHTML = `<b>Lista após a utilização do método: </b> ${resultado2}`;

    //output = [10, 20, 30, 70, 80, 90, 100, 80, 90, 100]
}

function modList2(){

document.querySelector("#resultList").innerHTML = `<b>Lista após a utilização do método: </b>`;

}