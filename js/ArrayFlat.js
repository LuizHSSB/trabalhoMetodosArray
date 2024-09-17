//linha 2 até a linha 15 está somente passando dados para o HTML
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

//variável recebendo um array multidimensional (array com outros arrays dentro de si)
const listaN = [1,[2,[3,[4]]]]; 

//função responsável por reduzir um "nível de profundidade" do array existente, ou seja, está fazendo com que o array que possuia 3 arrays dentro de si próprio, possua apenas 2.
function aglutinar0(){
    let res = listaN.flat(); 
    document.querySelector("#resp").innerHTML = `<b>Resultado: </b>[1,2,[3,[4]]].`;
    console.log(listaN);
    console.log(listaN.flat());
    //output: [1,2,[3,[4]]]
}

//função responsável por reduzir dois "níveis de profundidade" do array existente, ou seja, está fazendo com que o array que possuia 3 arrays dentro de si próprio, possua apenas 1.
function aglutinar1(){
    let resp = listaN.flat(2); 

    //passando o resultado para o HTML e para o console
    document.querySelector("#respo").innerHTML = `<b>Resultado: </b>[1,2,3,[4]].`; 
    console.log(listaN);
    console.log(listaN.flat(2));
    //output: [1,2,[3,[4]]]
}

//função responsável por reduzir três "níveis de profundidade" do array existente, ou seja, está fazendo com que o array que possuia 3 arrays dentro de si próprio, agora não possua mais nenhum array dentro de si.
function aglutinar2(){
    let respo = listaN.flat(3);

    //passando o resultado para o HTML e para o console
    document.querySelector("#respos").innerHTML = `<b>Resultado: </b>[1,2,3,4].`;
    console.log(listaN);
    console.log(listaN.flat(3));
    //output: [1,2,[3,[4]]]
}

//variável recebendo um array multidimensional com espaços vazios
const arrayIndiceVazio = [1, ,[43],[2, , , 3,[4,[5,[6,5,4, ,3,[6,[345]]]]]]];

//função responsável por remover todos os "níveis de pronfundidade" (através do parâmetro Infinity), um benefício do .flat() é também remover os espaços vazios
function aglutinar3(){
    let r = arrayIndiceVazio.flat(Infinity);

    //passando o resultado para o HTML e para o console
    document.querySelector("#respost").innerHTML = `<b>R:</b>[1, 43, 2, 3, 4, 5, 6, 5, 4, 3, 6, 345].`;
    console.log(arrayIndiceVazio);
    console.log(r);
    //output: [1, 43, 2, 3, 4, 5, 6, 5, 4, 3, 6, 345]
}