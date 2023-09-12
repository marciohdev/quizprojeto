
//const funcoesQuiz = require('./funcoes')
//const { validarSairPrograma } = require("./funcoes");
import { criarNovoUsuario } from './funcoes.js';
import { Pergunta, Categoria, Usuario, Adm } from './entidades.js';


function telaInicial() {
    let nomeUsuario = "";

    do {
        nomeUsuario = prompt("Insira seu nome:  (Pressione 0 para sair)", "")

        if (nomeUsuario != 0) {
            console.log("Entrou no if")
            criarNovoUsuario(nomeUsuario);
        }

    } while (nomeUsuario != "0")
}

telaInicial();






