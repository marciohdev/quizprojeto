class Pergunta {
    constructor(categoria, texto, respostas) {
        this.categoria = categoria
        this.pergunta = texto
        this.respostas = [
            { opcao: "", correta: false },
            { opcao: "", correta: true },
            { opcao: "", correta: false }
        ]
    }
}

export {
    Pergunta
}
