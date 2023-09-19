import { bancoPerguntas } from '../banco/banco_de_dados.js'

class Categoria {
    constructor(nome) {
        this._nome = nome;
        this._pontosCategoria = []
    }

    get getNome() {
        return this._nome;
    }

    //Check
    listarPontuacaoCategoria() {
        let texto = ''

        this._pontosCategoria.sort((a, b) => b.pontuacao - a.pontuacao)

        for (let i = 0; i < this._pontosCategoria.length; i++) {

            texto += `${i + 1}º - ${this._pontosCategoria[i].nome} - ${this._pontosCategoria[i].pontuacao} PTS \n `
        }
        return `${texto}`
    }

    //check
    listarPerguntasCategoria() {

        //criando um array somente com as perguntas da categoria indicada
        const perguntasDaCategoria = bancoPerguntas.filter(pergunta => pergunta._categoria.getNome === this._nome);

        if (perguntasDaCategoria.length === 0) {
            alert("Categoria inválida ou não há perguntas nessa categoria.");
            return;
        }

        shuffleArray(perguntasDaCategoria);

        //Método que embaralha
        function shuffleArray(perguntasDaCategoria) {
            for (let i = perguntasDaCategoria.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [perguntasDaCategoria[i], perguntasDaCategoria[j]] = [perguntasDaCategoria[j], perguntasDaCategoria[i]];
            }
        }

        return perguntasDaCategoria; //Já embaralhadas
    }

    //Check
    criarPontos(nome, pontuacaoRecebida) {
        this._pontosCategoria.push({
            nome: nome,
            pontuacao: pontuacaoRecebida
        });
    }

    //Check
    adicionarPontos(i, pontuacaoRecebida) {
        this._pontosCategoria[i].pontuacao += pontuacaoRecebida;
    }

}

export {
    Categoria
}
