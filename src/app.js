

//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");

import { triagemUsuario } from './controladores/usuarioControlador.js';
import {
    adicionarPontuacao, listarPontuacaoGeral,
    listarCategoriasPrompt, encontrarCategoria, validarRespostaPergunta, validarOpcaoFinal, verificarCampoEmBrancoString
} from './util/util.js';

var usuarioAtual;
var categoriaAtual;

//AQUI O PROGRAMA INICIA
telaInicial();

//Check.
function telaInicial() {
    let nomeUsuario = "";
    let senhaUsuario = "";

    nomeUsuario = prompt("*** QUIZ SOFTEX *** \n INSIRA SEU NOME:  \n")

    if (nomeUsuario == null) { //cancelar ou esc
        alert("Volte Sempre!")
        return;
    }

    if (verificarCampoEmBrancoString(nomeUsuario)) {
        telaInicial();
    }

    do {
        senhaUsuario = prompt("Insira a sua senha:")

        if (senhaUsuario == null) {
            alert("Volte Sempre!")
            return;
        }
    } while (verificarCampoEmBrancoString(senhaUsuario))

    usuarioAtual = triagemUsuario(nomeUsuario, senhaUsuario); //PEGO USUARIO ATUAL

    if (usuarioAtual) {
        telaListaCategorias();
    } else {
        telaInicial();
    }
}

//Check.
function telaListaCategorias() {
    let textocategorias = listarCategoriasPrompt(); //Monta o texto mostrado na tela de categorias

    let categoriaEscolhida = prompt(textocategorias);

    if (categoriaEscolhida == null) { //cancelar ou esc
        alert("Volte Sempre!")
        return;
    }

    if (verificarCampoEmBrancoString(categoriaEscolhida)) {
        telaListaCategorias();
    }

    categoriaAtual = encontrarCategoria(parseInt(categoriaEscolhida)); //PEGO CATEGORIA ATUAL

    if (categoriaAtual) {
        telaListaPerguntas(categoriaAtual)
    } else {
        alert("Opção escolhida inválida. Tente novamente!")
        telaListaCategorias();
    }
}

//Check -> OLHAR DEPOIS
function telaListaPerguntas(categoriaAtual) {

    let pontuacaoRecebida = 0;

    const perguntasDaCategoria = categoriaAtual.listarPerguntasCategoria()

    for (let i = 0; i < 5; i++) {
        const perguntaAtual = perguntasDaCategoria[i];

        const respostaUsuario = prompt(`Pergunta ${i + 1}: ${perguntaAtual.getPergunta}\n${perguntaAtual.getAlternativa1}\n${perguntaAtual.getAlternativa2}\n${perguntaAtual.getAlternativa3}\n${perguntaAtual.getAlternativa4}`);

        if (respostaUsuario == null) { //cancelar ou esc
            alert("Volte Sempre!")
            return;
        }

        if (verificarCampoEmBrancoString(respostaUsuario)) {
            i--;
            continue;
        }

        if (validarRespostaPergunta(parseInt(respostaUsuario))) {
            if (respostaUsuario == perguntaAtual.getOpcaoCorreta) {
                pontuacaoRecebida++;
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta!");
            }
        } else {
            alert("Opção escolhida inválida. Tente novamente!")
            i--; //Se não validado, fica na mesma pergunta.
        }
    }

    if (pontuacaoRecebida > 0) {
        alert(`Parabéns, você conseguiu ${pontuacaoRecebida} PTS`)
        adicionarPontuacao(pontuacaoRecebida, usuarioAtual, categoriaAtual);
    } else {
        alert('Estude mais, hoje você não conseguiu pontuar!')
    }

    telaListaPontuacaoCategoria();
}

//Check.
function telaListaPontuacaoCategoria() {

    let textoRanking = categoriaAtual.listarPontuacaoCategoria();
    if (textoRanking) {
        alert(`Ranking em ${categoriaAtual.getNome}: \n ${textoRanking}`)
    }

    telaPontuacaoGeral();
}

//Check.
function telaPontuacaoGeral() {
    let textoRanking = listarPontuacaoGeral();

    let opcao = prompt(`*** RANKING GERAL DO QUIZ SOFTEX *** \n ${textoRanking} \n 1 - Jogar Novamente \n 2 - LogOut`)

    if (!verificarCampoEmBrancoString(opcao) && validarOpcaoFinal(parseInt(opcao))) {

        switch (opcao) {
            case "1":
                telaListaCategorias();
                break;
            case "2":
                telaInicial();
                break;
        }

    } else {
        telaPontuacaoGeral();
    }
}








