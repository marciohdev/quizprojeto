const pergunta = document.querySelector(".pergunta")
const respostas = document.querySelector(".respostas")
const spnQtd = document.querySelector(".spnQtd")
const textoFinal = document.querySelector(".chegada span")
const conteudo = document.querySelector(".conteudo")
const conteudoFinal = document.querySelector(".chegada")
const btnRestart = document.querySelector(".chegada button")
const btnStart = document.querySelector(".inicioQuiz")
const btnAddPergunta = document.querySelector(".addPergunta")
const inputPergunta = document.querySelector(".novaPergunta")

import perguntas from "./perguntas.js"

let index = 0
let respostasCorretas = 0

btnRestart.onclick = () => {
    conteudo.style.display = "flex"
    conteudoFinal.style.display = "none"
    index = 0
    respostasCorretas = 0
    carregarPergunta()
}

function passarParaProximaPergunta(r) {
    if (r.target.getAttribute("resposta-correta") === "true") {
        respostasCorretas++;
    }

    if (index < perguntas.length - 1) {
        index++;
        carregarPergunta();
    } else {
        encerrar();
    }
}

function iniciarQuiz() {
    btnStart.onclick = () => {
        btnStart.style.display = "none"
        btnAddPergunta.style.display = "none"
        carregarPergunta()
    }

    addPergunta()

}

function addPergunta() {
    btnAddPergunta.onclick = () => {
        btnStart.style.display = "none"
        btnAddPergunta.style.display = "none"
        inputPergunta.style.display = "flex"
    }


}

function carregarPergunta() {
    spnQtd.innerHTML = `${index + 1}/${perguntas.length}`
    const item = perguntas[index]
    respostas.innerHTML = "";
    pergunta.innerHTML = item.pergunta

    item.respostas.forEach(resposta => {
        const div = document.createElement("div")

        div.innerHTML = `
        <button class="resposta" resposta-correta="${resposta.correta}">
            ${resposta.opcao}
        </button>`

        respostas.appendChild(div)
    })

    document.querySelectorAll(".resposta").forEach((item) => {
        item.addEventListener("click", passarParaProximaPergunta)
    })
}

function encerrar() {
    textoFinal.innerHTML = `você acertou ${respostasCorretas} de ${perguntas.length}`
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
}

iniciarQuiz()
