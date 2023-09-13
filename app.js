
//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");

import { triagemUsuario, listarCategoriasPrompt, validarCategoriaEscolhida, listarPerguntasCategoria } from './funcoes.js';



function telaInicial() {
    let nomeUsuario = "";
    let senhaUsuario = "";
    let usuarioOk = false;

    nomeUsuario = prompt("*** QUIZ SOFTEX *** \n INSIRA SEU NOME:  \n (Pressione 0 para sair)")

    if (nomeUsuario == "0" || nomeUsuario == null) {
        alert("Volte Sempre!")
    } else {

        senhaUsuario = prompt("Insira a sua senha: \n (Pressione 0 para sair)")

        if (senhaUsuario == "0" || senhaUsuario == null) {
            alert("Volte Sempre!")
        } else {

            usuarioOk = triagemUsuario(nomeUsuario, senhaUsuario);
            console.log(usuarioOk)
            //criarNovoUsuario(nomeUsuario);

            if (usuarioOk) {
                telaListaCategorias();
            } else {
                telaInicial();
            }
        }

    }
}


function telaListaCategorias() {
    let categorias = listarCategoriasPrompt(); //Monta o texto mostrado na tela de categorias
    let categoriaEscolhida = parseInt(prompt(categorias)); //Recebendo o valor da tela

    if (validarCategoriaEscolhida(categoriaEscolhida)) {
        listarPerguntasCategoria(categoriaEscolhida - 1) //Envia como parâmetro a posicao da categoria escolhida pelo usuario
    } else {
        alert("Categoria Inválida")
        telaListaCategorias();
    }

}

telaInicial();







