import { Pergunta, Categoria, Usuario, Adm } from './entidades.js'
import { bancoCategorias, bancoUsuarios, bancoPerguntas } from './banco_de_dados.js';

//FUNÇÕES QUE PRECISAM SER EXPORTADAS
function criarNovoUsuario(nomeUsuario, senhaUsuario) {//cria um novo usuário

    bancoUsuarios.push(new Usuario(nomeUsuario, senhaUsuario))
    return true;
}

function triagemUsuario(nomeUsuario, senhaUsuario) {

    let usuarioJaExiste = verificarUsuarioExistente(nomeUsuario); //Chama a função verificar nomeExistente
    // let usuarioEmBranco = verificarUsuarioEmBranco(nomeUsuario, senhaUsuario);

    // if (usuarioEmBranco) {

    //     return false;
    // }

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

function listarCategoriasPrompt() {//retorna uma string que vai ser usada no prompt da telaListarCategorias.

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

function listarPerguntasCategoria(indiceCategoria) {

    console.log("Entrou na listar perguntas") //pode apagar quando começar a mexer

    /*
    Aqui tu usa um filter ou sei lá pra pegar as perguntas que tem 
    categoria.nome == bancoCategorias[indiceCategoria].nome (Ou algo assim)
    */
}

function listarPontuacaoGeral() {
    const arrayNomePontuacao = bancoUsuarios.map((usuario) => {
        return usuario
    })

    let texto = ''

    for (let i = 0; i < arrayCategorias.length; i++) {
        texto += `${i + 1} - ${arrayCategorias[i]} \n `
    }

    return `Escolha uma categoria: \n ${texto}`
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

function verificarCampoEmBranco(atributo) {//verifica se o nome recebido tem alguma coisa

    if (atributo == 0) {
        alert("Campo em branco. Tente novamente!")
        return true;
    } else {
        return false;
    }
}

export { verificarCampoEmBranco, triagemUsuario, listarCategoriasPrompt, validarCategoriaEscolhida, listarPerguntasCategoria }

/*
module.exports = {
    validarSairPrograma
}

module.exports = funcoesQuiz
*/