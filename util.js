// import { Pergunta, Categoria, Usuario, Adm } from './modelos.js'
import { bancoUsuarios } from './banco_de_dados.js';

// //FUNÇÕES QUE PRECISAM SER EXPORTADAS
// //<-- USUÁRIOS -->
// function criarNovoUsuario(nomeUsuario, senhaUsuario) {//cria um novo usuário

//     bancoUsuarios.push(new Usuario(nomeUsuario, senhaUsuario))
//     return true;
// }

// function triagemUsuario(nomeUsuario, senhaUsuario) {

//     let usuarioJaExiste = verificarUsuarioExistente(nomeUsuario); //Chama a função verificar nomeExistente
//     // let usuarioEmBranco = verificarUsuarioEmBranco(nomeUsuario, senhaUsuario);

//     // if (usuarioEmBranco) {

//     //     return false;
//     // }

//     if (usuarioJaExiste) {
//         let usuarioLogado = efetuarLogin(nomeUsuario, senhaUsuario)
//         return usuarioLogado;
//     } else {
//         criarNovoUsuario(nomeUsuario, senhaUsuario);
//         return true;
//     }
// }

// function efetuarLogin(nomeUsuario, senhaUsuario) { //função usada por triagem Usuario

//     for (let i = 0; i < bancoUsuarios.length; i++) {

//         if ((nomeUsuario == bancoUsuarios[i].nome) && (senhaUsuario == bancoUsuarios[i].senha)) {
//             console.log("Passando no true")
//             return true;
//         }
//     }
//     alert("Informações de login incorretas")
//     return false;
// }

// //<-- CATEGORIAS --> 
// function listarCategoriasPrompt() {//retorna uma string que vai ser usada no prompt da telaListarCategorias.

//     const arrayCategorias = bancoCategorias.map((categoria) => {
//         return categoria.nome
//     })

//     let texto = ''

//     for (let i = 0; i < arrayCategorias.length; i++) {
//         texto += `${i + 1} - ${arrayCategorias[i]} \n `
//     }

//     return `Escolha uma categoria: \n ${texto}`
// }

// function validarCategoriaEscolhida(categoriaEscolhida) {//Verifica se a categoria escolhida é válida
//     if (categoriaEscolhida) {
//         if (categoriaEscolhida > bancoCategorias.length || categoriaEscolhida < 1) {
//             return false;
//         } else {
//             return true;
//             //console.log(categorias[categoriaEscolhida - 1].texto[0])
//         }
//     }
// }

// function listarPerguntasCategoria(indiceCategoria) {

//     console.log("Entrou na listar perguntas") //pode apagar quando começar a mexer

//     /*
//     Aqui tu usa um filter ou sei lá pra pegar as perguntas que tem 
//     categoria.nome == bancoCategorias[indiceCategoria].nome (Ou algo assim)
//     */
// }

//<-- TELA DE PONTUAÇÃO -->
function listarPontuacaoGeral() {


    let texto = ''

    //ordenando o banco de dados Usuários através de um sort
    bancoUsuarios.sort((a, b) => b.pontuacao - a.pontuacao)

    console.log(bancoUsuarios)//teste

    for (let i = 0; i < bancoUsuarios.length; i++) {
        texto += `${i + 1}º - ${bancoUsuarios[i].nome} - ${bancoUsuarios[i].pontuacao} PTS \n `
    }

    return `Escolha uma categoria: \n ${texto}`
}

function listarPontuacaoCategoria() {
}

//FUNÇÕES CHAMADAS POR OUTRAS FUNÇÕES (NÃO PRECISAM SER EXPORTADAS)


function verificarCampoEmBranco(atributo) {//verifica se o nome recebido tem alguma coisa

    if (atributo == 0) {
        alert("Campo em branco. Tente novamente!")
        return true;
    } else {
        return false;
    }
}

export { listarPontuacaoGeral, verificarCampoEmBranco }
