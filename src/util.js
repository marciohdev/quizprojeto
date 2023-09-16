
import { bancoUsuarios } from './banco_de_dados.js';

function listarPontuacaoGeral() {
    let texto = ''

    //ordenando o banco de dados Usuários através de um sort
    bancoUsuarios.sort((a, b) => b.pontuacao - a.pontuacao)

    console.log(bancoUsuarios)//teste

    for (let i = 0; i < bancoUsuarios.length; i++) {
        texto += `${i + 1}º - ${bancoUsuarios[i].nome} - ${bancoUsuarios[i].pontuacao} PTS \n `
    }

    return `${texto}`
}

//Feito, não testado
function somarPontuacao(pontuacao, usuarioAtual, categoriaAtual) {

    for (let i = 0; i < categoriaAtual.pontosCategoria.length(); i++) {

        if (categoriaAtual.pontosCategoria[i].nome == usuarioAtual.nome) {

            categoriaAtual.pontosCategoria[i].pontuacao += pontuacao;
            usuarioAtual.pontuacao += pontuacao;
        }
    }

}
//Feito, não testado
function listarPontuacaoCategoria(categoria, usuarioAtual) {
    let texto = ''

    //ordenando o array pontosCategoria através de um sort
    categoria.pontosCategoria.sort((a, b) => b.pontuacao - a.pontuacao)

    for (let i = 0; i < categoria.pontosCategoria.length; i++) {
        if (categoria.pontosCategoria[i].nome == usuarioAtual.nome) {
            texto += `${i + 1}º - ${categoria.pontosCategoria[i].nome} - 
            ${categoria.pontosCategoria[i].pontuacao} PTS \n `
        }

    }
    return `${texto}`
}

function verificarCampoEmBranco(atributo) {//verifica se o nome recebido tem alguma coisa

    if (atributo == 0) {
        alert("Campo em branco. Tente novamente!")
        return true;
    } else {
        return false;
    }
}

export { listarPontuacaoGeral, verificarCampoEmBranco, listarPontuacaoCategoria, contabilizarPontuacao }
