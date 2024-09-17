//array recebendo os seis primeiros meses do ano
const firstM = [" Janeiro"," Fevereiro"," Março"," Abril"," Maio"," Junho"];

//array recebendo os seis últimos meses do ano
const secondM = [" Julho"," Agosto"," Setembro"," Outubro"," Novembro"," Dezembro"];

//selecionando ID's e inserindo elementos HTML dentro deles
document.querySelector("#firstMon").innerHTML = `<b>Primeiros seis meses do ano:</b> ${firstM}.`;
document.querySelector("#secondMon").innerHTML = `<b>Últimos seis meses do ano:</b> ${secondM}.`;
document.querySelector("#fullYear").innerHTML = `<b>Ano completo: </b>`;

//função responsável por utilizar o método .contat() --> concatenando os arrays "firstM" e "secondM" e transformando-os em um novo array chamado de "year"
function concatenarAno(){
    const year = firstM.concat(secondM);
    //adicionando o novo array no HTML
    document.querySelector("#fullYear").innerHTML = `<b>Ano completo:</b>${year}.`;
}

//array recebendo as matérias do primeiro semestre de ADS
const materiasPrimeiroSemestre =  [" Introdução a Computação"," Lógica de programação"," Matemática Computacional"," Padrões Web"," Laboratório de Inovação I"," Comunicação Empresarial"];

//array recebendo as matérias do segundo semestre de ADS
const materiasSegundoSemestre = [" Fundamentos de Banco de Dados"," Engenharia de Software"," Linguagem Técnica de Programação"," Laboratório de Inovação II"," Linguagem de Programação para Web I"," Ética Profissional", " Fundamentos da Computação em Nuvem"];

//array recebendo as matérias do terceiro semestre de ADS
const materiasTerceiroSemestre = [" Linguagem de Banco de Dados"," Linguagem de Programação para Web II"," Linguagem de Programação Orientada a Objetos I"," Gestão de Projetos"," Laboratório de Inovação III"," Infraestrutura de Redes"," Sistemas Operacionais"];

//array recebendo as matérias do quarto semestre de ADS
const materiasQuartoSemestre = [" Linguagem de Programação Orientada a Objetos II"," Linguagem de Programação para Mobile"," Segurança da Informação"," Laboratório de Inovação IV"," Testes, Métrica e Qualidade de Software", " Governança de TI"];

//selecionando ID's e inserindo elementos HTML dentro deles
document.querySelector("#primSem").innerHTML = ` <b>Matérias do Primeiro Semestre:</b> ${materiasPrimeiroSemestre}`;
document.querySelector("#segSem").innerHTML = ` <b>Matérias do Segundo Semestre:</b> ${materiasSegundoSemestre}`;
document.querySelector("#terSem").innerHTML = ` <b>Matérias do Terceiro Semestre:</b> ${materiasTerceiroSemestre}`;
document.querySelector("#quarSem").innerHTML = ` <b>Matérias do Quarto Semestre:</b> ${materiasQuartoSemestre}`;
document.querySelector("#cursoCompleto").innerHTML = `<b>Curso Completo: </b>`;

//funcão responsável por concatenar todas matérias dos quatro semestres do curso de ADS
function concatenarMaterias(){
    const graduacao = materiasPrimeiroSemestre.concat(materiasSegundoSemestre,materiasTerceiroSemestre,materiasQuartoSemestre);
    ////adicionando o novo array no HTML
    document.querySelector("#cursoCompleto").innerHTML = `<b>Curso Completo: </b> ${graduacao}.`;
}