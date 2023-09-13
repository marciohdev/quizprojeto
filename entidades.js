
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
    }
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
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
