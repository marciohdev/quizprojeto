
//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");

import rotas from './rotas.js'
import { listarPontuacaoGeral, verificarCampoEmBranco } from './util.js';


//Check
function telaInicial() {
    let nomeUsuario = "";
    let senhaUsuario = "";
    let usuarioCheck = false;

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
                    usuarioCheck = rotas.triagemUsuario(nomeUsuario, senhaUsuario);
                    //criarNovoUsuario(nomeUsuario);

                    if (usuarioCheck) {
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

//Check
function telaListaCategorias() {
    let categorias = rotas.listarCategoriasPrompt(); //Monta o texto mostrado na tela de categorias
    let categoriaEscolhida = parseInt(prompt(categorias)); //Recebendo o valor da tela

    if (rotas.validarCategoriaEscolhida(categoriaEscolhida)) {
        telaListaPerguntas(categoriaEscolhida) //Envia como parâmetro a posicao da categoria escolhida pelo usuario
    } else {
        alert("Categoria Inválida")
        telaListaCategorias();
    }

}

//Check
function telaListaPerguntas(categoriaEscolhida) {

    rotas.listarPerguntasCategoria(categoriaEscolhida - 1)
    telaPontuacaoGeral();
}

//Pendente
// function telaPontuacaoCategoria() {
//     rotas.listarPontuacaoCategoria();
// }

//Check
function telaPontuacaoGeral() {
    let textoPrompt = listarPontuacaoGeral();
    console.log("*** RANKING GERAL DO QUIZ SOFTEX *** \n" + textoPrompt)
}


//telaPontuacaoGeral();


telaInicial();







