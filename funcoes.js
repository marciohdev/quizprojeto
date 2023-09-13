import { Pergunta, Categoria, Usuario, Adm } from './entidades.js'
import { bancoCategorias, bancoUsuarios } from './banco_de_dados.js';

//FUNÇÕES QUE PRECISAM SER EXPORTADAS
function criarNovoUsuario(nome) {//cria um novo usuário

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

function listarCategorias() {//lista as categorias existentes por nome

    const arrayCategorias = bancoCategorias.map((categoria) => {
        return categoria.nome
    })

    let texto = ''

    for (let i = 0; i < arrayCategorias.length; i++) {
        texto += `${i + 1} - ${arrayCategorias[i]} \n `
    }

    return `Escolha uma categoria: \n ${texto}`
}

function validarCategoriaEscolhida(categoriaEscolhida) {//Verifica se a categoria escolhida é válida
    if (categoriaEscolhida) {
        if (categoriaEscolhida > bancoCategorias.length || categoriaEscolhida < 1) {
            return false;
        } else {
            return true;
            //console.log(categorias[categoriaEscolhida - 1].texto[0])
        }
    }
}

//FUNÇÕES CHAMADAS POR OUTRAS FUNÇÕES (NÃO PRECISAM SER EXPORTADAS)
function verificarUsuarioExistente(nome) {//Verifica a existência de usuário com mesmo nome

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if (nome == bancoUsuarios[i].nome) {
            return true;
        }
    }
    return false; //Caso não ache nome igual, retorna false
}

export { criarNovoUsuario, listarCategorias, validarCategoriaEscolhida }

/*
module.exports = {
    validarSairPrograma
}

module.exports = funcoesQuiz
*/