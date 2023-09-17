class Pergunta {
    constructor(categoria, texto, respostas) {
        this.categoria = categoria
        this.pergunta = texto
        this.respostas = respostas [
            { opcao: "", correta: null },
            { opcao: "", correta: null },
            { opcao: "", correta: null },
            { opcao: "", correta: null }
        ]
    }
}

export {
    Pergunta
}
