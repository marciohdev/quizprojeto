import { Usuario } from '../modelos/Usuario.js'
import { Categoria } from '../modelos/Categoria.js'
import { Pergunta } from '../modelos/Pergunta.js'

//"BANCO DE DADOS" do sistema

//CRIAÇÂO MOCKS
let usuario1 = new Usuario("Marcio", "Marcio")
let usuario2 = new Usuario("Eloy", "Eloy")
let usuario3 = new Usuario("Matheus", "Matheus")

usuario3.pontuacao = 10;
usuario2.pontuacao = 15;
usuario1.pontuacao = 20;

//CRIAÇÃO DAS CATEGORIAS PADRÃO DO SISTEMA
let logica = new Categoria("logica")
let javascript = new Categoria("Javascript")


//-> Exportados para o banco de dados no final

let bancoUsuarios = [usuario1, usuario2, usuario3];
let bancoPerguntas = [

    new Pergunta(logica, "Qual é o principal objetivo da lógica de programação?", "1 - Escrever código de forma rápida.", "2 - Resolver problemas de forma eficiente.", "3 - Criar interfaces gráficas atraentes.", "4 - Depurar código existente.", 2),
    new Pergunta(logica, "O que é um algoritmo?", "1 - Um erro no código de programação.", "2 - Um programa de computador.", "3 - Uma sequencia de instruções para resolver um problema", "4 - Um sistema Operacional.", 3),
    new Pergunta(logica, "O que é uma variável na programacao?", "1 - Um valor constante", "2 - Uma instrução condicional", "3 - Um local para armazenar dados", "4 - Um loop", 3),
    new Pergunta(logica, "Qual é a estrutura de controle usada para repetir um bloco de código várias vezes?", "1 - Condicional", "2 - Variável", "3 - Função", "4 - Loop", 4),
    new Pergunta(logica, "Em programação, o que é uma condição?", "1 - Um tipo de dado", "2 - Um erro de sintaxe", "3 - Uma instrução de repetição", "4 - Uma expressão que avalia como verdadeira ou falsa", 4),
    new Pergunta(logica, "Qual é o operador usado para comparar se dois valores são iguais em programação?", "1 - == (igualdade)", "2 - ++ (incremento)", "3 - = (atribuição)", "4 - != (diferente)", 1),
    new Pergunta(logica, "O que é uma string em programação?", "1 - Um tipo de dado para armazenar números inteiros", "2 - Um tipo de dado para armazenar texto", "3 - Uma estrutura de repetição", "4 - Uma função matemática", 2),
    new Pergunta(logica, "O que é um array (ou vetor) em programação?", "1 - Uma estrutura de controle", "2 - Um tipo de dado para armazenar números", "3 - Uma coleção de elementos", "4 - Uma função matemática", 3),
    new Pergunta(logica, "Em programação, o que é um operador lógico AND?", "1 - Um operador que verifica se dois valores são iguais", "2 - Um operador que verifica se pelo menos um dos valores é verdadeiro", "3 - Um operador que verifica se ambos os valores são verdadeiros", "4 - Um operador que verifica se nenhum dos valores é verdadeiro", 3),
    new Pergunta(logica, "O que é escopo de uma variável em programação?", "1 - O nome de uma variável", "2 - O valor de uma variável", "3 - A área do programa onde uma variável é válida e pode ser acessada", "4 - O tipo de dado de uma variável", 3),
    new Pergunta(logica, "O que é recursão em programação?", "1 - Um tipo de erro", "2 - Uma estrutura de controle", "3 - Uma variável global", "4 - Uma função que chama a si mesma", 4),
    new Pergunta(logica, "O que é refatoração em programação?", "1 - Criar um novo programa do zero", "2 - Melhorar a estrutura e legibilidade do código sem alterar seu comportamento", "3 - Testar o código em diferentes sistemas operacionais", "4 - Depurar o código", 2),
    new Pergunta(logica, "O que é depuração em programação?", "1 - Escrever código sem erros", "2 - Testar um programa para garantir que ele funcione corretamente", "3 - A reescrita de um programa do zero", "4 - Documentar o código", 2),
    new Pergunta(logica, "O que é um loop while em programação?", "1 - Um tipo de dado", "2 - Uma função matemática", "3 - Uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira", "4 - Uma variável", 3),
    new Pergunta(logica, "Em programação, o que é uma função?", "1 - Uma sequência de números aleatórios", "2 - Um operador lógico", "3 - Um tipo de dado", "4 - Um bloco de código reutilizável", 4),
    new Pergunta(javascript, "Qual palavra-chave é usada para declarar uma variável em JavaScript?", "1 - var", "2 - variable", "3 - v", "4 - declare", 1),
    new Pergunta(javascript, "Qual função é usada para exibir algo no console do navegador?", "1 - show()", "2 - display()", "3 - print()", "4 - log()", 4),
    new Pergunta(javascript, "O que é uma matriz em JavaScript?", "1 - Um tipo de loop", "2 - Uma coleção ordenada de valores", "3 - Uma função", "4 - Uma classe", 2),
    new Pergunta(javascript, "Como você chama uma função em JavaScript?", "1 - executeFunction()", "2 - callFunction()", "3 - functionName()", "4 - runFunction()", 3),
    new Pergunta(javascript, "Qual é a estrutura de controle usada para executar um bloco de código repetidamente em JavaScript?", "1 - if", "2 - for", "3 - switch", "4 - try", 2),
    new Pergunta(javascript, "Qual é a maneira correta de declarar uma constante em JavaScript?", "1 - constant myConst = 10;", "2 - var myConst = 10;", "3 - let myConst = 10;", "4 - const myConst = 10;", 4),
    new Pergunta(javascript, "Qual método é usado para adicionar um elemento ao final de uma matriz em JavaScript?", "1 - push()", "2 - add()", "3 - append()", "4 - insert()", 1),
    new Pergunta(javascript, "Qual função é usada para converter uma string em um número não fracionado em JavaScript?", "1 - toInt()", "2 - parseNumber()", "3 - parseInt()", "4 - convertNumber()", 3),
    new Pergunta(javascript, "Qual dos seguintes não é um tipo de dado primitivo em JavaScript?", "1 - Number", "2 - String", "3 - Array", "4 - Boolean", 3),
    new Pergunta(javascript, "Qual dos seguintes não é um tipo de dado em JavaScript?", "1 - String", "2 - Null", "3 - Float", "4 - Double", 4),
    new Pergunta(javascript, "Qual método é usado para adicionar um elemento ao início de uma matriz em JavaScript?", "1 - unshift()", "2 - push()", "3 - add()", "4 - append()", 1),
    new Pergunta(javascript, "Qual estrutura de controle é usada para executar um bloco de código quando uma condição é falsa em JavaScript?", "1 - if", "2 - while", "3 - for", "4 - else", 4),
    new Pergunta(javascript, "Qual método é usado para remover o último elemento de uma matriz em JavaScript?", "1 - pop()", "2 - remove()", "3 - delete()", "4 - shift()", 1),
    new Pergunta(javascript, "O que a função parseFloat() faz em JavaScript?", "1 - Converte uma string em um número decimal", "2 - Converte uma string em um número inteiro", "3 - Converte uma string em uma data", "4 - Converte uma string em um objeto", 1),
    new Pergunta(javascript, "Qual método é usado para encontrar o número de elementos em uma matriz em JavaScript?", "1 - count()", "2 - length()", "3 - size()", "4 - elements()", 2)

];

let bancoCategorias = [logica, javascript];

export { bancoUsuarios, bancoCategorias, bancoPerguntas } 