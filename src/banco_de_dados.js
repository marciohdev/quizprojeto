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
let programacao = new Categoria("programacao")
let javascript = new Categoria("Javascript")
//-> Exportadas para banco_de_dados no final

//CRIAÇÃO DAS PERGUNTAS - Já cria e relaciona ela com a categoria desejada
// let pergunta1 = new Pergunta(programacao, "Qual é o principal objetivo da lógica de programação?", "a) Escrever código de forma rápida", "b) Resolver problemas de forma eficiente", "c) Criar interfaces gráficas atraentes", "d) Depurar código existente", "b) Resolver problemas de forma eficiente")

// let pergunta2 = new Pergunta(programacao, "O que é um algoritmo?", "a) Um erro no código de programação", "b) Um programa de computador", "c) Uma sequência de instruções para resolver um problema", "d) Um sistema operacional" ,"c) Uma sequência de instruções para resolver um problema")
// let pergunta3 = new Pergunta (programacao, "O que é uma variável em programação?", "a) Um valor constante", "b) Uma instrução condicional", "c) Um local para armazenar dados", "d) Um loop", "c) Um local para armazenar dados")
// let pergunta4 = new Pergunta (programacao, "Qual é a estrutura de controle usada para repetir um bloco de código várias vezes em um programa?", "a) Condição", "b) Variável", "c) Função", "d) Loop", "d) Loop")
// let pergunta5 = new Pergunta (programacao, "Em programação, o que é uma condição?", "a) Um tipo de dado", "b) Um erro de sintaxe", "c) Uma instrução de repetição", "d) Uma expressão que avalia como verdadeira ou falsa", "d) Uma expressão que avalia como verdadeira ou falsa")
// let pergunta6 = new Pergunta (programacao, "Qual é o operador usado para comparar se dois valores são iguais em programação?", "a) ==", "b) ++", "c) =", "d) !=" , "a) ==")
// let pergunta7 = new Pergunta (programacao, "O que é uma string em programação?", "a) Um tipo de dado para armazenar números inteiros", "b) Um tipo de dado para armazenar texto", "c) Uma estrutura de repetição" , "d) Uma função matemática" , "b) Um tipo de dado para armazenar texto")
// let pergunta8 = new Pergunta(programacao, "O que é um array (ou vetor) em programação?" , "a) Uma estrutura de controle", "b) Um tipo de dado para armazenar texto", "c) Uma coleção de elementos do mesmo tipo", "d) Uma expressão condicional", "c) Uma coleção de elementos do mesmo tipo")
// let perguntas9 = new Pergunta (programacao, "Em programação, o que é um operador lógico AND?", "a) Um operador que verifica se dois valores são iguais", "b) Um operador que verifica se pelo menos um dos valores é verdadeiro", "c) Um operador que verifica se ambos os valores são verdadeiros", "d) Um operador que verifica se nenhum dos valores é verdadeiro", "c) Um operador que verifica se ambos os valores são verdadeiros")
// let pergunta10 = new Pergunta (programacao, "O que é escopo de uma variável em programação?", "a) O nome de uma variável", "b) O valor de uma variável", "c) A área do programa onde uma variável é válida e pode ser acessada" ,"d) O tipo de dado de uma variável", "c) A área do programa onde uma variável é válida e pode ser acessada")S

//-> Exportados para o banco de dados no final

let bancoUsuarios = [usuario1, usuario2, usuario3];
let bancoPerguntas = [/*pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, perguntas9, pergunta10*/];
let bancoCategorias = [programacao, javascript];




export { bancoUsuarios, bancoCategorias, bancoPerguntas } 