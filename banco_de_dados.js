import { Categoria, Pergunta } from './entidades.js';

//CRIAÇÃO DAS CATEGORIAS PADRÃO DO SISTEMA
let categoria1 = new Categoria("Lógica de Programação")
let categoria2 = new Categoria("Javascript")
let categoria3 = new Categoria("Padrões de Projeto")


//"BANCO DE DADOS" do sistema
let bancoUsuarios = [];
let bancoPerguntas = [];
let bancoCategorias = [categoria1, categoria2, categoria3];


export { bancoUsuarios, bancoCategorias } 