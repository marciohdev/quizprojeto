import { Usuario } from './modelos/Usuario.js'
import { Categoria } from './modelos/Categoria.js'
import { Pergunta } from './modelos/Pergunta.js'

//"BANCO DE DADOS" do sistema

//CRIAÇÂO MOCKS
let usuario1 = new Usuario("Marcio", "Marcio")
let usuario2 = new Usuario("Eloy", "Eloy")
let usuario3 = new Usuario("Matheus", "Matheus")

usuario3.pontuacao = 10;
usuario2.pontuacao = 15;
usuario1.pontuacao = 20;

//CRIAÇÃO DAS CATEGORIAS PADRÃO DO SISTEMA
let programacao = new Categoria("Lógica de Programação")
let javascript = new Categoria("Javascript")
let padroesProjetos = new Categoria("Padrões de Projeto")
//-> Exportadas para banco_de_dados no final

//CRIAÇÃO DAS PERGUNTAS - Já cria e relaciona ela com a categoria desejada
let pergunta1 = new Pergunta(programacao, "Qual o nome x? ")
//-> Exportados para o banco de dados no final

let bancoUsuarios = [usuario1, usuario2, usuario3];
let bancoPerguntas = [pergunta1];
let bancoCategorias = [programacao, javascript, padroesProjetos];




export { bancoUsuarios, bancoCategorias, bancoPerguntas } 