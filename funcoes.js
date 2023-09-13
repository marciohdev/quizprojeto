import { Pergunta, Categoria, Usuario, Adm } from './entidades.js'
import { bancoUsuarios } from './banco_de_dados.js';


function criarNovoUsuario(nome) {

    console.log("Nome recebido: " + nome)

    if (nome == null) {
        return false;
    }

    let usuarioJaExiste = verificarUsuarioExistente(nome);

    if (usuarioJaExiste) {
        alert("Usuário Já existe, tente novamente")
    } else {
        console.log("criou novo usuário")
        let usuario1 = new Usuario(nome);
        bancoUsuarios.push(usuario1)
        return true;
    }
}

function verificarUsuarioExistente(nome) {

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if (nome == bancoUsuarios[i].nome) {
            return true;
        }
    }
    return false; //Caso não ache nome igual, retorna false
}

export { criarNovoUsuario }

/*
module.exports = {
    validarSairPrograma
}

module.exports = funcoesQuiz
*/