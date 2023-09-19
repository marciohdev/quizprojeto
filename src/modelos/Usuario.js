class Usuario {
    constructor(nome, senha) {
        this._nome = nome;
        this._senha = senha;
        this._pontuacao = 0;
    }

    get getNome() {
        return this._nome;
    }

    get getSenha() {
        return this._senha;
    }

    set setPontuacao(pontuacao) {
        this._pontuacao = pontuacao;
    }

    get getPontuacao() {
        return this._pontuacao;
    }

    adicionarPontuacao(pontuacaoRecebida) {
        this._pontuacao += pontuacaoRecebida;
    }
}

export {
    Usuario
}
