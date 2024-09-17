//copyWithing(Número a ser substituido (alvo), inicio da leitura de substituição, pausa da leitura)

//primeiro card

//variável recebendo um array com 10 números
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//elementos HTML sendo inseridos no corpo do HTML atráves de ID's
document.querySelector("#firstL").innerHTML = `<b>Lista original:</b> ${listaNumeros}`;
document.querySelector("#secondL").innerHTML = `<b>Método: array.copyWithin(0,4,7) </b>`;
document.querySelector("#resultL").innerHTML = `<b>Lista após a utilização do método: </b>`;

//função responsável por modificar a ordem da lista, fazendo com que os valores nos índices 0, 1 e 2 sejam alterados pelos valores dos índices 4, 5 e 6
function modLista(){
    let resultado = listaNumeros.copyWithin(0,4,7);

    //passando o resultado pro HTML
    document.querySelector("#resultL").innerHTML = `<b>Lista após a utilização do método: </b> ${resultado}.`;
    //output = [5,6,7,4,5,6,7,8,9,10]
}

//função responsável por limpar o resultado
function modLista2(){
    document.querySelector("#resultL").innerHTML = `<b>Lista após a utilização do método: </b>`;
}

//segundo card

//variável recebendo um array com vários nomes
const listaNomes = ["João", " Pedro", " Maria", " Arthur", " Bianca", " Gabriela", " José", " Patricia"];

//elementos HTML sendo inseridos no corpo do HTML atráves de ID's
document.querySelector("#firstLis").innerHTML = `<b>Lista original: </b> ${listaNomes}`;
document.querySelector("#secondLis").innerHTML = `<b>Método: array.copyWithin(0,2,4) </b>`;
document.querySelector("#resultLis").innerHTML = `<b>Lista após a utilização do método: </b>`;

//função responsável por modificar a ordem da lista, fazendo com que os valores nos índices 1 e 2 sejam alterados pelos valores dos índices 2 e 3
function modifLista(){
    let resultad2 = listaNomes.copyWithin(1,2,4);

    //passando o resultado pro HTML
    document.querySelector("#resultLis").innerHTML = `<b>Lista após a utilização do método: </b> ${resultad2}.`;  
    //output = João, Maria, Arthur, Arthur, Bianca, Gabriela, José, Patricia
}

//função responsável por limpar o resultado
function modifLista2(){
    document.querySelector("#resultLis").innerHTML = `<b>Lista após a utilização do método: </b>`;
}

//terceiro card

//variável recebendo um array com 10 números
const listaNumeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//elementos HTML sendo inseridos no corpo do HTML atráves de ID's
document.querySelector("#firstList").innerHTML = `<b>Lista original: </b> ${listaNumeros2}`;
document.querySelector("#secondList").innerHTML = `<b>Método: array.copyWithin(3,6) </b>`;
document.querySelector("#resultList").innerHTML = `<b>Lista após a utilização do método: </b>`;

//função responsável por modificar a ordem da lista, fazendo com que os valores nos índices 3, 4, 5 e 6 sejam alterados pelos valores dos índices 6, 7, 8 e 9 
function modList(){

    //se removermos o último argumento a contagem vai até o último índice
    let resultado2 = listaNumeros2.copyWithin(3,6);

    //passando o resultado pro HTML
    document.querySelector("#resultList").innerHTML = `<b>Lista após a utilização do método: </b> ${resultado2}`;
    //output = [10, 20, 30, 70, 80, 90, 100, 80, 90, 100]
}

//função responsável por limpar o resultado
function modList2(){
document.querySelector("#resultList").innerHTML = `<b>Lista após a utilização do método: </b>`;
}