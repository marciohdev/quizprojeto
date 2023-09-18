class Pergunta {
    constructor(categoria, texto, alternativa1, alternativa2, alternativa3, alternativa4, alternativaCorreta) {
        this.categoria = categoria
        this.pergunta = texto
        this.alternativa1 = alternativa1;
        this.alternativa2 = alternativa2;
        this.alternativa3 = alternativa3;
        this.alternativa4 = alternativa4
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
