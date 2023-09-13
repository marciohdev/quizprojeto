
class Pergunta {
    constructor(categoria, texto, opcao1, opca2, opcao3, opcaoCorreta) {
        this.categoria = categoria;
        this.texto = texto
        this.opcao1 = ""
        this.opcao2 = ""
        this.opcao3 = ""
        this.opcaoCorreta = 0;
    }
}

class Categoria {
    constructor(nome) {
        this.nome = nome;
        this.perguntas = [];
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.pontuacao = 0;
    }

}

class Adm {
    constructor() {
        this.nome = marcio;
        this.senha = marcio;
    }

}


export {
    Pergunta, Categoria, Usuario, Adm
}
