
import { bancoUsuarios, bancoCategorias } from '../banco/banco_de_dados.js';

//FUNÇÕES DE LISTAGEM 
//Check
function listarCategoriasPrompt() {//retorna uma string que vai ser usada no prompt da telaListarCategorias.

    const arrayCategorias = bancoCategorias.map((categoria) => {
        return categoria.getNome;
    })

    let texto = ''

    for (let i = 0; i < arrayCategorias.length; i++) {
        texto += `${i + 1} - ${arrayCategorias[i]} \n `
    }

    return `Escolha uma categoria: \n ${texto}`
}

//check
function listarPontuacaoGeral() {
    let texto = ''

    //ordenando o banco de dados Usuários através de um sort
    bancoUsuarios.sort((a, b) => b.getPontuacao - a.getPontuacao)

    for (let i = 0; i < bancoUsuarios.length; i++) {
        texto += `${i + 1}º - ${bancoUsuarios[i].getNome} - ${bancoUsuarios[i].getPontuacao} PTS \n `
    }

    return `${texto}`
}

//FUNÇÕES DE VALIDAÇÂO
//Check
function verificarCampoEmBranco(atributo) {//verifica se o nome recebido tem alguma coisa

    if (atributo == 0) {
        alert("Campo em branco. Tente novamente!")
        return true;
    } else {
        return false;
    }
}

//Check
function validarCategoriaEscolhida(indiceCategoriaEscolhida) {//Verifica se a categoria escolhida é válida
    if (indiceCategoriaEscolhida) {
        if (indiceCategoriaEscolhida > bancoCategorias.length || indiceCategoriaEscolhida < 1) {
            return false;
        } else {
            //return true;
            return bancoCategorias[indiceCategoriaEscolhida - 1];
            //console.log(categorias[categoriaEscolhida - 1].texto[0])
        }
    }
}

function validarRespostaPergunta(respostaEscolhida) {
    if (respostaEscolhida < 1 || respostaEscolhida > 4 || Number.isNaN(respostaEscolhida)) {
        return false;
    } else {
        return true;
    }
}

//PONTUAÇÂO
//Check
function adicionarPontuacao(pontuacaoRecebida, usuarioAtual, categoriaAtual) {

    for (let i = 0; i < categoriaAtual.getPontosCategoria.length; i++) {

        if (categoriaAtual.getPontosCategoria[i].nome == usuarioAtual.getNome) {

            categoriaAtual.adicionarPontos(i, pontuacaoRecebida)
            usuarioAtual.adicionarPontuacao(pontuacaoRecebida)
            return true;
        }
    }
    //Se essa pessoa não tiver jogado ainda esta categoria, cria-se o registro dela.
    categoriaAtual.criarPontos(usuarioAtual.getNome, pontuacaoRecebida);
    usuarioAtual.adicionarPontuacao(pontuacaoRecebida);
}

export { listarPontuacaoGeral, verificarCampoEmBranco, adicionarPontuacao, listarCategoriasPrompt, validarCategoriaEscolhida, validarRespostaPergunta }
