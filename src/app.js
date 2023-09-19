

//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");

import { triagemUsuario } from './controladores/usuarioControlador.js';
import {
    adicionarPontuacao, listarPontuacaoGeral, verificarCampoEmBranco,
    listarCategoriasPrompt, validarCategoriaEscolhida, validarRespostaPergunta
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

//PENDENTE -> Verificar a validação do ESC/CANCELAR
function telaListaCategorias() {
    let textocategorias = listarCategoriasPrompt(); //Monta o texto mostrado na tela de categorias
    let categoriaEscolhida = parseInt(prompt(textocategorias));


    categoriaAtual = validarCategoriaEscolhida(categoriaEscolhida); //PEGO CATEGORIA ATUAL
    if (categoriaAtual) {
        telaListaPerguntas(categoriaAtual)
    } else {
        alert("Opção escolhida inválida. Tente novamente!")
        telaListaCategorias();
    }

}

//PENDENTE ->Verificar a validação do ESC/CANCELAR
function telaListaPerguntas(categoriaAtual) {

    let pontuacaoRecebida = 0;
    const perguntasDaCategoria = categoriaAtual.listarPerguntasCategoria()

    for (let i = 0; i < 5; i++) {
        const perguntaAtual = perguntasDaCategoria[i];

        const respostaUsuario = parseInt(prompt(`Pergunta ${i + 1}: ${perguntaAtual.getPergunta}\n${perguntaAtual.getAlternativa1}\n${perguntaAtual.getAlternativa2}\n${perguntaAtual.getAlternativa3}\n${perguntaAtual.getAlternativa4}`));

        if (validarRespostaPergunta(respostaUsuario)) {
            if (respostaUsuario === perguntaAtual.getOpcaoCorreta) {
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

//PENDENTE - FUNCIONANDO MAS FALTA FAZER O ALERT
function telaListaPontuacaoCategoria() {

    let textoPrompt = categoriaAtual.listarPontuacaoCategoria();
    if (textoPrompt) {
        alert(`Ranking em ${categoriaAtual.getNome}: \n ${textoPrompt}`)
    }

    telaPontuacaoGeral();
}

//PENDENTE - FUNCIONANDO MAS FALTA FAZER O PROMPT.
function telaPontuacaoGeral() {
    let textoPrompt = listarPontuacaoGeral();
    if (textoPrompt) {
        alert("*** RANKING GERAL DO QUIZ SOFTEX *** \n" + textoPrompt)
    }

    telaInicial(); //Teste
}







