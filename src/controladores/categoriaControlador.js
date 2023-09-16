import { Categoria } from '../modelos/Categoria.js'
import { bancoCategorias } from '../banco_de_dados.js'



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

//Feito, não testado
function listarPontuacaoCategoria(categoriaAtual, usuarioAtual) {
    let texto = ''

    //ordenando o array pontosCategoria através de um sort
    categoriaAtual.pontosCategoria.sort((a, b) => b.pontuacao - a.pontuacao)

    for (let i = 0; i < categoria.pontosCategoria.length; i++) {

        if (categoriaAtual.pontosCategoria[i].nome == usuarioAtual.nome) {

            texto += `${i + 1}º - ${categoriaAtual.pontosCategoria[i].nome} - 
            ${categoriaAtual.pontosCategoria[i].pontuacao} PTS \n `
        }

    }
    return `${texto}`
}

export { validarCategoriaEscolhida, listarCategoriasPrompt, listarPontuacaoCategoria }