
import { bancoUsuarios } from './banco_de_dados.js';

//Feito
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
function adicionarPontuacao(pontuacao, usuarioAtual, categoriaAtual) {

    for (let i = 0; i < categoriaAtual.pontosCategoria.length(); i++) {

        if (categoriaAtual.pontosCategoria[i].nome == usuarioAtual.nome) {

            categoriaAtual.pontosCategoria[i].pontuacao += pontuacao;
            usuarioAtual.pontuacao += pontuacao;
        }
    }

}

function verificarCampoEmBranco(atributo) {//verifica se o nome recebido tem alguma coisa

    if (atributo == 0) {
        alert("Campo em branco. Tente novamente!")
        return true;
    } else {
        return false;
    }
}

export { listarPontuacaoGeral, verificarCampoEmBranco, adicionarPontuacao }
