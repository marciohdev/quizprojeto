import { Pergunta, Categoria, Usuario, Adm } from './entidades.js'
import { bancoUsuarios } from './banco_de_dados.js';


function criarNovoUsuario(nome) {

    console.log("Nome recebido: " + nome)

    let nomeInvalido = verificarNomeInvalido(nome)
    let usuarioJaExiste = verificarUsuarioExistente(nome);

    if (nomeInvalido) {
        alert("Usuário Inválido, tente novamente")
    } else if (usuarioJaExiste) {
        alert("Usuário Já existe, tente novamente")
    } else {
        console.log("criou novo usuário")
        let usuario1 = new Usuario(nome);
        bancoUsuarios.push(usuario1)
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

function verificarNomeInvalido(nome) {
    if ((nome === null) || (nome == "0") || (nome.trim() == "")) {
        console.log("ENTROU NO NOME INVALIDO")
        return true;
    }

    return false;
}


export { criarNovoUsuario }

/*
module.exports = {
    validarSairPrograma
}

module.exports = funcoesQuiz
*/