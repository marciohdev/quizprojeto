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

let pergunta1 = new Pergunta (programacao, "Qual é o principal objetivo da lógica de programação?", 
[
    {opcao: "a) Escrever código de forma rápida", correta: false },
    {opcao: "b) Resolver problemas de forma eficiente", correta: true},
    {opcao: "c) Criar interfaces gráficas atraentes", correta: false },
    {opcao: "d) Depurar código existente", correta: false }
]
)

let pergunta2 = new Pergunta (programacao, "O que é um algoritmo?", 
[
    {opcao: "a) Um erro no código de programação", correta: false },
    {opcao: "b) Um programa de computador", correta: false},
    {opcao: "c) Uma sequência de instruções para resolver um problema", correta: true },
    {opcao: "d) Um sistema operacional", correta: false }    
]
)

let pergunta3 = new Pergunta (programacao, "O que é uma variável em programação?",
[
    {opcao: "a) Um valor constante", correta: false },
    {opcao: "b) Uma instrução condicional", correta: false},
    {opcao: "c) Um local para armazenar dados", correta: true },
    {opcao: "d) Um loop", correta: false }     
]
)

let pergunta4 = new Pergunta (programacao, "Qual é a estrutura de controle usada para repetir um bloco de código várias vezes em um programa?",
[
    {opcao: "a) Condição", correta: false },
    {opcao: "b) Variável", correta: false},
    {opcao: "c) Função", correta: false },
    {opcao: "d) Loop", correta: true }     
]
)

let pergunta5 = new Pergunta (programacao, "Em programação, o que é uma condição?",
[
    {opcao: "a) Um tipo de dado", correta: false },
    {opcao: "b) Um erro de sintaxe", correta: false},
    {opcao: "c) Uma instrução de repetição", correta: false },
    {opcao: "d) Uma expressão que avalia como verdadeira ou falsa", correta: true }     
]
)

let pergunta6 = new Pergunta (programacao, "Qual é o operador usado para comparar se dois valores são iguais em programação?",
[
    {opcao: "a) ==", correta: true },
    {opcao: "b) ++", correta: false},
    {opcao: "c) =", correta: false },
    {opcao: "d) !=", correta: false }     
]
)

let pergunta7 = new Pergunta (programacao, "O que é uma string em programação?",
[
    {opcao: "a) Um tipo de dado para armazenar números inteiros", correta: false },
    {opcao: "b) Um tipo de dado para armazenar texto", correta: true},
    {opcao: "c) Uma estrutura de repetição", correta: false },
    {opcao: "d) Uma função matemática", correta: false }     
]
)

let pergunta8 = new Pergunta (programacao, "O que é um array (ou vetor) em programação?",
[
    {opcao: "a) Uma estrutura de controle", correta: false },
    {opcao: "b) Um tipo de dado para armazenar texto", correta: false},
    {opcao: "c) Uma coleção de elementos", correta: true },
    {opcao: "d) Uma função matemática", correta: false }     
]
)

let pergunta9 = new Pergunta (programacao, "Em programação, o que é um operador lógico AND?",
[
    {opcao: "a) Um operador que verifica se dois valores são iguais", correta: false },
    {opcao: "b) Um operador que verifica se pelo menos um dos valores é verdadeiro", correta: false},
    {opcao: "c) Um operador que verifica se ambos os valores são verdadeiros", correta: true },
    {opcao: "d) Um operador que verifica se nenhum dos valores é verdadeiro", correta: false }     
]
)

let pergunta10 = new Pergunta (programacao, "O que é escopo de uma variável em programação?",
[
    {opcao: "a) O nome de uma variável", correta: false },
    {opcao: "b) O valor de uma variável", correta: false},
    {opcao: "c) A área do programa onde uma variável é válida e pode ser acessada", correta: true },
    {opcao: "d) O tipo de dado de uma variável", correta: false }     
]
)

let pergunta11 = new Pergunta (programacao, "O que é recursão em programação?",
[
    {opcao: "a) Um tipo de erro", correta: false },
    {opcao: "b) Uma estrutura de controle", correta: false},
    {opcao: "c) Uma variável global", correta: false },
    {opcao: "d) Uma função que chama a si mesma", correta: true }     
]
)

let pergunta12 = new Pergunta (programacao, "O que é refatoração em programação?",
[
    {opcao: "a) Criar um novo programa do zero", correta: false },
    {opcao: "b) Melhorar a estrutura e legibilidade do código sem alterar seu comportamento", correta: true},
    {opcao: "c) Testar o código em diferentes sistemas operacionais", correta: false },
    {opcao: "d) Depurar o código", correta: false }     
]
)

let pergunta13 = new Pergunta (programacao, "O que é depuração em programação?",
[
    {opcao: "a) Escrever código sem erros", correta: false },
    {opcao: "b) Testar um programa para garantir que ele funcione corretamente", correta: true},
    {opcao: "c) Melhorar o desempenho de um programa", correta: false },
    {opcao: "d) Documentar o código", correta: false }     
]
)

let pergunta14 = new Pergunta (programacao, "O que é um loop while em programação?",
[
    {opcao: "a) Um tipo de dado", correta: false },
    {opcao: "b) Uma função matemática", correta: true},
    {opcao: "b) Uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira", correta: false },
    {opcao: "d) Uma variável", correta: false }     
]
)

let pergunta15 = new Pergunta (programacao, "Em programação, o que é uma função?",
[
    {opcao: "a) Uma sequência de números aleatórios", correta: false },
    {opcao: "b) Um operador lógico", correta: false},
    {opcao: "c) Um tipo de dado", correta: false },
    {opcao: "d) Um bloco de código reutilizável", correta: true }     
]
)

//-> Exportados para o banco de dados no final

let bancoUsuarios = [usuario1, usuario2, usuario3];
let bancoPerguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15];
let bancoCategorias = [programacao, javascript];




export { bancoUsuarios, bancoCategorias, bancoPerguntas } 