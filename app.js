
//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");
import { criarNovoUsuario, listarCategorias, validarCategoriaEscolhida } from './funcoes.js';
import { Pergunta, Categoria, Usuario, Adm } from './entidades.js';


function telaInicial() {
    let nomeUsuario = "";
    let cadastrouCliente = false;

    do {
        nomeUsuario = prompt("Insira seu nome:  (Pressione 0 para sair)")

        if (nomeUsuario != 0) {
            cadastrouCliente = criarNovoUsuario(nomeUsuario);
        }

    } while ((nomeUsuario != "0" && !cadastrouCliente && nomeUsuario != null))
}

function telaListarCategorias() {
    let categorias = listarCategorias(); //Montando o texto do prompt
    let categoriaEscolhida = parseInt(prompt(categorias)); //Recebendo o valor da tela

    if (!validarCategoriaEscolhida(categoriaEscolhida)) {
        alert("Categoria Inválida")
        telaListarCategorias();
    }

}

telaInicial();
telaListarCategorias();






