class Pergunta {
    constructor(categoria, texto, alternativa1, alternativa2, alternativaCorreta) {
        this.categoria = categoria
        this.pergunta = texto
        this.alternativa1 = alternativa1;
        this.alternativa2 = alternativa2;
        this.opcaoCorreta = alternativaCorreta;
    }
}

export {
    Pergunta
}


// class Pergunta {
//     constructor(categoria, texto, respostas) {
//         this.categoria = categoria
//         this.pergunta = texto
//         this.respostas = respostas [
//             { opcao: "", correta: null },
//             { opcao: "", correta: null },
//             { opcao: "", correta: null },
//             { opcao: "", correta: null }
//         ]
//     }
// }

// export {
//     Pergunta
// }
