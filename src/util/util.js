
import { bancoUsuarios, bancoCategorias } from '../banco/banco_de_dados.js';

//FUNÇÕES DE LISTAGEM 
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

function listarPontuacaoGeral() {
    let texto = ''

    //ordenando o banco de dados Usuários através de um sort
    bancoUsuarios.sort((a, b) => b.pontuacao - a.pontuacao)

    for (let i = 0; i < bancoUsuarios.length; i++) {
        texto += `${i + 1}º - ${bancoUsuarios[i].nome} - ${bancoUsuarios[i].pontuacao} PTS \n `
    }

    return `${texto}`
}

//FUNÇÕES DE VALIDAÇÂO
function verificarCampoEmBranco(atributo) {//verifica se o nome recebido tem alguma coisa

    if (atributo == 0) {
        alert("Campo em branco. Tente novamente!")
        return true;
    } else {
        return false;
    }
}

function validarCategoriaEscolhida(categoriaEscolhida) {//Verifica se a categoria escolhida é válida
    if (categoriaEscolhida) {
        if (categoriaEscolhida > bancoCategorias.length || categoriaEscolhida < 1) {
            return false;
        } else {
            //return true;
            return bancoCategorias[categoriaEscolhida - 1];
            //console.log(categorias[categoriaEscolhida - 1].texto[0])
        }
    }
}

//PONTUAÇÂO
function adicionarPontuacao(pontuacaoRecebida, usuarioAtual, categoriaAtual) {

    let cont = 0; //Esse contador serve pra saber se a pessoa já tem registro dentro da
    //categoria ou não.

    for (let i = 0; i < categoriaAtual.pontosCategoria.length; i++) {

        if (categoriaAtual.pontosCategoria[i].nome == usuarioAtual.nome) {

            categoriaAtual.pontosCategoria[i].pontuacao += pontuacaoRecebida;
            usuarioAtual.pontuacao += pontuacaoRecebida;
            cont++;
        }
    }
    //Se essa pessoa não tiver jogado ainda esta categoria, deve-se criar novo registro nesse array.
    if (cont == 0) {
        categoriaAtual.pontosCategoria.push({
            nome: usuarioAtual.nome,
            pontuacao: pontuacaoRecebida
        })
        usuarioAtual.pontuacao += pontuacaoRecebida;
    }
}

export { listarPontuacaoGeral, verificarCampoEmBranco, adicionarPontuacao, listarCategoriasPrompt, validarCategoriaEscolhida }
