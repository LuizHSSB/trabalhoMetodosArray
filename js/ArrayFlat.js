const listaN = [1,[2,[3,[4]]]]; //listaN é um array com vários arrays dentro - basicamente temos os valores [1,2,3,4]

document.querySelector("#ex1").innerHTML = `<b>Conteúdo do Array multidimensional a ser aglutinado:</b> [1,[2,[3,[4]]]].`;
document.querySelector("#exe1").innerHTML = `<b>Conteúdo do Array multidimensional a ser aglutinado:</b> [1,[2,[3,[4]]]].`;
document.querySelector("#exem1").innerHTML = `<b>Conteúdo do Array multidimensional a ser aglutinado:</b> [1,[2,[3,[4]]]].`;
document.querySelector("#exemp1").innerHTML = `<b>Conteúdo do Array multidimen:</b> [1, ,[43],[2, , , 3,[4,[5,[6,5,4, ,3,[6,[345]]]]]]].`;

document.querySelector("#ex2").innerHTML = `<b>Método: array.flat() "padrão(1)"</b>`;
document.querySelector("#exe2").innerHTML = `<b>Método: array.flat(2)</b>`;
document.querySelector("#exem2").innerHTML = `<b>Método: array.flat(3)</b>`;
document.querySelector("#exemp2").innerHTML = `<b>Método: array.flat(Infinity)</b>`;

document.querySelector("#resp").innerHTML = `<b>Resultado: </b>`;
document.querySelector("#respo").innerHTML = `<b>Resultado: </b>`;
document.querySelector("#respos").innerHTML = `<b>Resultado: </b>`;
document.querySelector("#respost").innerHTML = `<b>Resultado: </b>`;

function aglutinar0(){

    let res = listaN.flat(); 
    document.querySelector("#resp").innerHTML = `<b>Resultado: </b>[1,2,[3,[4]]].`;
    console.log(listaN);
    console.log(listaN.flat());
    //output: [1,2,[3,[4]]]
}
function aglutinar1(){

    let resp = listaN.flat(2); 
    document.querySelector("#respo").innerHTML = `<b>Resultado: </b>[1,2,3,[4]].`;
    console.log(listaN);
    console.log(listaN.flat(2));
    //output: [1,2,[3,[4]]]
}
function aglutinar2(){

    let respo = listaN.flat(3); 
    document.querySelector("#respos").innerHTML = `<b>Resultado: </b>[1,2,3,4].`;
    console.log(listaN);
    console.log(listaN.flat(3));
    //output: [1,2,[3,[4]]]
}

const arrayIndiceVazio = [1, ,[43],[2, , , 3,[4,[5,[6,5,4, ,3,[6,[345]]]]]]];

function aglutinar3(){

    let r = arrayIndiceVazio.flat(Infinity); 
    document.querySelector("#respost").innerHTML = `<b>R:</b>[1, 43, 2, 3, 4, 5, 6, 5, 4, 3, 6, 345].`;
    console.log(arrayIndiceVazio);
    console.log(r);
    //output: [1,2,[3,[4]]]
}

    listaN.flat(Infinity); //output: [1,2,3,4] - Infinity faz com que o array seja totalmente aglutinado, independente da profundidade de arrays que tenhamos