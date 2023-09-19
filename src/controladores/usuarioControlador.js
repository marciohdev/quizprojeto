import { Usuario } from '../modelos/Usuario.js'
import { bancoUsuarios } from '../banco/banco_de_dados.js'


//FUNÇÕES
function criarNovoUsuario(nomeUsuario, senhaUsuario) {//cria um novo usuário

    const usuarioNovo = new Usuario(nomeUsuario, senhaUsuario)
    bancoUsuarios.push(usuarioNovo)
    alert("Usuário criado com sucesso!")
    return usuarioNovo;
}

function triagemUsuario(nomeUsuario, senhaUsuario) {

    let usuarioJaExiste = verificarUsuarioExistente(nomeUsuario); //Chama a função verificar nomeExistente

    if (usuarioJaExiste) {
        let usuarioLogado = efetuarLogin(nomeUsuario, senhaUsuario)
        return usuarioLogado;
    } else {
        let usuarioNovo = criarNovoUsuario(nomeUsuario, senhaUsuario);
        return usuarioNovo;
    }
}

function efetuarLogin(nomeUsuario, senhaUsuario) { //função usada por triagem Usuario

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if ((nomeUsuario == bancoUsuarios[i].getNome) && (senhaUsuario == bancoUsuarios[i].getSenha)) {
            alert(`Bem-vindo novamente, ${nomeUsuario}!`)
            return bancoUsuarios[i];
        }
    }
    alert("Informações de login incorretas")
    return false;
}

function verificarUsuarioExistente(nome) {//Verifica a existência de usuário com mesmo nome

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if (nome == bancoUsuarios[i].getNome) {
            return true;
        }
    }
}

export { criarNovoUsuario, triagemUsuario, efetuarLogin, verificarUsuarioExistente }