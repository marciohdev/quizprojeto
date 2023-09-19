
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

//PONTUAÇÂO
//< --PENDENTE-->
function adicionarPontuacao(pontuacaoRecebida, usuarioAtual, categoriaAtual) {

    let cont = 0; //Esse contador serve pra saber se a pessoa já tem registro dentro da
    //categoria ou não.

    for (let i = 0; i < categoriaAtual._pontosCategoria.length; i++) {

        if (categoriaAtual._pontosCategoria[i].nome == usuarioAtual.getNome) {

            categoriaAtual._pontosCategoria[i].pontuacao += pontuacaoRecebida;
            usuarioAtual.adicionarPontuacao(pontuacaoRecebida);
            cont++;
        }
    }
    //Se essa pessoa não tiver jogado ainda esta categoria, deve-se criar novo registro nesse array.
    if (cont == 0) {
        categoriaAtual.adicionarPontos(usuarioAtual.getNome, pontuacaoRecebida); //cria o registro e adiciona os pontos
        usuarioAtual.adicionarPontuacao(pontuacaoRecebida); //adiciona na pontuação geral do usuário
    }
}

export { listarPontuacaoGeral, verificarCampoEmBranco, adicionarPontuacao, listarCategoriasPrompt, validarCategoriaEscolhida }
