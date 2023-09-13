import { Pergunta, Categoria, Usuario, Adm } from './entidades.js'
import { bancoCategorias, bancoUsuarios, bancoPerguntas } from './banco_de_dados.js';

//FUNÇÕES QUE PRECISAM SER EXPORTADAS
function criarNovoUsuario(nome) {//cria um novo usuário

    let usuarioJaExiste = verificarUsuarioExistente(nome); //Chama a função verificar nomeExistente
    let usuarioEmBranco = verificarUsuarioEmBranco(nome);

    if (usuarioJaExiste || usuarioEmBranco) {
        alert("Usuário já existe ou Inválido. Tente novamente")
        return false;
    } else {
        let usuario1 = new Usuario(nome);
        bancoUsuarios.push(usuario1)
        return true;
    }
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

//FUNÇÕES CHAMADAS POR OUTRAS FUNÇÕES (NÃO PRECISAM SER EXPORTADAS)
function verificarUsuarioExistente(nome) {//Verifica a existência de usuário com mesmo nome

    for (let i = 0; i < bancoUsuarios.length; i++) {

        if (nome == bancoUsuarios[i].nome) {
            return true;
        }
    }
    return false; //Caso não ache nome igual, retorna false
}

function verificarUsuarioEmBranco(nome) {//verifica se o nome recebido tem alguma coisa

    if (nome == 0) {
        return true;
    } else {
        return false;
    }
}

export { criarNovoUsuario, listarCategoriasPrompt, validarCategoriaEscolhida, listarPerguntasCategoria }

/*
module.exports = {
    validarSairPrograma
}

module.exports = funcoesQuiz
*/