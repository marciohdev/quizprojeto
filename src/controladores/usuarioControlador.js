import { Usuario } from '../modelos/Usuario.js'
import { bancoUsuarios } from '../banco_de_dados.js'


//FUNÇÕES
function criarNovoUsuario(nomeUsuario, senhaUsuario) {//cria um novo usuário

    bancoUsuarios.push(new Usuario(nomeUsuario, senhaUsuario))
    alert("Usuário criado com sucesso!")
    return true;
}

function triagemUsuario(nomeUsuario, senhaUsuario) {

    let usuarioJaExiste = verificarUsuarioExistente(nomeUsuario); //Chama a função verificar nomeExistente

    if (usuarioJaExiste) {
        let usuarioLogado = efetuarLogin(nomeUsuario, senhaUsuario)
        return usuarioLogado;
    } else {
        criarNovoUsuario(nomeUsuario, senhaUsuario);
        return true;
    }
}

function efetuarLogin(nomeUsuario, senhaUsuario) { //função usada por triagem Usuario

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if ((nomeUsuario == bancoUsuarios[i].nome) && (senhaUsuario == bancoUsuarios[i].senha)) {
            console.log("Passando no true")
            return true;
        }
    }
    alert("Informações de login incorretas")
    return false;
}

function verificarUsuarioExistente(nome) {//Verifica a existência de usuário com mesmo nome

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if (nome == bancoUsuarios[i].nome) {
            return true;
        }
    }
    return false; //Caso não ache nome igual, retorna false
}
export { criarNovoUsuario, triagemUsuario, efetuarLogin, verificarUsuarioExistente }