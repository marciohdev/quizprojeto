

//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");

import { triagemUsuario } from './controladores/usuarioControlador.js';
import {
    adicionarPontuacao, listarPontuacaoGeral, verificarCampoEmBranco,
    listarCategoriasPrompt, validarCategoriaEscolhida
} from './util/util.js';

var usuarioAtual;
var categoriaAtual;

//AQUI O PROGRAMA INICIA
telaInicial();


//Check
function telaInicial() {
    let nomeUsuario = "";
    let senhaUsuario = "";

    nomeUsuario = prompt("*** QUIZ SOFTEX *** \n INSIRA SEU NOME:  \n (Pressione 0 para sair)")

    if (nomeUsuario == "0" || nomeUsuario == null) {
        alert("Volte Sempre!")
    } else {
        if (!verificarCampoEmBranco(nomeUsuario)) {

            senhaUsuario = prompt("Insira a sua senha: \n (Pressione 0 para sair)")

            if (senhaUsuario == "0" || senhaUsuario == null) {
                alert("Volte Sempre!")
            } else {
                if (!verificarCampoEmBranco(senhaUsuario)) {
                    usuarioAtual = triagemUsuario(nomeUsuario, senhaUsuario); //PEGO USUARIO ATUAL

                    if (usuarioAtual) {
                        telaListaCategorias();
                    } else {
                        telaInicial();
                    }
                } else {
                    telaInicial();
                }

            }
        } else {
            telaInicial();
        }
    }
}

//Check ->Sendo chamada pela tela inicial caso o usuário consiga logar.
function telaListaCategorias() {
    let textocategorias = listarCategoriasPrompt(); //Monta o texto mostrado na tela de categorias
    let categoriaEscolhida = parseInt(prompt(textocategorias));


    categoriaAtual = validarCategoriaEscolhida(categoriaEscolhida); //PEGO CATEGORIA ATUAL
    if (categoriaAtual) {
        telaListaPerguntas(categoriaAtual)
    } else {
        alert("Categoria Inválida")
        telaListaCategorias();
    }

}

//Check ->Lista de Perguntas e resolução de questões.
function telaListaPerguntas(categoriaAtual) {

    let pontuacaoRecebida = 0;
    const perguntasDaCategoria = categoriaAtual.listarPerguntasCategoria()


    for (let i = 0; i < perguntasDaCategoria.length; i++) {
        const perguntaAtual = perguntasDaCategoria[i];

        const respostaUsuario = parseInt(prompt(`Pergunta ${i + 1}: ${perguntaAtual.getPergunta}\n${perguntaAtual.getAlternativa1}\n${perguntaAtual.getAlternativa2}\n${perguntaAtual.getAlternativa3}\n${perguntaAtual.getAlternativa4}`));

        //FALTA VALIDAÇÃO DA RESPOSTA AQUI.
        console.log(perguntaAtual.getOpcaoCorreta)

        if (respostaUsuario === perguntaAtual.getOpcaoCorreta) {
            pontuacaoRecebida++;
            alert("Resposta correta!");
        } else {
            alert("Resposta incorreta. A resposta correta é: " + perguntaAtual.getOpcaoCorreta);
        }
    }

    adicionarPontuacao(pontuacaoRecebida, usuarioAtual, categoriaAtual);

    telaListaPontuacaoCategoria();
}

//PENDENTE - FUNCIONANDO MAS FALTA FAZER O ALERT
function telaListaPontuacaoCategoria() {

    let textoPrompt = categoriaAtual.listarPontuacaoCategoria();
    console.log(textoPrompt)
    telaPontuacaoGeral();
}

//PENDENTE - FUNCIONANDO MAS FALTA FAZER O PROMPT.
function telaPontuacaoGeral() {
    let textoPrompt = listarPontuacaoGeral();
    console.log("*** RANKING GERAL DO QUIZ SOFTEX *** \n" + textoPrompt)
    telaInicial(); //Teste
}







