const firstM = [" Janeiro"," Fevereiro"," Março"," Abril"," Maio"," Junho"];
const secondM = [" Julho"," Agosto"," Setembro"," Outubro"," Novembro"," Dezembro"];

document.querySelector("#firstMon").innerHTML = `<b>Primeiros seis meses do ano:</b> ${firstM}.`;
document.querySelector("#secondMon").innerHTML = `<b>Últimos seis meses do ano:</b> ${secondM}.`;
document.querySelector("#fullYear").innerHTML = `<b>Ano completo: </b>`;

function concatenarAno(){
    const year = firstM.concat(secondM);
    document.querySelector("#fullYear").innerHTML = `<b>Ano completo:</b>${year}.`;
};

const materiasPrimeiroSemestre =  [" Introdução a Computação"," Lógica de programação"," Matemática Computacional"," Padrões Web"," Laboratório de Inovação I"," Comunicação Empresarial"];
const materiasSegundoSemestre = [" Fundamentos de Banco de Dados"," Engenharia de Software"," Linguagem Técnica de Programação"," Laboratório de Inovação II"," Linguagem de Programação para Web I"," Ética Profissional", " Fundamentos da Computação em Nuvem"];
const materiasTerceiroSemestre = [" Linguagem de Banco de Dados"," Linguagem de Programação para Web II"," Linguagem de Programação Orientada a Objetos I"," Gestão de Projetos"," Laboratório de Inovação III"," Infraestrutura de Redes"," Sistemas Operacionais"];
const materiasQuartoSemestre = [" Linguagem de Programação Orientada a Objetos II"," Linguagem de Programação para Mobile"," Segurança da Informação"," Laboratório de Inovação IV"," Testes, Métrica e Qualidade de Software", " Governança de TI"];

document.querySelector("#primSem").innerHTML = ` <b>Matérias do Primeiro Semestre:</b> ${materiasPrimeiroSemestre}`;
document.querySelector("#segSem").innerHTML = ` <b>Matérias do Segundo Semestre:</b> ${materiasSegundoSemestre}`;
document.querySelector("#terSem").innerHTML = ` <b>Matérias do Terceiro Semestre:</b> ${materiasTerceiroSemestre}`;
document.querySelector("#quarSem").innerHTML = ` <b>Matérias do Quarto Semestre:</b> ${materiasQuartoSemestre}`;
document.querySelector("#cursoCompleto").innerHTML = `<b>Curso Completo: </b>`;

function concatenarMaterias(){
    const graduacao = materiasPrimeiroSemestre.concat(materiasSegundoSemestre,materiasTerceiroSemestre,materiasQuartoSemestre);
    document.querySelector("#cursoCompleto").innerHTML = `<b>Curso Completo: </b> ${graduacao}.`;
};