import { bancoPerguntas } from '../banco/banco_de_dados.js'

class Categoria {
    constructor(nome) {
        this.nome = nome;
        this.pontosCategoria = []
    }

    listarPontuacaoCategoria() {
        let texto = ''

        this.pontosCategoria.sort((a, b) => b.pontuacao - a.pontuacao)

        for (let i = 0; i < this.pontosCategoria.length; i++) {

            texto += `${i + 1}º - ${this.pontosCategoria[i].nome} - ${this.pontosCategoria[i].pontuacao} PTS \n `
        }
        return `${texto}`
    }


    listarPerguntasCategoria() {

        //criando um array somente com as perguntas da categoria indicada
        const perguntasDaCategoria = bancoPerguntas.filter(pergunta => pergunta.categoria.nome === this.nome);

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

}

export {
    Categoria
}
