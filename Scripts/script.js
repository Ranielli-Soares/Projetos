
function instrucoes() {
    let i = document.getElementById("inst");
    i.style.display = "inline-block";

}
function ocultaInstrucoes() {
    let i = document.getElementById("inst");
    i.style.display = "none";
}

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");

let resultado = document.getElementById("resultado");


function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputHoras.value;

    console.log(adultos);
    console.log(criancas);

    let qtdCarneTotal = carnePP(duracao) * adultos + ((carnePP(duracao) / 2) * criancas);
    let qtdCervejaTotal = cervejaPP(duracao) * adultos;
    let qtdBebidaTotal = bebidaPP(duracao) * adultos + ((bebidaPP(duracao) / 2) * criancas);

    resultado.innerHTML = `<p>${qtdCarneTotal / 1000} Kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCervejaTotal / 330)} latas de cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdBebidaTotal/ 2000)} pets de 2 litros de bebidas.</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}