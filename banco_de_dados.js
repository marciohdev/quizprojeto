import { Categoria, Pergunta, Usuario } from './entidades.js';

//CRIAÇÃO DAS CATEGORIAS PADRÃO DO SISTEMA
let programacao = new Categoria("Lógica de Programação")
let javascript = new Categoria("Javascript")
let padroesProjetos = new Categoria("Padrões de Projeto")

//CRIAÇÃO DAS PERGUNTAS - Já cria e relaciona ela com a categoria desejada
let pergunta1 = new Pergunta(programacao, "Qual o nome x? ")

let usuario1 = new Usuario("Marcio", "Marcio")

//"BANCO DE DADOS" do sistema
let bancoUsuarios = [usuario1];
let bancoPerguntas = [pergunta1];
let bancoCategorias = [programacao, javascript, padroesProjetos];


export { bancoUsuarios, bancoCategorias, bancoPerguntas } 