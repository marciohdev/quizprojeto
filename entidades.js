
class Pergunta {
    constructor(categoria, texto) {
        this.categoria = categoria;
        this.texto = texto;
        this.pontuacao = 1;
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
