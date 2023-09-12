import { Pergunta, Categoria, Usuario, Adm } from './entidades.js'
import { bancoUsuarios } from './banco_de_dados.js';


function criarNovoUsuario(nome) {

    let usuario1 = new Usuario(nome);
    bancoUsuarios.push(usuario1)

    console.log(bancoUsuarios)

}

export { criarNovoUsuario }

/*
module.exports = {
    validarSairPrograma
}

module.exports = funcoesQuiz
*/