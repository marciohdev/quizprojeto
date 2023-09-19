class Pergunta {
    constructor(categoria, texto, alternativa1, alternativa2, alternativa3, alternativa4, opcaoCorreta) {
        this._categoria = categoria
        this._pergunta = texto
        this._alternativa1 = alternativa1;
        this._alternativa2 = alternativa2;
        this._alternativa3 = alternativa3;
        this._alternativa4 = alternativa4
        this._opcaoCorreta = opcaoCorreta;
    }

    get getCategoria() {
        return this._categoria;
    }

    get getPergunta() {
        return this._pergunta;
    }

    get getAlternativa1() {
        return this._alternativa1;
    }

    get getAlternativa2() {
        return this._alternativa2;
    }

    get getAlternativa3() {
        return this._alternativa3;
    }

    get getAlternativa4() {
        return this._alternativa4;
    }

    get getOpcaoCorreta() {
        return this._opcaoCorreta;
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
